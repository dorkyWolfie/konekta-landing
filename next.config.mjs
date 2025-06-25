/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '*.googleusercontent.com'
      },
      {
        hostname: 'konekta-new.s3.amazonaws.com'
      }
    ],
  }
};

export default nextConfig;
