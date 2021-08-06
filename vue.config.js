/* eslint-disable @typescript-eslint/no-var-requires */
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://test.com", // 임시 테스트용
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    plugins: [
      // @see https://www.npmjs.com/package/case-sensitive-paths-webpack-plugin
      new CaseSensitivePathsPlugin(),
      new webpack.DefinePlugin({
        PROJECT_BUILD_DATE: JSON.stringify(new Date().toISOString()),
      }),
    ],
    resolve: {
      alias: {
        "@@types": path.join(__dirname, "src/@types"),
      },
    },
  },
  css: {
    // @see https://cli.vuejs.org/config/#css-loaderoptions
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/base/_variables.scss";
          @import "@/styles/base/mixins/_mixins.scss";
        `,
      },
    },
  },
  transpileDependencies: ["vuex-module-decorators"],
};
