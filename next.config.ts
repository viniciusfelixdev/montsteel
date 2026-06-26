import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Define a raiz do workspace para evitar a detecção incorreta de lockfile.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
