/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    googleApiKey: 'AIzaSyB5fITwebnKaPmHI-rAGpPNPG7xhIXwbSA',
    api: process.env.API_URL || 'http://127.0.0.1:3005/api',
    production: process.env.PRODUCTION,
  },
}
