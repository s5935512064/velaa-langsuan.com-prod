
const withTM = require("next-transpile-modules")(["@fancyapps/ui", "vanilla-cookieconsent"]);


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "th"],
    defaultLocale: "en",
  },
  webpack: (config, { isServer }) => {

    if (isServer) {
      require("./scripts/sitemap-generator");
    }
    return config;
  },
}

// module.exports = withPlugins([nextConfig, withTM]);

module.exports = (_phase, { defaultConfig }) => {
  const plugins = [withTM]
  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig })
}