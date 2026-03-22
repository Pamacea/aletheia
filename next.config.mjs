/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  // Optimize package imports for tree-shaking
  serverExternalPackages: ['@prisma/client', 'pg'],
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  // Production source maps (disabled for smaller bundle size)
  productionBrowserSourceMaps: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Powered-By',
            value: ''  // Explicitly remove X-Powered-By header
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https: blob:",
              "font-src 'self'",
              "object-src 'none'",
              "connect-src 'self' https://discord.com https://github.com https://va.vercel-scripts.com",
              "base-uri 'self'",
              "form-action 'self' https://discord.com https://github.com",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join('; ')
          },
        ],
      },
    ];
  },
  // CSRF protection for Server Actions
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'localhost:3001'],
      bodySizeLimit: '2mb',
    },
    optimizePackageImports: [
      'lucide-react',
      '@tanstack/react-query',
      '@tanstack/react-query-devtools',
      'framer-motion',
      'date-fns',
      'd3',
      'zod',
    ],
  },
};

export default nextConfig;
