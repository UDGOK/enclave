/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts'],
  webpack: (config) => {
    config.resolve.alias['@/app'] = false
    return config
  }
}

module.exports = nextConfig
