/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'images.pexels.com' }, {hostname: 'media.licdn.com'}],
  },
};

export default nextConfig;
