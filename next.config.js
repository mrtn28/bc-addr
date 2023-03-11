/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.experiments = {
      syncWebAssembly: true
    }
    return config
  },
  basePath: '/bc-addr',
  assetPrefix: '/bc-addr/' // assetPrefix requires the trailing slash
}

module.exports = nextConfig
