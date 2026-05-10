/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Tells Next.js to serve the app from the /Sadish sub-directory
  basePath: '/Sadish',
};

export default nextConfig;
