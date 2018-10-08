const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');
const webpack = require('webpack');
//const { resolve } = require('path');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const CompressionWebpackPlugin = require('compression-webpack-plugin');
const commonConfig = require('./common.config');
const SizePlugin = require('size-plugin');

const mode = 'production';

module.exports = merge(commonConfig(mode), {
    mode,
    entry: {
      app: './index.jsx', // the entry point of our app
      vendors: ['react'],
    },
    //devtool: 'nosources-source-map',
    devtool: 'cheap-source-map',
    optimization: {
        minimize: true,
        splitChunks: {
            name: false, 
            chunks: 'all',
            minChunks: 1,
            hidePathInfo: false,
            automaticNameDelimiter: '-',
            cacheGroups: { 
                css: {
                    test: /\.(css|scss|less)$/i,
                    name: 'style',
                    reuseExistingChunk: true,
                    enforce: true,
                    priority: 101
                },
                commons: { 
                    name: 'vendors', 
                    chunks: 'all', 
                    test: /[\\/]node_modules[\\/]/, 
                    priority: -10, 
                }, 
                moment: {
                    test: /[\\/]moment[\\/]/,
                    name: 'moment',
                    reuseExistingChunk: true,
                    //enforce: true,
                    priority: 100
                }
            },
        },
        //runtimeChunk: {
        //    name: entrypoint => `runtimechunk~${entrypoint.name}`
        //}    
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name]-[hash].css', disable: false, allChunks: true }),
        new webpack.LoaderOptionsPlugin({
            options: {
              context: __dirname,
              postcss: [
                autoprefixer,
              ]
            }
          }),
        /*new CompressionWebpackPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(js|css)$'),
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: true
        }),*/
        new SizePlugin()
    ]
});
