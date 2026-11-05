import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The take-home pay reference page was merged into the salary table.
      { source: '/take-home-pay-reference', destination: '/salary-table', permanent: true },
    ]
  },
};

export default nextConfig;
