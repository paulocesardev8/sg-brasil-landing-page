import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/nichos", destination: "/ambientes/banheiro", permanent: true },
      { source: "/nichos/:slug", destination: "/produto/:slug", permanent: true },
    ]
  },
};

export default nextConfig;