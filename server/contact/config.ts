export type DeliveryMode = "disabled" | "sandbox" | "live";

export type ContactServerConfig = {
  mode: DeliveryMode;
  allowedOrigins: string[];
  rateLimit: number;
  rateWindowMs: number;
  sandboxOutcome: "accepted" | "rejected" | "unknown";
  liveAuthorized: boolean;
};

export function readContactConfig(env: NodeJS.ProcessEnv = process.env): ContactServerConfig {
  const mode = env.CONTACT_DELIVERY_MODE;
  const deliveryMode: DeliveryMode = mode === "sandbox" || mode === "live" ? mode : "disabled";
  const origins = (env.CONTACT_ALLOWED_ORIGINS ?? "http://127.0.0.1:5173,http://localhost:5173")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  const rateLimit = Number(env.CONTACT_RATE_LIMIT ?? "8");
  const outcome = env.CONTACT_SANDBOX_OUTCOME;
  return {
    mode: deliveryMode,
    allowedOrigins: origins,
    rateLimit: Number.isFinite(rateLimit) && rateLimit > 0 ? rateLimit : 8,
    rateWindowMs: 60_000,
    sandboxOutcome: outcome === "rejected" || outcome === "unknown" ? outcome : "accepted",
    liveAuthorized: env.CONTACT_DELIVERY_LIVE_AUTHORIZED === "yes",
  };
}
