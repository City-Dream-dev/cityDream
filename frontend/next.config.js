/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      'citydream.pp.ua',
      'trello.com',
      'trello-members.s3.amazonaws.com'
    ]
  }
}

module.exports = nextConfig
