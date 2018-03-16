const path = require('path')
const webpack = require('webpack')

const config = {
  entry: './src/js-shape.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js-shape.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
  ]
};

module.exports = config;