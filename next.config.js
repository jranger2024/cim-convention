/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')()

const nextConfig = {
  images: {
    domains: ['www.datocms-assets.com'],
  },
  redirects: async () => {
    return [
      {
        source: '/home-page',
        destination: '/',
        permanent: true,
      },
      {
        source: '/fr/accueil',
        destination: '/fr',
        permanent: true,
      },
    ]
  },
}

module.exports = withNextIntl(nextConfig)
