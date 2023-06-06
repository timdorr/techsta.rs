/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/atl(anta)?(-cox)?',
        destination: 'https://www.techstars.com/accelerators/atlanta-cox',
        permanent: true
      },
      {
        source: '/impact(-cox)?',
        destination: 'https://www.techstars.com/accelerators/impact-cox',
        permanent: true
      },
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
      },
      {
        source: '/atl(anta)?(-cox)?-mentors',
        destination: 'https://airtable.com/shrEXb6Bw8DXg6iqL',
        permanent: true
      },
      {
        source: '/fundraising',
        destination:
          'https://kevinliu.notion.site/2e6719804c8a43f0a934f40060feda2b?v=1227cf4e95864fbbb969e4a214e5534a',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
