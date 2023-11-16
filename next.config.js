/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }
// const { withContentlayer } = require('next-contentlayer')
// module.exports = withContentlayer({
//   ...nextConfig,
//   images: {
//     remotePatterns: [
//       {
//           protocol: 'https',
//           hostname: '**',
//           port: '',
//           pathname: '**',
//       },
//   ],
//     domains: ['pbs.twimg.com', 'avatars.githubusercontent.com', 'i.imgur.com'],
//   },
//   headers: async () => [{
//     source: '/:path*',
//     headers: [
//       { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
//       { key: 'Cross-Origin-Embedder-Policy', value: 'same-origin' },
//     ],
//   }],
// })



const withMDX = require('@next/mdx')()
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 
module.exports = withMDX(nextConfig)