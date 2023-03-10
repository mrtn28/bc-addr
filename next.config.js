/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.experiments = {
      syncWebAssembly: true
    }
    return config
  }
}

module.exports = nextConfig
