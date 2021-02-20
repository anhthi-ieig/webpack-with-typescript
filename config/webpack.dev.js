const { merge } = require('webpack-merge');

const webpackCommon = require('./webpack.common');

module.exports = merge(webpackCommon, {
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
});
