import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'ryungbucket.s3.ap-northeast-2.amazonaws.com',
      'we-mo.s3.ap-northeast-2.amazonaws.com',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/plans',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
