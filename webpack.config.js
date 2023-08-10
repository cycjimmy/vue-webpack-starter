// This file is used to configure IDE settings.
// The configuration items actually used are in the webpack folder.
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const path = require('node:path');

module.exports = {
  resolve: {
    modules: [
      path.resolve('app'),
      path.resolve('node_modules'),
      path.resolve('static'),
    ],
    alias: {
      '@': path.resolve('app'),
      '@static': path.resolve('static'),
    },
    extensions: ['.js'],
  },
};
