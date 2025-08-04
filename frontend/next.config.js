/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false, // Hide X-Powered-By header
  reactStrictMode: true,
  
  // App directory is now stable in Next.js 14
  
  images: {
    domains: ['localhost', 'vmcom.app', 'veles.solutions'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'http://localhost:3000',
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || 'veles-secret-key-change-in-production-2025',
    API_URL: process.env.API_URL || 'http://localhost:8000',
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ];
  },
  
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  
  // Compress output
  compress: true,
  
  // Generate build ID for cache busting
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
}

module.exports = nextConfig