const fs = require('fs');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const rootDir = fs.realpathSync(process.cwd());

module.exports = {
  test: /\.scss$/i,
  include: path.resolve(rootDir, 'src'),
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
          path.resolve(rootDir, 'src/styles/variables.scss'),
        ],
      },
    },
  ],
};
