const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common.config');

process.env.NODE_ENV = 'development';
const port = 8080;
const url = `http://localhost:${port}`;

module.exports = merge(commonConfig, {
    mode: process.env.NODE_ENV,
    entry: {
        'hot': 'react-hot-loader/patch', // activate HMR for React
        'webpack-dev': 'webpack-dev-server/client?${url}', // bundle the client for webpack-dev-server and connect to the provided endpoint
        'webpack-hot': 'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
        'index': './index.jsx' // the entry point of our app
    },
    devServer: {
        hot: true, // enable HMR on the server
        open: true,
        port: port,
        historyApiFallback: true
    },
    devtool: 'cheap-module-source-map', //cheap-module-eval-source-map
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // enable HMR globally
        new webpack.NamedModulesPlugin() // prints more readable module names in the browser console on HMR updates
    ],
    stats: {
        children: true, 
        entrypoints: true,
        errors: true,
        errorDetails: true,
    }
});
