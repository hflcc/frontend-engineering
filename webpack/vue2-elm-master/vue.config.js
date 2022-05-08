const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
	configureWebpack: {
		resolve: {
			alias: {
				'src': path.resolve(__dirname, './src'),
				'assets': path.resolve(__dirname, './src/assets'),
				'components': path.resolve(__dirname, './src/components')
			}
		},
	}
});
