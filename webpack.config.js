var webpack = require('webpack')
var path = require('path')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin
module.exports = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		'./app/main.js'
	],
	output:{
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new OpenBrowserPlugin(),
		new uglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	],
	module: {
		loaders:[
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
        query: {
            presets: ['es2015', 'react']
        },
        include: path.join(__dirname, '.')
			},{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},{
				test: /\.(jpe?g|png)$/,
				loader: 'url-loader?limit=8192'
			}
		]
	}
}