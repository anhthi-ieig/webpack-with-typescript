module.exports = {
  test: /\.tsx?$/,
  use: ['ts-loader', 'babel-loader'],
  exclude: /node_modules/,
};
