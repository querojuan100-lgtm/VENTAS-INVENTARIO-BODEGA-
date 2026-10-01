import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/pos.html" }],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
