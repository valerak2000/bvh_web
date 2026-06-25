const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Загружаем переменные из .env файла
const dotenv = require('dotenv');
const envFile = path.resolve(__dirname, '../.env');
let envVars = {};
if (fs.existsSync(envFile)) {
    envVars = dotenv.parse(fs.readFileSync(envFile));
}

// Пути к директориям
const PATHS = {
    src: path.join(__dirname, '../src'),
    build: path.join(__dirname, '../../static/bundles')
};

// Функция для создания конфигурации CSS лоадеров
const createCssLoaders = (isDev, modules = false) => {
    const loaders = [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: modules
                    ? {
                          localIdentName: '[local]'
                      }
                    : false,
                sourceMap: isDev,
                importLoaders: 2
            }
        },
        'postcss-loader'
    ];

    return loaders;
};

// Функция для создания конфигурации файловых ресурсов
const createAssetRule = (test, outputPath) => ({
    test,
    type: 'asset/resource',
    generator: {
        filename: `${outputPath}/[name].[contenthash][ext]`
    }
});

module.exports = function (mode) {
    const isDev = mode === 'development';

    return {
        mode,
        context: PATHS.src,

        entry: {
            app: './index.jsx'
        },

        output: {
            filename: isDev ? '[name].js' : '[name].[contenthash].js',
            chunkFilename: isDev ? '[name].js' : '[name].[contenthash].js',
            path: PATHS.build,
            publicPath: '/static/bundles/',
            clean: true
        },

        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss', '.css'],
            alias: {
                '@': PATHS.src,
                '@components': path.join(PATHS.src, 'components'),
                '@containers': path.join(PATHS.src, 'containers'),
                '@actions': path.join(PATHS.src, 'actions'),
                '@reducers': path.join(PATHS.src, 'reducers'),
                '@utils': path.join(PATHS.src, 'utils'),
                '@styles': path.join(PATHS.src, 'styles')
            }
        },

        module: {
            rules: [
                // Предварительная обработка .gz файлов
                {
                    test: /\.gz$/,
                    enforce: 'pre',
                    use: 'gzip-loader'
                },

                // JavaScript и TypeScript
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                cacheDirectory: true
                            }
                        }
                    ]
                },

                // CSS
                {
                    test: /\.css$/,
                    use: createCssLoaders(isDev, true)
                },

                // Less
                {
                    test: /\.less$/,
                    use: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: isDev,
                                importLoaders: 2
                            }
                        },
                        'postcss-loader',
                        {
                            loader: 'less-loader',
                            options: {
                                sourceMap: isDev
                            }
                        }
                    ]
                },

                // Sass/SCSS
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: isDev,
                                importLoaders: 3
                            }
                        },
                        'postcss-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isDev
                            }
                        }
                    ]
                },

                // Изображения
                createAssetRule(/\.(png|jpe?g|gif|ico)$/i, 'images'),
                createAssetRule(/\.svg$/i, 'images'),

                // Шрифты
                createAssetRule(/\.(woff|woff2|ttf|eot|otf)$/i, 'fonts'),

                // Другие файлы
                createAssetRule(/\.(json|pdf|txt|webp)$/i, 'files'),

                // Конфигурационные файлы
                {
                    test: /web\.config$/,
                    type: 'asset/resource',
                    generator: {
                        filename: '[name].[ext]'
                    }
                }
            ]
        },

        plugins: [
            new webpack.ProgressPlugin(),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: isDev ? '[name].css' : '[name].[contenthash].css',
                chunkFilename: isDev ? '[id].css' : '[id].[contenthash].css'
            }),

            // HtmlWebpackPlugin используется в dev и production режимах
            new HtmlWebpackPlugin({
                template: path.join(PATHS.src, 'index.html.ejs'),
                inject: true,
                minify: !isDev
            }),

            // Пробрасываем переменные из .env в клиентский код
            new webpack.DefinePlugin({
                'process.env.YANDEX_MAPS_API_KEY': JSON.stringify(envVars.YANDEX_MAPS_API_KEY || '')
            }),

            // new webpack.ProvidePlugin({
            //     React: 'react',
            //     ReactDOM: 'react-dom'
            // }),

            new ProgressBarPlugin({
                format: 'Build [:bar] :percent (:elapsed seconds)',
                clear: false
            }),

            //new webpack.NoEmitOnErrorsPlugin(),

            new BundleTracker({
                filename: 'webpack-stats.json',
                path: path.resolve(__dirname, '..')
            })
        ],

        externals: isDev
            ? {}
            : {
                  React: 'react',
                  ReactDOM: 'react-dom'
              },

        performance: {
            hints: isDev ? false : 'warning'
        }
    };
};
