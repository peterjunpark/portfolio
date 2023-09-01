/** @type {import('next').NextConfig} */
const nextConfig = {
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
