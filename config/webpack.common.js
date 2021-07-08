const path = require('path');

/**
 * Module Rules
 */

const processTs = require('./rules/process-ts');
const processScss = require('./rules/process-scss');

/**
 * Plugins
 */

const htmlWebpackPlugin = require('./plugins/html-webpack-plugin');
const miniCssExtractPlugin = require('./plugins/mini-css-extract-plugin');
const stylelintWebpackPlugin = require('./plugins/stylelint-webpack-plugin');
const moduleLocalesWebpackPlugin = require('./plugins/moment-locales-webpack-plugin');

/**
 * Config
 */

module.exports = {
  entry: path.resolve(__dirname, '../src/render.tsx'),
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
  module: {
    rules: [
      processTs(),
      processScss(),
    ],
  },
  plugins: [
    htmlWebpackPlugin(),
    miniCssExtractPlugin(),
    stylelintWebpackPlugin(),
    moduleLocalesWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
