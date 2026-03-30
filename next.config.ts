import type { NextConfig } from "next";

const STRAPI_HOST = process.env.NEXT_PROD_STRAPI_URL
  ? new URL(process.env.NEXT_PROD_STRAPI_URL).hostname
  : "";
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/solutions",
        destination: "/solutions/workspace-solution",
        permanent: true,
      },
      {
        source: "/service",
        destination: "/services/platform-product-engineering",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/services/platform-product-engineering",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: STRAPI_HOST,
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.strapiapp.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
