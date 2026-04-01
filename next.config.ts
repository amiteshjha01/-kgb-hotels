import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/hotel/all-rounder",
        destination: "/hotel/legend-grand",
        permanent: true,
      },
      {
        source: "/hotel/beach-view",
        destination: "/hotel/villa-homes",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
