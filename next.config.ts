import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        // The Gallery page was replaced by the homepage "Featured Projects" section.
        source: "/gallery",
        destination: "/#featured-projects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
