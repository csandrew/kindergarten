/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', 
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Disable image optimization if you have issues with sharp
    // unoptimized: true, // Uncomment if sharp causes problems
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  reactStrictMode: true,
}

module.exports = nextConfig