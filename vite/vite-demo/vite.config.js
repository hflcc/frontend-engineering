import {defineConfig} from 'vite';
import vuePlugin from '@vitejs/plugin-vue';
import { resolve } from 'node:path';

function pathResolve(dir) {
	return resolve(process.cwd(), '.', dir);
}

const vuePluginRes = vuePlugin({
	exclude: ['node_modules']
});

export default defineConfig({
	// base: '/overseas-cms',
	mode: 'development',
	plugins: [vuePluginRes],
	resolve: {
		alias: [
			{
				find: /@\//,
				replacement: pathResolve('src') + '/'
			}
		]
	}
});
