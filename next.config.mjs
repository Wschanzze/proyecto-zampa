import { imageHosts } from './image-hosts.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: imageHosts,
  },
  async redirects() {
    return [
      // Redirect legacy /home → / (por si Google tiene cacheada la URL vieja)
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      // Redirect legacy /home/:path* → /:path*
      {
        source: '/home/:path*',
        destination: '/:path*',
        permanent: true,
      },
      // Redirect legacy /inicio → /
      {
        source: '/inicio',
        destination: '/',
        permanent: true,
      },
      // Redirect legacy /inicio/:path* → /:path*
      {
        source: '/inicio/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
  webpack(
    config,
    {
      dev: dev
    }
  ) {
    config.module.rules.push({
      test: /\.(jsx|tsx)$/,
      exclude: [/node_modules/],
      use: [{
        loader: '@dhiwise/component-tagger/nextLoader',
      }],
    });
    if (dev) {
      const ignoredPaths = (process.env.WATCH_IGNORED_PATHS || '')
        .split(',')
        .map((p) => p.trim())
        .filter(Boolean);
      config.watchOptions = {
        ignored: ignoredPaths.length
          ? ignoredPaths.map((p) => `**/${p.replace(/^\/+|\/+$/g, '')}/**`)
          : undefined,
      };
    }
    return config;
  },
};

export default nextConfig;
