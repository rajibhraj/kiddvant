import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.50.130', '192.168.50.119'],
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.melissaanddoug.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
