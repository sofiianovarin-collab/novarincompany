import { createServer } from "node:http";
import { readContactConfig } from "./contact/config.ts";
import { handleContact } from "./contact/handler.ts";
import { memoryRateLimiter } from "./contact/rateLimit.ts";
import { maxBodyBytes } from "../shared/contact/schema.ts";

const config = readContactConfig();
const limiter = memoryRateLimiter(config.rateLimit, config.rateWindowMs);
const port = Number(process.env.CONTACT_LOCAL_PORT ?? "8791");

const responseHeaders = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
  "x-content-type-options": "nosniff",
};

const server = createServer(async (req, res) => {
  try {
    // Leaving the body loop early destroys the request and detaches req.socket.
    const remoteAddress = req.socket.remoteAddress ?? "unknown";
    const chunks: Buffer[] = [];
    let size = 0;
    let oversized = false;
    for await (const chunk of req) {
      const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
      size += buffer.length;
      if (size > maxBodyBytes) {
        oversized = true;
        break;
      }
      chunks.push(buffer);
    }
    const rawBody = oversized ? new Uint8Array(maxBodyBytes + 1) : Buffer.concat(chunks);
    const result = await handleContact(
      {
        method: req.method ?? "GET",
        origin: req.headers.origin ?? null,
        contentType: req.headers["content-type"] ?? null,
        contentLength: req.headers["content-length"] ? Number(req.headers["content-length"]) : null,
        rawBody,
        remoteAddress,
      },
      config,
      limiter,
    );
    res.writeHead(result.status, oversized ? { ...responseHeaders, connection: "close" } : responseHeaders);
    res.end(JSON.stringify(result.body));
  } catch {
    if (!res.headersSent) res.writeHead(500, { ...responseHeaders, connection: "close" });
    res.end(JSON.stringify({ ok: false, outcome: "uncertain" }));
  }
});

server.requestTimeout = 10_000;
server.headersTimeout = 5_000;

server.listen(port, "127.0.0.1", () => {
  console.info(JSON.stringify({ category: "contact", outcome: "listening", port, mode: config.mode }));
});
