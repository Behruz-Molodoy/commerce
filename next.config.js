/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL : "https://fakestoreapi.com/"
  },
  images: {
    domains: ["fakestoreapi.com"]
  }
}

module.exports = nextConfig
