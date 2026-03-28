import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/solutions',
        destination: '/solutions/workspace-solution',
        permanent: true,
      },
      {
        source: '/service',
        destination: '/services/platform-product-engineering',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/services/platform-product-engineering',
        permanent: true,
      },
    ];
  },
  images: {
    unoptimized: true,
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
    ],
  },
};

export default nextConfig;
