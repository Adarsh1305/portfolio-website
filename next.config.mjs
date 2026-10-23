/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use top-level for Next.js 15.2.3+
  allowedDevOrigins: ['10.11.0.43', '192.168.0.112', '192.168.1.38'],
  images: {
    unoptimized: true,
  },
  devIndicators: {
    buildActivity: false,
  },
  output: 'export',
};

export default nextConfig;
