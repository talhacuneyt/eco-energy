/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["next.tsx", "next.ts"],
  compiler: {
    relay: {
      language: "typescript",
      src: "./",
    },
    styledComponents: {
      cssProp: true,
      minify: true,
      ssr: true,
    },
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
