const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: false
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  i18n: {
    locales: ["fa"],
    defaultLocale: "fa",
    localeDetection: false
  }
};

export default nextConfig;
