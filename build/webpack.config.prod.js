const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const mode = 'production';
const outDir = '../dist';

module.exports = (env, argv) =>
  merge(common(env, argv), {
    mode: mode,
    output: {
      path: path.resolve(__dirname, outDir),
      filename: `assets/[name].[hash].js`,
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
      splitChunks: {
        name: true,
        maxInitialRequests: 4,
        cacheGroups: {
          react: {
            test: /[\\/]node_modules[\\/]react/,
            name: 'react',
            chunks: 'all',
          },
          babel: {
            test: /[\\/]node_modules[\\/]@babel/,
            name: 'polyfill',
            chunks: 'all',
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[hash:base64]',
              },
            },
            'postcss-loader',
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'assets/style.[hash].css',
        chunkFilename: 'assets/style.[id].[hash].css',
      }),
      new CleanWebpackPlugin(),
      new BundleAnalyzerPlugin(),
    ],
  });
