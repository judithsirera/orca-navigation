/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
    MAPBOX_TOKEN: process.env.MAPBOX_TOKEN
  },
  assetPrefix: './'
};

module.exports = nextConfig;
