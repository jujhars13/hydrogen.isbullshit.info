const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const environment = process.env?.NODE_ENV
  ? process.env.NODE_ENV
  : "development";

module.exports = {
  entry: "./src/index.js",
  mode: environment,
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "out"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/css", to: path.resolve(__dirname, "out/css") },
        { from: "src/img", to: path.resolve(__dirname, "out/img") },
        {
          from: "node_modules/reveal.js/dist/*.css",
          to: path.resolve(__dirname, "out/css/"),
        },
        {
          from: "node_modules/reveal.js/dist/theme/*.css",
          to: path.resolve(__dirname, "out/css/"),
        },
        {
          from: "node_modules/reveal.js/dist/theme/fonts",
          to: path.resolve(__dirname, "out/css/"),
        },
        { from: "src/js", to: path.resolve(__dirname, "out/js") },
        {
          from: "src/favicon.ico",
          to: path.resolve(__dirname, "out/favicon.ico"),
        },
      ],
    }),
  ],
};
