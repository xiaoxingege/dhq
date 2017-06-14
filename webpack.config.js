var path = require('path'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	BomPlugin = require('webpack-utf8-bom'),
	fs = require('fs');

let featureName = process.env.JRJ_FEATURE || 'demo';

const buildEntry = function() {
  let dir = path.join(__dirname,`src/${featureName}`);
}

module.exports = {
	entry: {
		demo: './src/demo/index.js',
		vendor: ['vue', 'vue-router']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: process.env.NODE_ENV == 'production'
			? 'https://i0.jrjimg.cn/zqt-m/one-step/'
			: '/dist/',
		filename: feature.name + '/[name].[hash:12].js'
	},
	resolve: {
		extensions: [
			'.vue', '.js'
		],
		modules: ["node_modules"],
		alias: {
			vue: 'vue/dist/vue.min.js'
		}
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}, {
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [
						'es2015', 'stage-0'
					],
					plugins: ['transform-runtime']
				}
			}, {
				test: /\.html$/,
				loader: 'vue-html-loader'
			}, {
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url-loader',
				query: {
					limit: 15000,
					name: feature.name + '/images/[name].[ext]?[hash]'
				}
			}
		]
	}
	// babel: {
	//     presets: ['es2015', 'stage-2'],
	//     plugins: ['transform-runtime']
	// }
	// vue: {
	//     autoprefixer: {
	//         browsers: ['> 5%']
	//     }
	// }
}

module.exports.plugins = [
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor',
		filename: feature.name + '/vendors.min.js',
		minify: {
			removeComments: true,
			collapseWhitespace: false
		}
	}),
	new HtmlWebpackPlugin({
		filename: feature.name + '/' + 'index.html',
		template: './src/' + feature.name + '/' + 'index.html',
		inject: 'true'
	}),
	new webpack.LoaderOptionsPlugin({
		options: {
			vue: {
				autoprefixer: {
					browsers: ['> 5%']
				}
			}
		}
	})
];

if (process.env.NODE_ENV === 'production') {
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new BomPlugin(true)
	]);
} else {
	module.exports.devtool = 'eval-source-map'
}
