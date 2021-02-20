const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');

/**
 * Plugins
 */

const cleanPlugin = require('./plugins/clean-webpack-plugin');
const compressionPlugin = require('./plugins/compression-webpack-plugin');
const bundleStatsPlugin = require('./plugins/bundle-stats-webpack-plugin');
const terserPlugin = require('./plugins/terser-webpack-plugin');
const cssMinimizerPlugin = require('./plugins/css-minimizer-webpack-plugin');

/**
 * Config
 */

module.exports = merge(webpackCommon, {
  mode: 'production',
  plugins: [
    cleanPlugin,
    compressionPlugin,
    bundleStatsPlugin,
  ],
  optimization: {
    minimizer: [
      terserPlugin,
      cssMinimizerPlugin,
    ],
  },
});
