const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
// var nodeExternals = require('webpack-node-externals');


function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var commonConfig = {

  // PROD
  externals: {
    animejs: 'animejs',
    'vee-validate': 'vee-validate',
    'vue-the-mask': 'vue-the-mask',
    'v-money' : 'v-money',
  },


	output: {
		path: path.resolve(__dirname + '/dist/'),
	},
	module: {
		rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
      	test: /\.s[a|c]ss$/, loader: "style!css!sass"
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
};

module.exports = [
	//Config 1: browser environment
	merge(commonConfig, {
		entry: path.resolve(__dirname + '/src/plugin.js'),
		// entry: path.resolve(__dirname + '/src/main.js'),
		output: {
			filename: 'vest-ui.min.js',
			libraryTarget: 'window',
			library: 'VestUI'
		}
	}), 

	// Config 2: For Node-based dev environments
	merge(commonConfig, {
		entry: path.resolve(__dirname + '/src/index.vue'),
		// entry: path.resolve(__dirname + '/src/main.js'),
		output: {
			filename: 'vest-ui.js',
			libraryTarget: 'umd',

			library: 'vest-ui',
			umdNamedDefine: true
		}
	})
];


if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
