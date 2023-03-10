/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.experiments = {
      syncWebAssembly: true
    }
    return config
  },
  basePath: '/docs'
}

module.exports = nextConfig
