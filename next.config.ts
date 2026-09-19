import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // better-sqlite3 is a native module - keep it out of the bundle
  serverExternalPackages: ["better-sqlite3"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    // Don't optimize external favicon URLs
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // Suppress favicon fetch errors in development
  onDemandEntries: {
    maxInactiveAge: 60 * 1000, // Increased to 60 seconds to prevent page disposal when switching tabs
    pagesBufferLength: 5, // Increased buffer to keep more pages in memory
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://history.valyu.ai',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
