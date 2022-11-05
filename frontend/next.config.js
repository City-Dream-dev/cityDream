/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      'citydream.pp.ua',
      'trello.com',
      'platform-lookaside.fbsbx.com',
      'trello-members.s3.amazonaws.com',
    ]
  },
  target: 'serverless'
}

module.exports = nextConfig
