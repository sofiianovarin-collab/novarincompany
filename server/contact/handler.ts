import { maxBodyBytes, plainTextInquiry, subjectFor, validateContactBody } from "../../shared/contact/schema.ts";
import type { ContactServerConfig } from "./config.ts";
import { localTestTransport } from "./localTransport.ts";
import type { RateLimiter } from "./rateLimit.ts";
import type { Transport } from "./transport.ts";

export type ContactHttpResult = {
  status: number;
  body: Record<string, unknown>;
};

export type ContactRequest = {
  method: string;
  origin: string | null;
  contentType: string | null;
  contentLength: number | null;
  rawBody: Uint8Array;
  remoteAddress: string;
};

function unavailable(): ContactHttpResult {
  return { status: 503, body: { ok: false, outcome: "unavailable" } };
}

export async function handleContact(
  request: ContactRequest,
  config: ContactServerConfig,
  limiter: RateLimiter,
  transport: Transport = localTestTransport(config.sandboxOutcome),
): Promise<ContactHttpResult> {
  const started = Date.now();
  const correlationId = crypto.randomUUID();
  const finish = (result: ContactHttpResult, code: string) => {
    console.info(
      JSON.stringify({
        correlationId,
        at: new Date(started).toISOString(),
        category: "contact",
        durationMs: Date.now() - started,
        outcome: code,
      }),
    );
    return result;
  };

  if (request.method === "GET") {
    return finish({ status: 200, body: { mode: config.mode === "live" ? "live" : config.mode } }, "status");
  }
  if (request.method !== "POST") return finish({ status: 405, body: { ok: false, outcome: "rejected", code: "method" } }, "method");
  if (!request.origin || !config.allowedOrigins.includes(request.origin)) {
    return finish({ status: 403, body: { ok: false, outcome: "rejected", code: "origin" } }, "origin");
  }
  if (config.mode === "disabled") return finish(unavailable(), "disabled");
  if (config.mode === "live") return finish(unavailable(), "live-inactive");
  if (!limiter.allow(request.remoteAddress)) {
    return finish({ status: 429, body: { ok: false, outcome: "rate-limited" } }, "rate-limited");
  }
  if (!request.contentType?.toLowerCase().startsWith("application/json")) {
    return finish({ status: 415, body: { ok: false, outcome: "rejected", code: "content-type" } }, "content-type");
  }
  if (request.rawBody.byteLength > maxBodyBytes || (request.contentLength !== null && request.contentLength > maxBodyBytes)) {
    return finish({ status: 413, body: { ok: false, outcome: "rejected", code: "too-large" } }, "too-large");
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(new TextDecoder().decode(request.rawBody));
  } catch {
    return finish({ status: 400, body: { ok: false, outcome: "rejected", code: "malformed" } }, "malformed");
  }

  const { payload, errors } = validateContactBody(parsed);
  if (!payload || Object.keys(errors).length > 0) {
    return finish({ status: 400, body: { ok: false, outcome: "rejected", code: "validation", fields: errors } }, "validation");
  }

  const receivedAt = new Date().toISOString();
  let result;
  try {
    result = await transport.deliver({
      payload,
      subject: subjectFor(payload.inquiryType),
      text: plainTextInquiry(payload, receivedAt),
      receivedAt,
    });
  } catch {
    return finish({ status: 504, body: { ok: false, outcome: "uncertain" } }, "unknown");
  }
  if (result.status === "accepted") {
    return finish({ status: 202, body: { ok: true, outcome: "accepted", mode: "sandbox" } }, "accepted");
  }
  if (result.status === "rejected") {
    return finish({ status: 502, body: { ok: false, outcome: "rejected", code: "delivery" } }, "delivery-rejected");
  }
  return finish({ status: 504, body: { ok: false, outcome: "uncertain" } }, "unknown");
}
