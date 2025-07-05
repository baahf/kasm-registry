/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Deepstar Technologies',
    description: 'My Own version of some customized workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://baahf.github.io/kasm-registry/',
    contactUrl: 'https://deepstar.net/support',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
