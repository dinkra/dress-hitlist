'use strict';

const path = require('path');
const webpack = require('webpack');

const config = {
	context: path.resolve(__dirname, './src'), // `__dirname` refers to the directory where this webpack.config.js lives and is root of project and `src` is source
	entry: {
		app: './app.js', // the entry point of our app
	},
	output: {
		path: path.resolve(__dirname, './dist'), // `dist` is the destination
    	filename: 'bundle.js',
    	publicPath: "/assets",
	},
	devServer: {
		open: true, // to open the local server in browser
		contentBase: path.resolve(__dirname, './src'), 
		compress: true,
  		port: 9000,
  		watchContentBase: true
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/, // Check for all js and jsx files
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
			}]
		},
		{
			test: /\.css$/,
			include: [
			    path.resolve(__dirname, "./src/css")
			],
			use: [
				'style-loader', 
				{ loader: 'css-loader', options: { modules: true } }
			]
		},
		{
			test: /\.(sass|scss)$/, // Check for sass or scss file names
			use: [
				'style-loader',
				'css-loader',
				'sass-loader',
			]
		},
		{ 
			test: /\.json$/, 
			loader: "json-loader"  // JSON loader
		}]
	},
	resolve: {
	    modules: [path.resolve(__dirname, './src'), 'node_modules']
	},
	devtool: "eval-source-map" // Default development sourcemap
};

// Check if build is running in production mode, then change the sourcemap type
if (process.env.NODE_ENV === "production") {
	config.devtool = "source-map";
}

module.exports = config;