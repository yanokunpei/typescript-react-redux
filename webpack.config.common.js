const { CheckerPlugin } = require("awesome-typescript-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/index.tsx", "./src/css/index.css"],
  resolve: {
    extensions: [".ts", ".tsx", ".js", "html", "css"],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      template: "./static/index.html",
    }),
  ],
};
