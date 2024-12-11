/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;

// const path = require('path')

// module.exports = {
//   i18n: {
//       locales: ['en'],
//       defaultLocale: 'en',
//   },
//   reactStrictMode: true,
//   output: 'standalone',
//   images: {
//       domains: ['briskk-bucket.s3.ap-south-1.amazonaws.com'], // Added S3 bucket domain for next/image
//   },
//   webpack: (config) => {
//       config.resolve.alias['@'] = path.resolve(__dirname)
//       return config
//   },
// }
// import Header from '@/components/storeOS/Header'