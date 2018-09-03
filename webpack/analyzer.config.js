// production config
const merge = require('webpack-merge');
const { resolve } = require('path');
const commonConfig = require('./prod.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = merge(commonConfig, {
  plugins: [new BundleAnalyzerPlugin()]
});
