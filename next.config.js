/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "bootcamp-jose.s3.eu-west-3.amazonaws.com",
      "bootcamp-jose.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
