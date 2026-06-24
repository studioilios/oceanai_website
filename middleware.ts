import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    // Apply to API routes
    "/api/:path*",
    // Apply security headers to all pages
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

// ─── Simple in-memory rate limiter ───────────────────────────────
// Edge-compatible: uses a Map reset every deploy (stateless per-instance)
// For production at scale, replace with Vercel KV or Upstash Redis
const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 20;  // 20 AI requests per IP per minute

interface RateEntry {
  count: number;
  reset: number;
}

const rateLimitMap = new Map<string, RateEntry>();

function getRateLimitKey(req: NextRequest): string {
  // Use CF-Connecting-IP (Vercel/Cloudflare) or X-Forwarded-For
  const ip =
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  return ip;
}

function checkRateLimit(key: string): { allowed: boolean; remaining: number; reset: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(key);

  if (!entry || now > entry.reset) {
    // New window
    rateLimitMap.set(key, { count: 1, reset: now + WINDOW_MS });
    return { allowed: true, remaining: MAX_REQUESTS - 1, reset: now + WINDOW_MS };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0, reset: entry.reset };
  }

  entry.count++;
  return { allowed: true, remaining: MAX_REQUESTS - entry.count, reset: entry.reset };
}

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ─── Rate limit AI API routes ───────────────────────────────────
  if (pathname.startsWith("/api/claude")) {
    // Only POST requests consume quota
    if (req.method === "POST") {
      const key = getRateLimitKey(req);
      const { allowed, remaining, reset } = checkRateLimit(key);

      if (!allowed) {
        return new NextResponse(
          JSON.stringify({
            error: "Too many requests. Please wait a moment before trying again.",
            retryAfter: Math.ceil((reset - Date.now()) / 1000),
          }),
          {
            status: 429,
            headers: {
              "Content-Type": "application/json",
              "Retry-After": String(Math.ceil((reset - Date.now()) / 1000)),
              "X-RateLimit-Limit": String(MAX_REQUESTS),
              "X-RateLimit-Remaining": "0",
              "X-RateLimit-Reset": String(Math.ceil(reset / 1000)),
            },
          }
        );
      }

      // Inject rate limit headers into response
      const response = NextResponse.next();
      response.headers.set("X-RateLimit-Limit", String(MAX_REQUESTS));
      response.headers.set("X-RateLimit-Remaining", String(remaining));
      response.headers.set("X-RateLimit-Reset", String(Math.ceil(reset / 1000)));
      return response;
    }
  }

  // ─── Block non-POST to AI route ─────────────────────────────────
  if (pathname.startsWith("/api/claude") && req.method !== "POST") {
    return new NextResponse(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", Allow: "POST" },
    });
  }

  // ─── Maintenance mode (flip to true to enable) ─────────────────
  const MAINTENANCE_MODE = false;
  if (MAINTENANCE_MODE && !pathname.startsWith("/api")) {
    return new NextResponse(
      `<!DOCTYPE html><html><head><title>OceanAI — Maintenance</title></head>
       <body style="display:flex;align-items:center;justify-content:center;min-height:100vh;font-family:system-ui;background:#0A1628;color:white;text-align:center">
         <div><h1 style="font-size:2rem;font-weight:800;margin-bottom:12px">Back shortly.</h1>
         <p style="color:rgba(255,255,255,0.5)">OceanAI is undergoing a quick update. Check back in a few minutes.</p></div>
       </body></html>`,
      { status: 503, headers: { "Content-Type": "text/html", "Retry-After": "300" } }
    );
  }

  return NextResponse.next();
}
