const path = require("path");
const {CheckerPlugin} = require('awesome-typescript-loader');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const mode = "production";

module.exports = {
  mode: mode,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "dist/bundle.[hash].js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "css"]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ]
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/react',
          ]
        },
      }, 'awesome-typescript-loader']
    },
      {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: true,
            importLoaders: 0,
            localIdentName: '[hash:base64]',
          }
        },
      ]
    },{
        test: /\.html$/,
        loader: "html-loader"
      }
    ],
  },
  plugins: [
    new CheckerPlugin(),
    new MiniCssExtractPlugin({
      filename: "dist/style.[hash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./static/index.html"
    }),
    new CleanWebpackPlugin(["build"]),
  ],
};
