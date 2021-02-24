module.exports = {
  test: /\.(ts|tsx)?$/,
  use: ['babel-loader', 'ts-loader'],
  exclude: /node_modules/,
};
