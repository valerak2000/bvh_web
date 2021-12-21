const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
//const { resolve } = require('path');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const CompressionWebpackPlugin = require('compression-webpack-plugin');
const SizePlugin = require('size-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const commonConfig = require('./common.config');

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
        minimizer: [
            new TerserJSPlugin({
                //minify: TerserPlugin.uglifyJsMinify,
                //test: /\.js(\?.*)?$/i,
                //cache: false,
                parallel: true,
                extractComments: false,
                //compress: true,
                terserOptions: {
                    sourceMap: {
                        filename: "out.js",
                        url: "out.js.map"
                    },
                    format: {
                        comments: false,
                    },
                },
            }),
            new OptimizeCSSAssetsPlugin({verbose: true}),
        ],
        /*moduleIds: 'named',
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
                },
		shared: false,
            },
        },*/
    },
    performance: {
        hints: 'warning',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]-[hash].css',
            chunkFilename: '[id].[hash].css',
            runtime: true,
        }),
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
