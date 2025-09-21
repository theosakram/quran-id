import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["react-icons/*", "@chakra-ui/react"],
  },
};

export default nextConfig;
