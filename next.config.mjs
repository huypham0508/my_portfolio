/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });
    return config;
  },
};

export default nextConfig;
