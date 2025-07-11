/** @type {import('next').nextConfig} */

const { default: next } = require('next');
const { redirect } = require('next/dist/server/api-utils');

const nextConfig = {
  images: {
    domains: ['placehold.co']
  },
  transpilePackages: ['framer-motion'],

  async redirects() {
    return [
      {
        source: '/collage-park-mobile-car-detailing',
        destination: '/college-park-mobile-car-detailing',
        permanent: true
      }
    ]
  }
};

module.exports = nextConfig;
