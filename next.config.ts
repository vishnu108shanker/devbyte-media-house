import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Set root to this project directory to prevent Next.js picking up
    // the parent Engine repo's package-lock.json during dev/build.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
