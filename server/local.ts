import { createServer } from "node:http";
import { readContactConfig } from "./contact/config.ts";
import { handleContact } from "./contact/handler.ts";
import { memoryRateLimiter } from "./contact/rateLimit.ts";
import { maxBodyBytes } from "../shared/contact/schema.ts";

const config = readContactConfig();
const limiter = memoryRateLimiter(config.rateLimit, config.rateWindowMs);
const port = Number(process.env.CONTACT_LOCAL_PORT ?? "8791");

const server = createServer(async (req, res) => {
  const chunks: Buffer[] = [];
  let size = 0;
  for await (const chunk of req) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    size += buffer.length;
    if (size > maxBodyBytes) break;
    chunks.push(buffer);
  }
  const rawBody = Buffer.concat(chunks);
  const result = await handleContact(
    {
      method: req.method ?? "GET",
      origin: req.headers.origin ?? null,
      contentType: req.headers["content-type"] ?? null,
      contentLength: req.headers["content-length"] ? Number(req.headers["content-length"]) : null,
      rawBody,
      remoteAddress: req.socket.remoteAddress ?? "unknown",
    },
    config,
    limiter,
  );
  res.writeHead(result.status, { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" });
  res.end(JSON.stringify(result.body));
});

server.listen(port, "127.0.0.1", () => {
  console.info(JSON.stringify({ category: "contact", outcome: "listening", port, mode: config.mode }));
});
