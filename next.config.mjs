/** @type {import('next').NextConfig} */
const nextConfig = {
  // Send www.syam.me to syam.me so Google indexes a single version of every page
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.syam.me" }],
        destination: "https://syam.me/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
