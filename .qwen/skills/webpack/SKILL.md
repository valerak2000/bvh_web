# Webpack Skill

Навык для настройки и оптимизации сборки Webpack.

## Capabilities

- Конфигурация Webpack 5
- Hot Module Replacement (HMR)
- Code splitting
- Tree shaking
- Оптимизация бандлов
- Анализ размеров

## Usage

```bash
skill: "webpack"
```

## Project Configuration

```
frontend/
├── webpack.config.js    # Основная конфигурация
├── webpack/             # Дополнительные конфиги
│   ├── base.js
│   ├── dev.js
│   └── prod.js
└── package.json
```

## Common Commands

```bash
# Dev сервер с HMR
npm run dev

# Production сборка
npm run build

# Анализ бандла
npm run build-analysis

# Проверка размеров
npm run test-bundle
```

## webpack.config.js (основное)

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
const isAnalyze = process.env.NODE_ENV === 'analyze';

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(less|css)$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html.ejs',
    }),
    ...(isProd ? [new MiniCssExtractPlugin()] : []),
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  devtool: isDev ? 'eval-source-map' : 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimize: isProd,
  },
};
```

## Babel Config (.babelrc)

```json
{
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", { "runtime": "automatic" }],
    "@babel/preset-typescript"
  ],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    "@babel/plugin-transform-runtime",
    ["babel-plugin-import", {
      "libraryName": "@mui/material",
      "libraryDirectory": "",
      "camelCaseDashStyleName": true
    }]
  ]
}
```

## Оптимизация

### Code Splitting (динамический импорт)

```javascript
// Ленивая загрузка компонентов
const LoadableComponent = loadable(() => import('./HeavyComponent'));

// В роутах
const Dashboard = loadable(() => import('./views/Dashboard'));
```

### Tree Shaking

```javascript
// Хорошо (импортируем только нужное)
import { Button } from '@mui/material';

// Плохо (импортируем всё)
import * as MUI from '@mui/material';
```

### Анализ бандла

```bash
# webpack-bundle-analyzer
npm run build-analysis

# size-plugin
# автоматически показывает размеры в консоли при сборке
```

## Performance Tips

1. **Кэширование**: `cache: { type: 'filesystem' }`
2. **Tree shaking**: `sideEffects: false` в package.json
3. **Минимизация**: TerserPlugin для JS, CssMinimizerPlugin для CSS
4. **Preload/Prefetch**: `webpackChunkName` для важных чанков
