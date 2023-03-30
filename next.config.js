/* eslint-disable require-jsdoc */
/* eslint-disable @typescript-eslint/no-var-requires */

const webpack = require("webpack");
const { parsed: myEnv } = require("dotenv").config();

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([[withBundleAnalyzer]], {
  poweredByHeader: false,
  trailingSlash: true,
  basePath: "",
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    return config;
  },
});
