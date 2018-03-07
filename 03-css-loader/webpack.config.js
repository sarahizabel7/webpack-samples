const path = require('path');

module.exports = {
  entry: './src/index.js', //entry point

  output: {
    path: path.resolve('dist'), 
    filename: 'bundle.js' //output
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}