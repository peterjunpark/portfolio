/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "placekitten.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
