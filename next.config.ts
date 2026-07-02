import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Define a raiz do workspace para evitar a detecção incorreta de lockfile.
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      // Imagens destacadas dos posts do WordPress Headless (blog).
      { protocol: "https", hostname: "*.wordpress.com" },
      { protocol: "https", hostname: "*.wp.com" },
    ],
  },
};

export default nextConfig;
