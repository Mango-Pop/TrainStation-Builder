import BuilderDevTools from "@builder.io/dev-tools/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = BuilderDevTools()({
  /* config options here */
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://*.builder.io https://builder.io",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [new URL('https://cdn.builder.io/api/v1/image/**')],
  },
});

export default nextConfig;
