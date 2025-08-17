// /** @type {import('next').NextConfig} */
//
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**",
//       },
//     ],
//   },
//   compiler: { removeConsole: process.env.NODE_ENV === "production", },
//
// };
//
// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Don’t let undici be bundled in browser build
    config.resolve.alias["undici"] = false;
    return config;
  },
};

export default nextConfig;
