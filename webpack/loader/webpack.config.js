const path = require('node:path');
const MyPlugin = require('./plugin/myPlugin');

module.exports = {
	mode: 'development',
	entry: {
		app: path.resolve(__dirname, './src/main.js')
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: {
					// loader: './loader1/index',
					loader: './node_modules/vue-loader/dist/index.js',
				}
			},
			{
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', {
								modules: 'commonjs',
							}]
						]
					}
				}
			}
		]
	},
	plugins: [
		new MyPlugin()
	]
};
