# Vue Webpack Starter

[![build status][travis-image]][travis-url]
[![David deps][david-image]][david-url]
[![devDependencies Status][david-dev-image]][david-dev-url]

[travis-image]: https://travis-ci.org/cycjimmy/vue-webpack-starter.svg?branch=master
[travis-url]: https://travis-ci.org/cycjimmy/vue-webpack-starter
[david-image]: https://img.shields.io/david/cycjimmy/vue-webpack-starter.svg?style=flat-square
[david-url]: https://david-dm.org/cycjimmy/vue-webpack-starter
[david-dev-image]: https://david-dm.org/cycjimmy/vue-webpack-starter/dev-status.svg?style=flat-square
[david-dev-url]: https://david-dm.org/cycjimmy/vue-webpack-starter?type=dev

## Features
* CSS Module
* Support Sass
* Store([Vuex](https://github.com/vuejs/vuex))
* Router([vue-router](https://github.com/vuejs/vue-router))

## Installation
```shell
$ npm install
# or
$ yarn install
```

## Main directory structure
```text
vue-webpack-starter
 │
 ├─app/                        # Project entry folder
 │   └─...
 ├─gulp/                       # Gulp tasks folder
 │   └─...
 ├─mock/                       # Mock data entry folder
 │   ├─api/
 │   └─webSocket/
 ├─static/                     # Static folder
 │   ├─images/                 # Pictures folder
 │   ├─view/                   # Static pug template folder
 │   │   └──...
 │   └─favicon.ico             # Icon file
 ├─webpack/                    # Webpack configuration folder
 │   ├─browserSync.config.js   # BrowserSync config file
 │   ├─postcss.config.js       # Postcss config file
 │   └─...                     # Webpack configuration files
 ├─gulpfile.js                 # Gulp file entry
 └─...
```

## Main Tasks
```shell
# Run in development
$ npm start

# Build for production
$ npm run build
# or
$ npm run build:watch

# deploy to gh-pages
$ npm run deploy
```

