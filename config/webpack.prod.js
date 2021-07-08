const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');

/**
 * Plugins
 */

const bundleStatsWebpackPlugin = require('./plugins/bundle-stats-webpack-plugin');
const compressionWebpackPlugin = require('./plugins/compression-webpack-plugin');
const cleanWebpackPlugin = require('./plugins/clean-webpack-plugin');

const terserWebpackPlugin = require('./plugins/terser-webpack-plugin');
const cssMinimizerWebpackPlugin = require('./plugins/css-minimizer-webpack-plugin');

/**
 * Config
 */

module.exports = merge(webpackCommon, {
  mode: 'production',
  plugins: [
    bundleStatsWebpackPlugin(),
    compressionWebpackPlugin(),
    cleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      terserWebpackPlugin(),
      cssMinimizerWebpackPlugin(),
    ],
  },
});
