/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;