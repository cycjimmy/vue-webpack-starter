/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const path = require('path');
const { merge } = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBase = require('./webpack.base');
const browserSyncConfig = require('./browserSync.config');
const styleLoadersConfig = require('./styleLoaders.config')();

module.exports = merge(webpackBase, {
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
          use: [
            {
              loader: 'vue-style-loader',
            },
            styleLoadersConfig.cssLoader,
          ],
        }, {
          use: [
            {
              loader: 'vue-style-loader',
            },
            styleLoadersConfig.cssLoader,
          ],
        }],
      },
      {
        test: /\.scss$/,
        oneOf: [{
          resourceQuery: /module/,
          use: [
            {
              loader: 'vue-style-loader',
            },
            styleLoadersConfig.cssLoader,
            styleLoadersConfig.sassLoader,
          ],
        }, {
          use: [
            {
              loader: 'vue-style-loader',
            },
            styleLoadersConfig.cssLoader,
            styleLoadersConfig.sassLoader,
          ],
        }],
      },

      // Pictures
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
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

      // Media
      {
        test: /\.(wav|mp3|mpeg|mp4|webm|ogv|flv|ts)$/i,
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
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
    ],
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
