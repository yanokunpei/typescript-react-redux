const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
module.exports = (_, argv) => ({
  entry: ['@babel/polyfill', './src/ts/index.tsx', './src/css/index.css'],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'html', 'css'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/, /\*\.test\.tsx?$/],
        use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './static/index.html',
    }),
    new CopyPlugin([{ from: './static', to: '../dist', ignore: 'index.html' }]),
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(argv.mode === 'development'),
    }),
  ],
});
