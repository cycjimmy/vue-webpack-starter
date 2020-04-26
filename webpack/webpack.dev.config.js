const
  path = require('path')
  , webpackMerge = require('webpack-merge')
  , webpackBase = require("./webpack.base.js")
  , browserSyncConfig = require('./browserSync.config')
  , styleLoadersConfig = require('./styleLoaders.config')()

  // Webpack Plugin
  , BrowserSyncPlugin = require('browser-sync-webpack-plugin')
  , HtmlWebpackPlugin = require('html-webpack-plugin')
;

const arrayCssRulesUse_dev = (isModule = true) => [
  {
    loader: 'vue-style-loader',
  },
  isModule ? styleLoadersConfig.cssLoaderWithModule : styleLoadersConfig.cssLoader,
];

const arrayScssRulesUse_dev = (isModule = true) => [
  {
    loader: 'vue-style-loader'
  },
  isModule ? styleLoadersConfig.cssLoaderWithModule : styleLoadersConfig.cssLoader,
  styleLoadersConfig.sassLoader,
];

module.exports = webpackMerge(webpackBase, {
  mode: 'development',
  devtool: 'eval-source-map',

  output: {
    path: path.resolve('dist'),
  },

  module: {
    rules: [
      // Style
      {
        test: /\.css$/,
        oneOf: [{
          resourceQuery: /module/,
          use: arrayCssRulesUse_dev(true),
        }, {
          use: arrayCssRulesUse_dev(false),
        }],
      },
      {
        test: /\.scss$/,
        oneOf: [{
          resourceQuery: /module/,
          use: arrayScssRulesUse_dev(true),
        }, {
          use: arrayScssRulesUse_dev(false),
        }],
      },

      // Pictures
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: [
          path.resolve('node_modules'),
        ],
        include: [
          path.resolve('app'),
          path.resolve('static'),
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
        ],
      },

      // media
      {
        test: /\.(wav|mp3|mpeg|mp4|webm|ogv|flv|ts)$/i,
        exclude: [
          path.resolve('node_modules'),
        ],
        include: [
          path.resolve('static', 'media'),
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'media/[name].[ext]',
            },
          },
        ],
      },

      // Font
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        exclude: [
          path.resolve('node_modules'),
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          }
        ],
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('./static', 'view', 'index.html'),
    }),

    new BrowserSyncPlugin(browserSyncConfig({
      server: {
        baseDir: 'dist',
      },
    }), {
      reload: true,
    }),

  ],
});
