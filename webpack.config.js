var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/noot.js',
  output: {
    path: __dirname + '/public',
    filename: 'noot.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: path.join(__dirname, 'src/'),
        query: {
          babelrc: false,
          presets: 'es2015'
        }
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  stats: {
    colors: true
  }
}
