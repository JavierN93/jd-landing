/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    googleApiKey: 'AIzaSyB5fITwebnKaPmHI-rAGpPNPG7xhIXwbSA',
    api: process.env.API_URL || 'http://127.0.0.1:3005/api',
    production: process.env.PRODUCTION,
  },
  images: {
    domains: ["unitedhardscapes.com", "assets.unitedhardscapes.com", "marketplace-assets.unitedhardscapes.com", "staging-assets.unitedhardscapes.com", "staging-jdlandscaping-assets.s3.amazonaws.com"],
  }
}
