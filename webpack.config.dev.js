const path = require("path");
const { CheckerPlugin } = require('awesome-typescript-loader')


module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },{
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
            sourceMap: true,
          }},
      ]
    }],
  },
  plugins: [
    new CheckerPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./static"),
  },
};
