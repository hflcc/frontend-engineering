import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import hqLoader from './loader/hq-loader.js';
import FooterPlugin from './plugin/footerPlugin.js';
import { __dirname } from './root-dirname.js';

const ENV = process.env.NODE_ENV;

export default {
	mode: 'development',
	target: 'web',
	entry: {
		index: './src/index/index.js',
		login: './src/login/login.js'
	},
	devtool: ENV === 'development' ? 'eval-cheap-source-map' : 'hidden-source-map',
	devServer: {
		// 监听文件变化
		watchFiles: ['./src/**/*'],
		static:  {
			directory: path.join(__dirname, 'dist')
		},
		compress: true,
		port: 9000,
		hot: true
	},
	optimization: {
		minimizer: [
			// 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释`...`
			new CssMinimizerPlugin(),
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[hash:6].css',
			chunkFilename: 'css/[name].chunk.css'
		}),
		new webpack.BannerPlugin({
			banner: '欢迎学习webpack'
		}),
		new FooterPlugin({
			content: '竹杖芒鞋轻胜马,谁怕?一蓑烟雨任平生'
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index/index.html',
			inject: 'body',
			minify: true,
			chunks: ['index']
		}),
		new HtmlWebpackPlugin({
			filename: 'login.html',
			template: './src/login/login.html',
			inject: 'body',
			minify: true,
			chunks: ['login']
		}),
		new CopyWebpackPlugin({
			patterns: [{
				from: path.resolve(__dirname, './src/assets/img'),
				to: path.resolve(__dirname, './dist/assets/img')
			}]
		})
	],
	module: {
		rules: [
			{
				test: /\.less$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
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
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: 'js/[name].js'
	}
};
