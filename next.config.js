/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  env: {
    API_URL: process.env.API_URL,
    MAPBOX_TOKEN: process.env.MAPBOX_TOKEN
  },
  assetPrefix: './',
  async redirects() {
    return [
      {
        source: '/.well-known/apple-app-site-association',
        destination: '/.well-known/apple-app-site-association.json',
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;
