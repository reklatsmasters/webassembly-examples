const path = require('path');
const { DefinePlugin, IgnorePlugin } = require('webpack')

module.exports = {
  // our enrty point is `index.js`
  entry: path.join(__dirname, 'index.js'),
  output: {
    // output dir is `./static`
    path: path.resolve(__dirname, 'static'),
    filename: 'demo.js',
    // set the custom public path
    publicPath: '/static/'
  },
  resolveLoader: {
    moduleExtensions: ['-loader'],
  },
  plugins: [
    /**
     * Emscripten target js file (sum.js in this example)
     * has many builtin environments - web, node, webworker, shell.
     * We should use only WEB environment and remove dead code -
     * code for other environments. This trick helps to detect
     * WEB environment. Code for other environments will be removed at
     * minify stage.
     */
    new DefinePlugin({
      'typeof window': JSON.stringify('object')
    }),
    
    /**
     * NODE environment required `fs` module. So, just ignore.
     * 
     * Limitations:
     *
     *   - `fs` will be ignored in all modules.
     * 
     * N.B. Send me PR if you known how to ignore `fs` only for
     * emscripten target module.
     */
    new IgnorePlugin(/^fs$/)
  ],
  module: {
    rules: [
      {
        /**
         * Split `.wasm` files as an external modules.
         * Emscripten target module has builtin loader
         * of an wasm files. Just use it.
         */
        test: /\.(wasm)$/,
        use: [
          {
            loader: 'file',
            options: {
              name: '[path][name].[md5:hash:base64:6].[ext]'
            }
          }
        ]
      }
    ]
  }
}