/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['picsum.photos',"i.picsum.photos","unsplash.com"],
  },
}

module.exports = nextConfig
