const path = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const devMode = process.env.NODE_ENV === 'development';

const PATHS = {
    app: path.join(__dirname, '../src'),
    //app: './src/bvh_web/static',
    build: path.join(__dirname, '../bundles'),
};

const VENDOR = [
    'babel-polyfill',
    'history',
    'react',
    'react-dom',
    'react-redux',
    'react-router',
    'react-mixin',
    'classnames',
    'redux',
    'react-router-redux',
    'jquery',
    'bootstrap-loader',
    'font-awesome-webpack!./styles/font-awesome.config.prod.js',
    'material-ui'
];

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
        modules: ['node_modules']
    },
    context: path.resolve(__dirname, '../src/'),
    entry: {
        //vendor: VENDOR,
        //app: PATHS.app,
    },
    output: {
        filename: '[name].[hash].js',
        path: PATHS.build, //path.resolve(__dirname, '../src/static_dist/'),
        //publicPath: '/static'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            /*{
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },*/
            {
                test: /\.css$/,
                use: [
                    devMode ? 'style-loader' : ExtractCssChunks.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    devMode ? 'style-loader' : ExtractCssChunks.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'sass-loader'
                    //'postcss-loader'
                    /*{
                        loader: 'sass-loader',
                        options: {
                            data: `@import "/${__dirname}/../src/static/styles/config/_variables.scss";`
                        }
                    }*/
                ]
            },
            {
                rules: [
                    {
                        test: /\.less$/,
                        use: [
                            devMode ? 'style-loader' : ExtractCssChunks.loader,
                            'css-loader', // translates CSS into CommonJS
                            'postcss-loader',
                            'less-loader' // compiles Less to CSS
                        ]
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|ico|svg)$/i,
                use: ['file-loader?name=images/[name].[ext]?[hash]', 'img-loader']
            },
            /*{
                test: /\.svg(\?.*)?$/,
                loader: 'url-loader?name=images/[name].[ext]&limit=10000&mimetype=image/svg+xml'
            },*/
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: 'url-loader?name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.otf(\?.*)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]&mimetype=application/font-otf'
            },
            {
                test: /\.(json|pdf)(\?.*)?$/,
                loader: 'file-loader?name=files/[name].[ext]'
            },
            //copy Web config file to dist folder
            {
                test: /web.config/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractCssChunks(
            {
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: devMode ? '[name].css' : '[name].[hash].css',
                chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
                //hot: false // optional as the plugin cannot automatically detect if you are using HOT, not for production use
                hot: devMode // optional as the plugin cannot automatically detect if you are using HOT, not for production use
            }),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(__dirname, '../src/index.html.ejs'),
            hash: true,
            //chunks: ['vendor', 'app'],
            //chunksSortMode: 'manual',
            favicon: path.join(__dirname, '../src/images/favicon.ico'),
            minify: true,
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `"${devMode ? 'development' : 'production'}"`,
            },
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new BundleTracker({ filename: './webpack/webpack-stats.json' })
    ],
    externals: {
        React: 'react',
        ReactDOM: 'react-dom',
        jsdom: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
        'react-dom/test-utils': true,
        'react-test-renderer/shallow': true
    },
    performance: {
        hints: 'warning'
    }
};
