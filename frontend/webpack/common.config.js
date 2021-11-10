
const path = require('path');
const ROOT_PATH = path.resolve(__dirname);
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ProgressBarPlugin = require('webpack-simple-progress-plugin');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const nodeModulesDir = path.resolve(__dirname, 'node_modules');
const envinfo = require('envinfo');
console.log(
    envinfo.run({
        System: ["OS", "CPU"],
        Binaries: ["Node", "Yarn", "npm"],
        Browsers: ["Chrome", "Firefox", "Safari"],
        npmPackages: "*webpack*",
        npmGlobalPackages: ["webpack", "webpack-cli"]
    })
);
envinfo
  .run(
    {
      npmPackages: `{${[
        '@mui/*',
        // Peer dependencies
        'react',
        'react-dom',
        // optional peer deps
        '@emotion/react',
        '@emotion/styled',
        'styled-components',
        '@types/react',
        // auxiliary libraries
        'typescript',
      ]}}`,
      Binaries: ['Node', 'Yarn', 'npm'],
      System: ['OS'],
      Browsers: ['Chrome', 'Firefox', 'Safari', 'Edge'],
    },
    {
      // `markdown: true` uses level 2 headings. It doesn't necessarily fit our issue template
      json,
      duplicates: true,
      // include transitive dependencies and important packages that are transitive dependencies (e.g. `jsdom` is usually a transitive dependency inside jest)
      fullTree: true,
      showNotFound: true,
    },
  )
  .then((output) => {
    // eslint-disable-next-line no-console
    console.log(output);
  });

const PATHS = {
    app: path.join(__dirname, '../src'),
    build: path.join(__dirname, '../../static/bundles/'),
};
console.log('__dirname: ' + __dirname + ' Build path: ' + PATHS.build);
//path.resolve(__dirname, './node_modules')
module.exports = function (mode) {
    const devMode = mode === 'development';
    console.error(`Dev Mode:${devMode} config: ${mode}`);

    return {
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss', '.css']
        },
        /*resolve: {
            extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
            modules: ['node_modules']
        },*/
        context: path.resolve(__dirname, '../src/'),
        output: {
            filename: '[name].[hash].js',
            chunkFilename: '[name].[hash].js',
            path: PATHS.build,
            //publicPath: '/'
            publicPath: '/static/bundles/'
        },
        module: {
            rules: [
                {
                    test: /\.gz$/,
                    enforce: 'pre',
                    use: 'gzip-loader'
                },
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    use: [
                      {
                        loader: 'webpack-remove-block-loader',
                        options: {
                          active: !devMode
                        },
                      }
                    ]
                },
                {
                    test: /\.(js|jsx)$/,
                    use: {
                        loader: 'babel-loader'
                    },
                    exclude: [nodeModulesDir],
                },
                {
                    test: /\.tsx?$/,
                    use: {
                        loader: 'awesome-typescript-loader'
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        devMode ? 'style-loader' : ExtractCssChunks.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localsConvention: 'camelCase',
                                //camelCase: true,
                                sourceMap: true,
                                importLoaders: 1
                            }
                        },
                        'postcss-loader'
                    ]
                },
                {
                    rules: [
                        {
                            test: /\.less$/,
                            use: [
                                devMode ? 'style-loader' : ExtractCssChunks.loader,
                                {
                                    loader: 'css-loader',
                                    options: { url: false, sourceMap: false }
                                },
                                'postcss-loader',
                                {
                                    loader: 'less-loader',
                                    options: {
                                      relativeUrls: false,
                                      sourceMap: false
                                    }
                                }
                            ],
                        }
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        devMode ? 'style-loader' : ExtractCssChunks.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(jpe?g|png|gif|ico)$/i,
                    use: [
                        {
                          loader: 'img-loader',
                          options: {
                            name: '[path][name].[ext]?[hash]',
                          },
                        }
                    ]
                    //use: ['file-loader?name=images/[name].[ext]?[hash]', 'img-loader']
                },
               /*{
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                    loader: 'url-loader?name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff'
                },*/
                {
                    //test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                    //loader: 'file-loader?name=fonts/[name].[ext]'
                    test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                      {
                        loader: 'file-loader',
                        options: {
                          name: '[name].[ext]',
                          outputPath: 'fonts/'
                        },
                      }
                    ]
                },
                {
                    test: /\.(json|pdf)(\?.*)?$/,
                    //loader: 'file-loader?name=files/[name].[ext]'
                    use: [
                        {
                          loader: 'file-loader',
                          options: {
                            name: '[name].[ext]',
                            outputPath: 'files/'
                          },
                        }
                      ]
                  },
                //copy Web config file to dist folder
                {
                    test: /web.config/,
                    use: [
                        {
                          loader: 'file-loader',
                          options: {
                            name: '[name].[ext]',
                          },
                        }
                      ]
                  }
            ]
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new CleanWebpackPlugin({
                    dangerouslyAllowCleanPatternsOutsideProject: true,
                    cleanOnceBeforeBuildPatterns: ['**/*', PATHS.build],
                    //cleanAfterEveryBuildPatterns: ['static*.*', '!static1.js'],
                    dry: false,
                    verbose: true,
            }),
            new ExtractCssChunks({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: devMode ? '[name].css' : '[name].[hash].css',
                chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
                hot: devMode // optional as the plugin cannot automatically detect if you are using HOT, not for production use
            }),
            new HtmlWebpackPlugin({
                inject: true,
                //template: path.join(__dirname, '../src/index.html.ejs'),
                hash: true,
                //chunks: ['vendor', 'app'],
                //chunksSortMode: 'manual',
                //favicon: path.join(__dirname, '../../static/public/favicon.ico'),
                //minify: true,
            }),
            new webpack.ProvidePlugin({
                React: 'react',
                ReactDOM: 'react-dom'
            }),
            new ProgressBarPlugin({
                format: 'Build [:bar] :percent (:elapsed seconds)',
                clear: false,
            }),
            new webpack.NoEmitOnErrorsPlugin(),
            new BundleTracker({ filename: './webpack-stats.json' })
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
};