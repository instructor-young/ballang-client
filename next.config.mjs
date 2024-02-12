/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.balaan.io",
      },
    ],
  },
};

export default nextConfig;
