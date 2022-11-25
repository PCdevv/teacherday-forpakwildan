/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/',
        destination: 'http://127.0.0.1:5000/api',
      },
    ]
  }
}

module.exports = nextConfig
