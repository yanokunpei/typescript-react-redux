process.env.NODE_ENV = 'development';
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const path = require('path');

module.exports = (env, argv) =>
  merge(common(env, argv), {
    mode: 'development',
    output: {
      publicPath: '/dist/',
      filename: 'bundle.js',
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[path][name]__[local]--[hash:base64:5]',
                },
                importLoaders: 1,
                sourceMap: true,
              },
            },
            'postcss-loader',
          ],
        },
      ],
    },
    devServer: {
      contentBase: path.resolve(__dirname, './static'),
      open: true,
      openPage: 'dist/',
      historyApiFallback: true,
    },
  });
