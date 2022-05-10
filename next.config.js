/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig

module.exports = {
  images: {
    // these are the domains we permit
    domains: ["links.papareact.com", "image.tmdb.org"],
  },
};
