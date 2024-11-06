/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;