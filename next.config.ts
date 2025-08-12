import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/core/i18n/i18n.ts');

const nextConfig: NextConfig = {
  images: {
    domains: ['randomuser.me'],
  },
};

export default withNextIntl(nextConfig);
