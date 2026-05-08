const { merge } = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common.config');
const path = require('path');
const fs = require('fs');

const port = 9000;

module.exports = merge(commonConfig('development'), {
    devtool: 'eval',

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
        allowedHosts: 'auto',
        // Включаем historyApiFallback для SPA
        historyApiFallback: {
            index: '/static/bundles/index.html',
            disableDotRule: true,
        },
        static: {
            directory: path.join(__dirname, '../../static/bundles'),
            publicPath: '/static/bundles/',
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
            publicPath: '/static/bundles/',
        },
    },

    plugins: [],

    stats: 'minimal'
});
