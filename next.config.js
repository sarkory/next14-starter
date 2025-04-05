/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // allow images from the public folder
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;
