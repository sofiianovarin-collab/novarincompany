import assert from "node:assert/strict";
import { test } from "node:test";
import { maxBodyBytes } from "../../shared/contact/schema.ts";
import { readContactConfig } from "./config.ts";
import { handleContact, type ContactRequest } from "./handler.ts";
import { clearLocalCaptures, localCaptures, localTestTransport } from "./localTransport.ts";
import { memoryRateLimiter } from "./rateLimit.ts";

const origin = "http://127.0.0.1:5173";

function request(partial: Partial<ContactRequest> & { json?: unknown }): ContactRequest {
  const raw = partial.rawBody ?? new TextEncoder().encode(partial.json === undefined ? "" : JSON.stringify(partial.json));
  return {
    method: partial.method ?? "POST",
    origin: partial.origin === undefined ? origin : partial.origin,
    contentType: partial.contentType === undefined ? "application/json" : partial.contentType,
    contentLength: partial.contentLength ?? raw.byteLength,
    rawBody: raw,
    remoteAddress: partial.remoteAddress ?? "127.0.0.1",
  };
}

const founder = {
  inquiryType: "founder",
  fullName: "Álva O'Donnell",
  email: "founder+test@example.com",
  organization: "Sample Payments",
  website: "https://example.com",
  productStage: "Prototype",
  markets: "Example region",
  message: "Line one.\nLine two.",
};

function sandboxConfig() {
  return readContactConfig({ CONTACT_DELIVERY_MODE: "sandbox", CONTACT_ALLOWED_ORIGINS: origin, CONTACT_RATE_LIMIT: "2" });
}

test("captures each inquiry type and drops inactive fields", async () => {
  clearLocalCaptures();
  const config = sandboxConfig();
  const limiter = memoryRateLimiter(8, 60_000);
  for (const body of [
    founder,
    {
      inquiryType: "partnership",
      fullName: "Partner Example",
      email: "partner@example.com",
      organization: "Example Org",
      partnershipFocus: "Settlement",
      markets: "Example",
      message: "A partnership note.",
      productStage: "Pilot",
    },
    {
      inquiryType: "general",
      fullName: "General Example",
      email: "general@example.com",
      message: "A general note.",
      markets: "Should be dropped",
      productStage: "Pilot",
      partnershipFocus: "Should be dropped",
    },
  ]) {
    const result = await handleContact(request({ json: body }), config, limiter);
    assert.equal(result.status, 202);
  }
  assert.equal(localCaptures().length, 3);
  assert.equal(localCaptures()[2]?.text.includes("Markets"), false);
  assert.equal(localCaptures()[2]?.text.includes("Product stage"), false);
  assert.match(localCaptures()[0]?.text ?? "", /Line two/);
  assert.match(localCaptures()[0]?.subject ?? "", /Founder inquiry/);
});

test("rejects invalid, unknown, oversized, and disabled calls", async () => {
  const config = sandboxConfig();
  const limiter = memoryRateLimiter(8, 60_000);
  const invalid = await handleContact(
    request({ json: { ...founder, email: "bad\nmail@example.com", extra: true } }),
    config,
    limiter,
  );
  assert.equal(invalid.body.code, "validation");
  const unknown = await handleContact(request({ json: { inquiryType: "investor", fullName: "A", email: "a@b.co", message: "Hi" } }), config, limiter);
  assert.equal(unknown.status, 400);
  const malformed = await handleContact(request({ rawBody: new TextEncoder().encode("{") }), config, limiter);
  assert.equal(malformed.body.code, "malformed");
  const huge = new Uint8Array(maxBodyBytes + 1);
  const oversized = await handleContact(request({ rawBody: huge, contentLength: huge.byteLength }), config, limiter);
  assert.equal(oversized.status, 413);
  const method = await handleContact(request({ method: "PUT", json: founder }), config, limiter);
  assert.equal(method.status, 405);
  const type = await handleContact(request({ json: founder, contentType: "text/plain" }), config, limiter);
  assert.equal(type.status, 415);
  const foreign = await handleContact(request({ json: founder, origin: "https://evil.example" }), config, limiter);
  assert.equal(foreign.status, 403);
  const disabled = await handleContact(request({ json: founder }), readContactConfig({ CONTACT_DELIVERY_MODE: "disabled" }), limiter);
  assert.equal(disabled.status, 503);
  const live = await handleContact(
    request({ json: founder }),
    readContactConfig({ CONTACT_DELIVERY_MODE: "live", CONTACT_DELIVERY_LIVE_AUTHORIZED: "yes" }),
    limiter,
  );
  assert.equal(live.status, 503);
});

test("rate limit, rejection, and unknown acceptance do not invent delivery", async () => {
  clearLocalCaptures();
  const config = sandboxConfig();
  const limiter = memoryRateLimiter(1, 60_000);
  assert.equal((await handleContact(request({ json: founder }), config, limiter)).status, 202);
  const limited = await handleContact(request({ json: founder, remoteAddress: "127.0.0.1" }), config, limiter);
  assert.equal(limited.status, 429);
  const rejected = await handleContact(
    request({ json: founder, remoteAddress: "10.0.0.2" }),
    config,
    memoryRateLimiter(5, 60_000),
    localTestTransport("rejected"),
  );
  assert.equal(rejected.body.code, "delivery");
  const unknown = await handleContact(
    request({ json: founder, remoteAddress: "10.0.0.3" }),
    config,
    memoryRateLimiter(5, 60_000),
    localTestTransport("unknown"),
  );
  assert.equal(unknown.body.outcome, "uncertain");
  assert.equal(localCaptures().length, 1);
});
