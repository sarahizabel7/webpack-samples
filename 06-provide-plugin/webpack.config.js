const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js', //entry point

  output: {
    path: path.resolve('dist'), 
    filename: 'bundle.js' //output
  },

  plugins: [
    new webpack.ProvidePlugin({
      cowsay: 'cowsay-browser'
    })
  ]
}