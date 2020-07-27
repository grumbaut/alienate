const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const ManifestPlugin = require('webpack-extension-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const manifest = require('./extension/manifest.json');

const config = {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	entry: {
		'index': path.join(__dirname, './src/popup/index.jsx'),
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'popup/[name].js',
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlPlugin({
			title: 'Alienate',
			meta: {
				charset: 'utf-8',
			},
			manifest: 'manifest.json',
			filename: 'popup/index.html',
			template: './static/popup/index.html',
			hash: true,
		}),
		new ManifestPlugin({
			config: {
				base: manifest,
			},
		}),
	],
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name (file) {
							return '/[path][name].[ext]';
						},
					},
				}],
			},
		],
	},
};

module.exports = config;
