const path = require('path');

module.exports = {
  entry: './src/index.js', //entry point

  output: {
    path: path.resolve('dist'), 
    filename: 'bundle.js' //output
  }
}