import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default {
	mode: 'development',
	entry: './src/index.js',
	devtool: 'source-map',
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			inject: 'body',
			minify: true
		})
	],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js'
	}
};
