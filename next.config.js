/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'image.tmdb.org'
      },
      {
        hostname: 'upload.wikimedia.org'
      }
    ]
  }
}