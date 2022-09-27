/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/atl(anta)?(-cox)?-demo-day(-2022)?',
        destination:
          'https://www.eventbrite.com/e/techstars-atlanta-powered-by-cox-enterprises-demo-day-2022-tickets-394449387737',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
