const { merge } = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common.config');
const path = require('path');

const port = 8080;

module.exports = merge(commonConfig('development'), {
    devtool: 'eval-source-map',
    
    devServer: {
        hot: true,
        open: true,
        port: port,
        host: 'localhost',
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, '../src'),
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
    },
    
    plugins: [
    ],
    
    stats: 'minimal'
});
