const path = require('path')
const webpackHtmlPlugin = require('html-webpack-plugin')
require('@babel/register')

module.exports = {
  entry: ['@babel/polyfill', './src/app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpackHtmlPlugin({
      template: './index.html'
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    port: 5050,
    open: true,
    static: {
     directory: path.join(__dirname, 'dist'),
    }
  },
  mode: 'development'
}