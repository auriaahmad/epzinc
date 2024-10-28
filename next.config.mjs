/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: process.env.NEXT_PUBLIC_DISABLE_ESLINT === 'true',
  },
  reactStrictMode: true,
};

export default nextConfig;