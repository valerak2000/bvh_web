const { merge } = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common.config');
const path = require('path');
const fs = require('fs');

const port = 8080;

module.exports = merge(commonConfig('development'), {
    devtool: 'eval-source-map',

    optimization: {
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

    devServer: {
        hot: true,
        open: false,
        port: port,
        host: 'localhost',
        // Включаем historyApiFallback для SPA
        historyApiFallback: {
            index: '/index.html',
            disableDotRule: true,
        },
        static: {
            directory: path.join(__dirname, '../public'),
            publicPath: '/',
        },
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
        compress: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        // Записываем бандлы на диск для отладки
        devMiddleware: {
            writeToDisk: true,
        },
    },

    plugins: [],

    stats: 'minimal'
});
