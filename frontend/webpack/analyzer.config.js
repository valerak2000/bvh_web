const { merge } = require('webpack-merge');
const commonConfig = require('./common.config');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(commonConfig('development'), {
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: '../analysis/bundle-report.html',
            reportTitle: 'Bundle Analysis Report'
        })
    ]
});