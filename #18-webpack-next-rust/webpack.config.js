const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'index.js'),
	output: {
    webassemblyModuleFilename: '[modulehash].wasm',
    path: path.resolve(__dirname, 'static'),
    filename: 'demo.js',
		publicPath: '/static/'
	},
	module: {
		rules: [
			{
				test: /\.wasm$/,
				type: 'webassembly/experimental'
			}
		]
	}
};
