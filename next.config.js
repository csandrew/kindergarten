// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Remove 'domains' as it's deprecated
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    // Add quality values
    qualities: [75, 90, 100],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Remove 'swcMinify' as it's now default
  
  // React strict mode
  reactStrictMode: true,
}

module.exports = nextConfig