/** @type {import('next').nextConfig} */

const { default: next } = require('next');

const nextConfig = {
  images: {
    domains: ['placehold.co']
  },
  transpilePackages: ['framer-motion'],
};

module.exports = nextConfig;
