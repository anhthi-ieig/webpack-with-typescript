const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const path = require('path');

const rootDir = fs.realpathSync(process.cwd());

module.exports = () => new HtmlWebpackPlugin({
  template: path.resolve(rootDir, 'src/index.html'),
});
