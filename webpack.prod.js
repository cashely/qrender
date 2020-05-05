const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  entry: {
    'qrender': './src/qrender.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'
  },
  mode: 'production',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader'}
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
