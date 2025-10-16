import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/oppettider-kontakt",
        destination: "/kontakt",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
