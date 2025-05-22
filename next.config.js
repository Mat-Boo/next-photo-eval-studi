/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
  sassOptions: {
    includePaths: [require('path').join(__dirname, 'styles')],
    prependData: `@import "_settings.scss";`
  }
};

module.exports = nextConfig;