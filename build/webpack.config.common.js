const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['./src/ts/index.tsx', './src/css/index.css'],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'html', 'css'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/, /\*\.test\.tsx?$/],
        use: [
          { loader: "babel-loader"},
          { loader: "ts-loader" },
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      template: './static/index.html',
    }),
    new CopyPlugin([{ from: './static', to: '../dist', ignore: 'index.html' }]),
  ],
};
