import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
};

export default nextConfig;
