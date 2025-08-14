import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rate limiting configuration
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 100; // max requests per window

export function middleware(request: NextRequest) {
  // Skip middleware for Mail.ru verification file
  if (request.nextUrl.pathname === '/mailru-domainFSg7hCoMdzA3lbEd.html') {
    return NextResponse.next();
  }
  
  // Security headers
  const response = NextResponse.next();
  
  // HSTS - Force HTTPS
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  );
  
  // Prevent clickjacking
  response.headers.set('X-Frame-Options', 'DENY');
  
  // Prevent MIME type sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff');
  
  // XSS Protection
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  // Referrer Policy
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Content Security Policy
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://*.vercel-insights.com; " +
    "style-src 'self' 'unsafe-inline'; " +
    "font-src 'self' data:; " +
    "img-src 'self' data: https:; " +
    "connect-src 'self' https://vercel.live https://*.vercel-insights.com wss://ws-us3.pusher.com https://sockjs-us3.pusher.com; " +
    "frame-src 'self' https://vercel.live;"
  );
  
  // Permissions Policy
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  );
  
  // Basic rate limiting
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
  } else {
    const rateLimitInfo = rateLimitMap.get(ip);
    
    // Reset if window has passed
    if (now - rateLimitInfo.firstRequest > RATE_LIMIT_WINDOW) {
      rateLimitMap.set(ip, { count: 1, firstRequest: now });
    } else {
      rateLimitInfo.count++;
      
      // Block if rate limit exceeded
      if (rateLimitInfo.count > MAX_REQUESTS) {
        return new NextResponse('Too Many Requests', {
          status: 429,
          headers: {
            'Retry-After': '60',
            'X-RateLimit-Limit': MAX_REQUESTS.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': new Date(rateLimitInfo.firstRequest + RATE_LIMIT_WINDOW).toISOString(),
          },
        });
      }
    }
  }
  
  // Clean up old entries periodically
  if (Math.random() < 0.01) { // 1% chance on each request
    const cutoff = now - RATE_LIMIT_WINDOW * 2;
    for (const [key, value] of rateLimitMap.entries()) {
      if (value.firstRequest < cutoff) {
        rateLimitMap.delete(key);
      }
    }
  }
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - mailru-domainFSg7hCoMdzA3lbEd.html (Mail.ru verification)
     */
    '/((?!_next/static|_next/image|favicon.ico|mailru-domainFSg7hCoMdzA3lbEd\\.html).*)',
  ],
};