const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common.config');

const port = 8080;
const url = `http://localhost:${port}`;
const mode = 'development';

module.exports = merge(commonConfig(mode), {
    mode,
    entry: {
        hot: 'react-hot-loader/patch', // activate HMR for React
        webpack_dev: 'webpack-dev-server/client?${url}', // bundle the client for webpack-dev-server and connect to the provided endpoint
        webpack_hot: 'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
        app: './index.jsx', // the entry point of our app
        vendors: ['react'],
    },
    //devtool: 'cheap-module-source-map', //cheap-module-eval-source-map inline-source-map
    devtool: 'source-map',
    devServer: {
        hot: true, // enable HMR on the server
        open: true,
        port: port,
		contentBase: './frontend/bundles',
        historyApiFallback: true,
    },
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
