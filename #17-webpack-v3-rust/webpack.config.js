const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'demo.js',
    publicPath: '/static/'
  },
  resolveLoader: {
    moduleExtensions: ['-loader'],
  },
  module: {
    rules: [
      {
        test: /\.(wasm)$/,
        use: [
          {
            loader: 'wasm',
          }
        ]
      }
    ]
  }
}