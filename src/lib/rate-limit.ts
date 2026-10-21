import "server-only";

/**
 * Small in-memory sliding-window rate limiter for route handlers.
 *
 * State lives in the process, so on Vercel each warm serverless instance
 * keeps its own counters and a cold start resets them. That is enough to stop
 * a single client hammering the lead form from one connection, and it costs
 * nothing. For a guarantee that holds across instances, add a Vercel
 * Firewall rate-limit rule on /api/lead (dashboard setting, no code).
 */

interface Bucket {
  /** Request timestamps (ms) inside the current window, oldest first. */
  hits: number[];
}

interface LimiterOptions {
  /** Max requests allowed per key inside the window. */
  limit: number;
  /** Window length in milliseconds. */
  windowMs: number;
  /** Cap on tracked keys so a flood of spoofed IPs cannot grow memory unbounded. */
  maxKeys?: number;
}

export interface RateLimitResult {
  ok: boolean;
  /** Seconds until the oldest hit leaves the window (only meaningful when !ok). */
  retryAfterSec: number;
}

export function createRateLimiter({ limit, windowMs, maxKeys = 10_000 }: LimiterOptions) {
  const buckets = new Map<string, Bucket>();

  function prune(now: number) {
    for (const [key, bucket] of buckets) {
      bucket.hits = bucket.hits.filter((t) => now - t < windowMs);
      if (bucket.hits.length === 0) buckets.delete(key);
    }
  }

  return function check(key: string): RateLimitResult {
    const now = Date.now();

    // Cheap periodic cleanup; also the escape hatch if the map gets large.
    if (buckets.size > maxKeys) prune(now);

    let bucket = buckets.get(key);
    if (!bucket) {
      bucket = { hits: [] };
      buckets.set(key, bucket);
    }
    bucket.hits = bucket.hits.filter((t) => now - t < windowMs);

    if (bucket.hits.length >= limit) {
      const retryAfterSec = Math.max(1, Math.ceil((bucket.hits[0] + windowMs - now) / 1000));
      return { ok: false, retryAfterSec };
    }

    bucket.hits.push(now);
    return { ok: true, retryAfterSec: 0 };
  };
}

/**
 * Best-effort client IP. On Vercel `x-forwarded-for` is set by the platform
 * and the first entry is the real client. Off-platform it can be spoofed,
 * which only lets an attacker dodge their own bucket — the global limiter in
 * the route still applies.
 */
export function clientIp(headers: Headers): string {
  const xff = headers.get("x-forwarded-for");
  if (xff) {
    const first = xff.split(",")[0]?.trim();
    if (first) return first;
  }
  return headers.get("x-real-ip")?.trim() || "unknown";
}
