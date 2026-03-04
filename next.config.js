/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = process.env.CUSTOM_DOMAIN ? '' : '/qfc-website';

const nextConfig = {
  output: 'export',
  basePath: isProd ? basePath : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
