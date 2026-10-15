export type RateLimiter = {
  allow(key: string, now?: number): boolean;
};

/** In-memory limiter for one local process. Not a production multi-instance limit. */
export function memoryRateLimiter(limit: number, windowMs: number): RateLimiter {
  const hits = new Map<string, number[]>();
  let lastSweep = 0;
  return {
    allow(key, now = Date.now()) {
      if (now - lastSweep >= windowMs) {
        lastSweep = now;
        for (const [entry, times] of hits) {
          if (times.every((time) => now - time >= windowMs)) hits.delete(entry);
        }
      }
      const recent = (hits.get(key) ?? []).filter((time) => now - time < windowMs);
      if (recent.length >= limit) {
        hits.set(key, recent);
        return false;
      }
      recent.push(now);
      hits.set(key, recent);
      return true;
    },
  };
}
