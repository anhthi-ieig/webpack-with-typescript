const path = require('path');

/**
 * Module Rules
 */

const processTypescript = require('./rules/typescript');
const processScss = require('./rules/scss');

/**
 * Plugins
 */

const stylelint = require('./plugins/stylelint-webpack-plugin');
const extractCss = require('./plugins/mini-css-extract-plugin');
const buildHtml = require('./plugins/html-webpack-plugin');

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
      processTypescript,
      processScss,
    ],
  },
  plugins: [
    stylelint,
    extractCss,
    buildHtml,
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
