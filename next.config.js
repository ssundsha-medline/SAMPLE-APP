/**
 * @type {import('next').NextConfig}
 **/
const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  assetPrefix: getAssetPrefix(),
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "sample-app",
        filename: "static/chunks/remoteEntry.js",
      })
    );

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

function getAssetPrefix() {
  if (process.env.NODE_ENV === "ta") {
    return;
  }

  if (process.env.NEXT_PUBLIC_ENV_ID === "local") {
    return;
  }

  return "/ui/ecom-ui-header/";
}
