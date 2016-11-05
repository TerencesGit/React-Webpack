var webpack = require('webpack');
var path = require('path');
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
		new webpack.HotModuleReplacementPlugin()
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
				loader: 'style-loader!css-loader!sass-loader?sourcemap'
			},{
				test: /\.(jpe?g|png)$/,
				loader: 'url-loader?limit=8192'
			}
		]
	}
}