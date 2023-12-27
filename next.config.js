/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/homepage",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
