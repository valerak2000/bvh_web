const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // devtool: 'source-map', // No need for dev tool in production
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract([
                {
                    loader: 'css-loader',
                    options: { importLoaders: 1 },
                },
                'postcss-loader']
            )
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract([
                {
                    loader: 'css-loader',
                    options: { importLoaders: 1 },
                },
                /*'postcss-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        data: `@import "${__dirname}/../src/static/styles/config/_variables.scss";`
                    }
                }*/]
            )
        }],
    },

    plugins: [
        new ExtractTextPlugin('styles/[name].css'),
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
        /*new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        })*/
