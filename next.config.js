/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/atl(anta)?(-cox)?-demo-day(-2022)?',
        destination:
          'https://www.eventbrite.com/e/techstars-atlanta-powered-by-cox-enterprises-demo-day-2022-tickets-394449387737',
        permanent: true
      },
      {
        source: '/atl(anta)?(-cox)?-slack',
        destination:
          'https://join.slack.com/t/techstarscox/shared_invite/zt-1e7tjypjl-DHXE0GJhcVX~Y21g_PMzoQ',
        permanent: true
      },
      {
        source: '/impact(-cox)?-slack',
        destination:
          'https://join.slack.com/t/techstarscox/shared_invite/zt-1e7tjypjl-DHXE0GJhcVX~Y21g_PMzoQ',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
