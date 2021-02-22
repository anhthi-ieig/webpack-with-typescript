const { merge } = require('webpack-merge');

const webpackCommon = require('./webpack.common');

module.exports = merge(webpackCommon, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
});
