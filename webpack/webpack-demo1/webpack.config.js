import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import hqLoader from './loader/hq-loader.js';
import FooterPlugin from './plugin/footerPlugin.js';
import { __dirname } from './root-dirname.js';

export default {
	mode: 'development',
	entry: './src/index.js',
	devtool: 'source-map',
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.BannerPlugin({
			banner: '欢迎学习webpack'
		}),
		new FooterPlugin({
			content: '竹杖芒鞋轻胜马,谁怕?一蓑烟雨任平生'
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			inject: 'body',
			minify: true
		})
	],
	module: {
		rules: [
			{
				test: /\.less$/i,
				use: ['style-loader', 'css-loader', 'less-loader']
			},
			{
				test: /\.hq$/i,
				use: [hqLoader]
			}
		]
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js'
	}
};
