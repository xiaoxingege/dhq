var path = require('path'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	BomPlugin = require('webpack-utf8-bom'),
	fs = require('fs');

let featureName = process.env.JRJ_FEATURE || 'demo';

const buildEntry = function() {
	let dir = path.join(__dirname, `src/${featureName}/pages`);
	let entries = fs.readdirSync(dir);
	let ret = {};
	entries.forEach(entry => {
		ret[path.basename(entry, '.js')] = `./src/${featureName}/pages/${entry}`
	});
	return ret;
}

const buildHTML = function() {
	let dir = path.join(__dirname, `src/${featureName}/pages`);
	let entries = fs.readdirSync(dir);
	return entries.map(entry => {
		let basename = path.basename(entry, '.js');
		return new HtmlWebpackPlugin({
			filename: `${featureName}/${basename}.html`,
			template: `./src/${featureName}/index.html`,
			chunks: ['vendor', basename],
			inject: 'true'
		})
	});
}

module.exports = {
	entry: Object.assign({
		vendor: ['vue', 'vue-router']
	}, buildEntry()),
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: process.env.NODE_ENV == 'production' ?
			'https://i0.jrjimg.cn/zqt-m/one-step/' : '/dist/',
		filename: featureName + '/[name].[hash:12].js'
	},
	resolve: {
		extensions: [
			'.vue', '.js'
		],
		modules: ["node_modules"],
		alias: {
			vue: 'vue/dist/vue.min.js',
			components: __dirname + '/src/components/',
			assets: __dirname + '/src/assets/'
		}
	},
	module: {
		rules: [{
			enforce: 'pre',
			test: /\.(js|vue)$/,
			exclude: /node_modules/,
			loader: 'eslint-loader',
			options: { fix: true }
		}, {
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
				name: featureName + '/images/[name].[ext]?[hash]'
			}
		}]
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

module.exports.plugins = buildHTML().concat([
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor',
		filename: featureName + '/vendors.min.js',
		minify: {
			removeComments: true,
			collapseWhitespace: false
		}
	}),
	new webpack.LoaderOptionsPlugin({
		options: {
			vue: {
				autoprefixer: {
					browsers: ['> 5%']
				}
			}
		}
	}),
	new webpack.HashedModuleIdsPlugin()
]);

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
