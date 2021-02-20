const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

/**
 * Rules
 */

const processTypescript = {
  test: /\.tsx?$/,
  use: ['ts-loader', 'babel-loader'],
  exclude: /node_modules/,
};

const processScss = {
  test: /\.scss$/i,
  include: path.resolve(__dirname, '../src'),
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          exportLocalsConvention: 'camelCase',
          localIdentName: '[local]_[hash:base64:6]',
        },
      },
    },
    {
      loader: 'sass-loader',
    },
    {
      loader: 'style-resources-loader',
      options: {
        patterns: [
          path.resolve(__dirname, '../src/styles/variables.scss'),
        ],
      },
    },
  ],
};

/**
 * Plugins
 */

const buildIndexHtml = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, '../src/index.html'),
});

const miniCssExtract = new MiniCssExtractPlugin({
  filename: '[name].[hash:8].css',
  ignoreOrder: true,
});

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
    buildIndexHtml,
    miniCssExtract,
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
