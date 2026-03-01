const { merge } = require('webpack-merge');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonConfig = require('./common.config');
const SizePlugin = require('size-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(commonConfig('production'), {
    devtool: 'source-map',
    
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true,
                        drop_debugger: true,
                        pure_funcs: ['console.log', 'console.info', 'console.debug']
                    },
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            })
        ],
        
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    priority: -10,
                    reuseExistingChunk: true,
                },
                react: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'react',
                    priority: 21,
                    reuseExistingChunk: true,
                },
                mui: {
                    test: /[\\/]node_modules[\\/](@mui)/,
                    name: 'mui',
                    chunks: 'all',
                    priority: 20,
                },
                moment: {
                    test: /[\\/]node_modules[\\/]moment[\\/]/,
                    name: 'moment',
                    priority: 19,
                    reuseExistingChunk: true,
                },
            },
        },
        
        runtimeChunk: {
            name: 'runtime'
        }
    },
    
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[name].[contenthash].chunk.css'
        }),
        
        new SizePlugin({
            writeFile: true
        }),
        
        // Определения для продакшена
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});
