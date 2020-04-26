# Vue Webpack Starter

![][workflows-badge-image]
[![build status][travis-image]][travis-url]
[![libraries dependency status][libraries-status-image]][libraries-status-url]
[![Release date][release-date-image]][release-url]
[![semantic-release][semantic-image]][semantic-url]

* A webpack starter for vue building. [Demo][github-pages-url]

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
 ├─mock/                       # Mock data entry folder
 │   ├─api/
 │   └─webSocket/
 ├─static/                     # Static folder
 │   ├─images/                 # Pictures folder
 │   ├─view/                   # Static html template folder
 │   │   └──...
 │   └─favicon.ico             # Icon file
 ├─webpack/                    # Webpack configuration folder
 │   ├─browserSync.config.js   # BrowserSync config file
 │   ├─postcss.config.js       # Postcss config file
 │   └─...                     # Webpack configuration files
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
```

<!-- Links: -->
[workflows-badge-image]: https://github.com/cycjimmy/vue-webpack-starter/workflows/Test%20CI/badge.svg
[travis-image]: https://img.shields.io/travis/cycjimmy/vue-webpack-starter
[travis-url]: https://travis-ci.org/cycjimmy/vue-webpack-starter
[libraries-status-image]: https://img.shields.io/librariesio/release/github/cycjimmy/vue-webpack-starter
[libraries-status-url]: https://libraries.io/github/cycjimmy/vue-webpack-starter
[release-date-image]: https://img.shields.io/github/release-date/cycjimmy/vue-webpack-starter
[release-url]: https://github.com/cycjimmy/vue-webpack-starter/releases
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[github-pages-url]: https://cycjimmy.github.io/vue-webpack-starter/
