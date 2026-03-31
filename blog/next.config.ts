import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Serves all static assets under this prefix so the gateway can route them here.
  assetPrefix: '/_fragment/blog',
};

export default nextConfig;
