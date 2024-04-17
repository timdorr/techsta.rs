/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        has: [{ type: 'host', value: 'atlanta.*' }],
        source: '/lookbook',
        destination: 'https://airtable.com/appiJrhblScYe8CC5/shrU63oKOpQH0ULnA',
        permanent: false
      },
      {
        source: '/impact-24-lookbook',
        destination: 'https://airtable.com/appiJrhblScYe8CC5/shrOBt6VuBgPKpWtD',
        permanent: false
      },
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
      },
      {
        source: '/tinydoor',
        destination: 'https://www.instagram.com/ar/1158095111804520/',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
