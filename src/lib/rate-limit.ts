/**
 * Rate Limiting Module
 *
 * Provides rate limiting for authentication and sensitive operations.
 * Uses Upstash Redis in production, with in-memory fallback for development.
 *
 * Environment Variables:
 * - UPSTASH_REDIS_REST_URL: Upstash Redis REST API URL
 * - UPSTASH_REDIS_REST_TOKEN: Upstash Redis REST API token
 */

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

interface RateLimitResult {
  success: boolean;
  remaining?: number;
  reset?: Date;
}

// In-memory fallback for development
class MemoryRateLimiter {
  private requests = new Map<string, { count: number; resetAt: number }>();

  async limit(identifier: string, maxRequests: number, windowMs: number): Promise<RateLimitResult> {
    const now = Date.now();
    const key = identifier;
    const existing = this.requests.get(key);

    // Reset if window expired
    if (!existing || now > existing.resetAt) {
      this.requests.set(key, {
        count: 1,
        resetAt: now + windowMs,
      });
      return {
        success: true,
        remaining: maxRequests - 1,
        reset: new Date(now + windowMs),
      };
    }

    // Check if limit exceeded
    if (existing.count >= maxRequests) {
      return {
        success: false,
        reset: new Date(existing.resetAt),
      };
    }

    // Increment counter
    existing.count++;
    return {
      success: true,
      remaining: maxRequests - existing.count,
      reset: new Date(existing.resetAt),
    };
  }

  clear(): void {
    this.requests.clear();
  }
}

// Initialize Upstash Redis if environment variables are available
let upstashRedis: Redis | null = null;
let upstashLimiter: Ratelimit | null = null;

if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  try {
    upstashRedis = Redis.fromEnv();
    upstashLimiter = new Ratelimit({
      redis: upstashRedis,
      limiter: Ratelimit.slidingWindow(5, "60 s"),
      analytics: true,
      prefix: "aletheia:ratelimit",
    });
  } catch (error) {
    console.warn("Failed to initialize Upstash Redis, falling back to memory limiter:", error);
  }
}

// Memory fallback for development
const memoryLimiter = new MemoryRateLimiter();

/**
 * Check rate limit for a given identifier
 * Uses Upstash Redis in production, falls back to in-memory for development
 *
 * @param identifier - Unique identifier (email, IP, userId)
 * @param maxRequests - Maximum requests allowed in time window
 * @param windowSeconds - Time window in seconds
 */
export async function checkRateLimit(
  identifier: string,
  maxRequests: number = 5,
  windowSeconds: number = 60
): Promise<RateLimitResult> {
  // Use Upstash Redis if available
  if (upstashLimiter) {
    const result = await upstashLimiter.limit(identifier);
    return {
      success: result.success,
      remaining: result.remaining,
      reset: new Date(result.reset),
    };
  }

  // Fallback to memory limiter
  const windowMs = windowSeconds * 1000;
  return memoryLimiter.limit(identifier, maxRequests, windowMs);
}

/**
 * Rate limit specifically for authentication attempts
 */
export async function checkAuthRateLimit(email: string): Promise<RateLimitResult> {
  return checkRateLimit(`auth:${email}`, 5, 60); // 5 attempts per minute
}

/**
 * Rate limit for password reset
 */
export async function checkPasswordResetRateLimit(email: string): Promise<RateLimitResult> {
  return checkRateLimit(`password-reset:${email}`, 3, 3600); // 3 attempts per hour
}

/**
 * Rate limit for API calls
 */
export async function checkApiRateLimit(userId: string): Promise<RateLimitResult> {
  return checkRateLimit(`api:${userId}`, 100, 60); // 100 requests per minute
}
