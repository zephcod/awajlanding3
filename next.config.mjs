import { withContentlayer } from "next-contentlayer"

await import("./env.mjs")

/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export'
    reactStrictMode: true,
    images: {
      domains: ["gennbi.com"],
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
      },
    experimental: {
        serverActions: true,
      },
}

export default withContentlayer(nextConfig)
