const path = require("path");

module.exports = {
  watch: true,
  mode: "development",
  entry: {
    page1: "./src/js/page1.js",
    page2: "./src/js/page2.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/js"),
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    browsers: ["last 2 versions", "ie >= 11"],
                  },
                  useBuiltIns: "usage",
                  corejs: 3,
                  shippedProposals: true,
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
