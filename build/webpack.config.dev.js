let pkg = require('../package.json');

// the 'require' parameter is in the context of front-cli, not the application
module.exports = require => {
	let path = require('path');
	let glob = require('glob');
	let webpack = require('webpack');

	let entry = {};
	let entries = glob.sync('src/**/*');

	entries.forEach(e => {
		entry[path.basename(e, path.extname(e))] = ['./' + e];
	});

	let babelOptions = {
		presets: [
			[require.resolve('babel-preset-env'), {
				targets: {
					browsers: ['ie >= 11']
				},
				useBuiltIns: true
			}]
		]
	};

	return {
		entry: entry,

		output: {
			path: path.resolve(__dirname, '../dist'),
			filename: '[name].js',
			library: 'v-[name]',
			libraryTarget: 'umd'
		},

		module: {
			rules: [
				{
					test: /\.vue$/i,
					loader: 'vue-loader',
					options: {
						loaders: {
							js: 'babel-loader?' + JSON.stringify(babelOptions),
							scss: 'vue-style-loader!css-loader!sass-loader',
							sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
						}
					}
				},
				{
					test: /\.(js|vue)$/i,
					loader: 'eslint-loader',
					enforce: 'pre',
					exclude: /node_modules/,
					options: {
						fix: true
					}
				},
				{
					test: /\.js$/i,
					loader: 'babel-loader?' + JSON.stringify(babelOptions),
					exclude: /node_modules/
				},
				{
					test: /\.sass$/i,
					use: [
						{ loader: 'style-loader' },
						{ loader: 'css-loader' },
						{ loader: 'sass-loader?indentedSyntax=sass'	}
					]
				},
				{
					test: /\.scss$/i,
					use: [
						{ loader: 'style-loader' },
						{ loader: 'css-loader' },
						{ loader: 'sass-loader' }
					]
				},
				{
					test: /\.css$/i,
					use: [
						{ loader: 'style-loader' },
						{ loader: 'css-loader' }
					]
				},
				{
					test: /\.(eot|woff2?|ttf|svg|png|jpg|gif|bmp)(\?.*)*$/i,
					loader: 'file-loader',
					options: {
						name: 'img/[name].[ext]'
					}
				}
			]
		},

		resolve: {
			modules: [
				path.resolve(__dirname, '../'),
				path.resolve(__dirname, '../application'),
				path.resolve(__dirname, '../node_modules')
			],
			extensions: ['.js', '.vue']
		},

		externals: {
			vue: {
				commonjs: 'vue',
				commonjs2: 'vue',
				amd: 'vue',
				root: 'Vue',
				var: 'Vue'
			}
		},

		plugins: [
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify('production')
			}),
			new webpack.optimize.UglifyJsPlugin({
				output: { comments: false },
				sourceMap: false
			}),
			new webpack.BannerPlugin({
				banner: [
					`${pkg.name} ${pkg.version} - ${pkg.description}`,
					`v-[name]`,
					'\nDevelopers:\n',
					pkg.authors.map(a => `\t\t${a}`).join('\n')
				].join('\n'),
				include: entries.filter(e => path.extname(e) === '.vue').map(e => path.basename(e, '.vue'))
			}),
			new webpack.BannerPlugin({
				banner: [
					`${pkg.name} ${pkg.version} - ${pkg.description}`,
					`[name]`,
					'\nDevelopers:\n',
					pkg.authors.map(a => `\t\t${a}`).join('\n')
				].join('\n'),
				include: entries.filter(e => path.extname(e) === '.js').map(e => path.basename(e, '.js'))
			})
		]
	};
};