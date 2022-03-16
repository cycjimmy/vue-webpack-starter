/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const path = require('path');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// vue
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const DEVELOPMENT = process.env.NODE_ENV === 'development'; // Development mode
const PRODUCTION = process.env.NODE_ENV === 'production'; // Production mode
const PRODUCTION_TEST_SERVER = process.env.NODE_ENV === 'production_test_server'; // Preview production mode with test server

module.exports = {
  entry: {
    load: path.resolve('app', 'load.js'),
  },

  output: {
    filename: DEVELOPMENT
      ? 'scripts/[name].bundle.[chunkhash:4].js'
      : 'scripts/[name].bundle.[chunkhash:8].min.js',
    chunkFilename: DEVELOPMENT
      ? 'scripts/[name].chunk.[chunkhash:4].js'
      : 'scripts/[name].chunk.[chunkhash:8].min.js',
    publicPath: './',
  },

  resolve: {
    modules: [
      path.resolve('app'),
      path.resolve('node_modules'),
      path.resolve('static'),
    ],
    alias: {
      vue$: path.resolve('node_modules', 'vue', 'dist', 'vue.esm.js'),
    },
    extensions: ['.js'],
  },

  module: {
    rules: [
      // Scripts
      {
        test: /\.js$/,
        type: 'javascript/auto',
        loader: 'babel-loader',
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },

      // ico
      {
        test: /\.ico$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  optimization: {
    moduleIds: 'deterministic',
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        default: false,
        defaultVendors: false,
        runtime: {
          name: 'runtime',
          chunks: 'initial',
          minSize: Infinity,
          minChunks: Infinity,
        },
      },
    },
    runtimeChunk: {
      name: 'runtime',
    },
  },

  plugins: [
    new DefinePlugin({
      DEVELOPMENT: JSON.stringify(DEVELOPMENT),
      PRODUCTION: JSON.stringify(PRODUCTION),
      PRODUCTION_TEST_SERVER: JSON.stringify(PRODUCTION_TEST_SERVER),
      TEST_SERVER_ADDRESS: '',
    }),

    new VueLoaderPlugin(),

    new ESLintPlugin({
      fix: true,
    }),

    new CleanWebpackPlugin({
      verbose: true,
      cleanStaleWebpackAssets: false,
    }),
  ],
};
