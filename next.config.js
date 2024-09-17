/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        pathname: "**",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

