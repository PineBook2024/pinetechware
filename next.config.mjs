/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["pinetechware.com"], // Add your domain here
  },
};

export default nextConfig;
