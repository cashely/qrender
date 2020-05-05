const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  entry: {
    'qrender': './src/qrender.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js',
    library: 'qrender-js',
    libraryTarget: 'commonjs2',
  },
  mode: 'production',
  module: {
    rules: [
      { test: /\.js$/, use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }}
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
