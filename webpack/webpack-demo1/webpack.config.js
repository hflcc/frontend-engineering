import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import hqLoader from './loader/hq-loader.js';
import FooterPlugin from './plugin/footerPlugin.js';
import { __dirname } from './root-dirname.js';

export default {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
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
			filename: 'index.html',
			template: './public/index.html',
			inject: 'body',
			minify: true
		}),
		new HtmlWebpackPlugin({
			filename: 'login.html',
			template: './public/login.html',
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
			},
			{
				test: /\.(png|jpg|svg|jpeg|gif)$/i,
				type: 'asset',
				parser: {
					dataUrlCondition: {
						maxSize: 8 * 1024
					}
				},
				generator: {
					filename: 'assets/img/[name].[hash:6][ext]'
				}
			}
		]
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js/[name].js'
	}
};
