const merge = require('webpack-merge');
const { resolve } = require('path');
const commonConfig = require('./common.config');
const SizePlugin = require('size-plugin');
var BundleTracker = require('webpack-bundle-tracker');

process.env.NODE_ENV = 'production';

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
      'index': './index.jsx' // the entry point of our app
    },
    devtool: 'source-map',
    output: {
      //filename: 'bundle.js',
      filename: 'js/bundle.[hash].min.js',
      chunkFilename: '[name].js',
      path: resolve(__dirname, '../src/static_dist'),
      publicPath: '/'
    },
    optimization: {
        minimize: true,
        splitChunks: {
          chunks: 'all',
          minChunks: 1,
          name: true,
          // minSize: 307200, //300 kb
          // maxSize: 512000, //500 kb
          hidePathInfo: false,
          automaticNameDelimiter: '-',
          cacheGroups: {
            moment: {
              test: /[\\/]moment[\\/]/,
              name: 'moment',
              reuseExistingChunk: true,
              enforce: true,
              priority: 100
            },
            materialUi: {
              test: /[\\/]@material-ui[\\/]/,
              name: 'material-ui',
              reuseExistingChunk: true,
              enforce: true,
              priority: 99
            },
            react: {
              test: /[\\/]react|redux/,
              name: 'react',
              reuseExistingChunk: true,
              enforce: true,
              priority: 98
            },
            // lodash: {
            //   test: /[\\/]lodash[\\/]/,
            //   name: 'lodash',
            //   reuseExistingChunk: true,
            //   enforce: true,
            //   priority: 97
            // },
            vendors: {
              name: 'vendor',
              test: /[\\/]node_modules[\\/]/,
              reuseExistingChunk: true,
              enforce: true,
              priority: 0
            },
            default: false
          }
        }
    },
    new BundleTracker({filename: './webpack-stats-prod.json'}),
    plugins: [new SizePlugin()]
};
/*    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
*/
