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
  async headers() {
    return [
        {
            // matching all API routes
            source: "/api/:path*",
            headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
        }
    ]
},
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 
module.exports = withMDX(nextConfig)