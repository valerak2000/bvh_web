const path = require('path');
const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
    app: path.join(__dirname, '../src/static'),
    build: path.join(__dirname, '../src/static_dist'),
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
    'font-awesome-webpack!./styles/font-awesome.config.prod.js'
];

const basePath = path.resolve(__dirname, '../src/static/');
const common = {
    context: basePath,
    entry: {
        vendor: VENDOR,
        app: PATHS.app
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    output: {
        filename: '[name].[hash].js',
        path: PATHS.build,
        publicPath: '/static'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/static/index.html'),
            hash: true,
            chunks: ['vendor', 'app'],
            chunksSortMode: 'manual',
            filename: 'index.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: TARGET === 'dev' ? '"development"' : '"production"' },
            '__DEVELOPMENT__': TARGET === 'dev'
        }),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery'
        }),
        new CleanWebpackPlugin([PATHS.build], {
            root: process.cwd()
        })
    ],
    resolve: {
        extensions: ['.jsx', '.js', '.json', '.scss', '.css'],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
                query: {
                    presets: ['@babel/react', '@babel/es2015'],
                    plugins: ['@babel/proposal-class-properties']
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(svg|png|gif|jpg|ico)$/,
                loader: 'file-loader?name=/images/[name].[ext]?[hash]'
            },
            {
                test: /\.woff(\?.*)?$/,
                loader: 'url-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.woff2(\?.*)?$/,
                loader: 'url-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff2'
            },
            {
                test: /\.ttf(\?.*)?$/,
                loader: 'url-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?.*)?$/,
                loader: 'file-loader?name=/fonts/[name].[ext]'
            },
            {
                test: /\.otf(\?.*)?$/,
                loader: 'file-loader?name=/fonts/[name].[ext]&mimetype=application/font-otf'
            },
            {
                test: /\.svg(\?.*)?$/,
                loader: 'url-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.json(\?.*)?$/,
                loader: 'file-loader?name=/files/[name].[ext]'
            },
            {
                test: /\.pdf(\?.*)?$/,
                loader: 'file-loader?name=/files/[name].[ext]'
            },
        ]
    },
};

switch (TARGET) {
    case 'dev':
        module.exports = merge(require('./dev.config'), common);
        break;
    case 'prod':
        module.exports = merge(require('./prod.config'), common);
        break;
    default:
        console.log('Target configuration not found. Valid targets: "dev" or "prod".');
}
/*
            {
                test: /\.txt(\?.*)?$/,
                loader: 'file-loader?name=/files/[name].[ext]&mimetype=text/plain'
            }

name: 'media/[name].[hash:8].[ext]',
                test: /\.pdf$/,
                loader: 'file?name=/files/[name].[ext]'
                test: /\.pdf(\?.*)?$/,
                loader: 'file-loader?name=/files/[name].[ext]'
*/
