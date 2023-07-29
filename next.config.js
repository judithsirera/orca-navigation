/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
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
