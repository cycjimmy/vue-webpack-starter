const
  path = require('path')
  , PRODUCTION = process.env.NODE_ENV === 'production'
;

const  cssIdentifier = PRODUCTION ? '[hash:base64:10]' : '[name]__[local]';

module.exports = options => {
  return Object.assign({
    cssLoader: {
      loader: 'css-loader',
    },
    cssLoaderWithModule: {
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName: cssIdentifier,
        },
      },
    },
    postLoader: {
      loader: 'postcss-loader',
      options: {
        config: {
          path: path.resolve('webpack', 'postcss.config.js'),
        },
      },
    },
    sassLoader: {
      loader: 'sass-loader',
      options: {
        outputStyle: 'expanded',
      },
    },
  }, options);
};
