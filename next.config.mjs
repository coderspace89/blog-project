/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**/*",
      },
    ],
    unoptimized: true,
  },
  sassOptions: {
    additionalData: `$var: red;`,
  },
};

export default nextConfig;
