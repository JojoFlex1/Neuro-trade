import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Add ESLint configuration to disable linting during build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

