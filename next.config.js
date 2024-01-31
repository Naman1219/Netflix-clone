/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: 'image.tmdb.org'
      },
      {
        hostname: 'upload.wikimedia.org'
      },
      {
        hostname: 'rb.gy'
      }
    ]
  }
}