/** @type {import('next').NextConfig} */

import path from 'path';

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.join(process.cwd(), 'src');
    return config;
  },
  // experimental: {
  //   appDir: true,
  // },
};

export default nextConfig;
