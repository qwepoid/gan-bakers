/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "fastly.picsum.photos",
      "https://fastly.picsum.photos",
      "media.istockphoto.com",
      "hips.hearstapps.com",
    ],
  },
};

module.exports = nextConfig;
