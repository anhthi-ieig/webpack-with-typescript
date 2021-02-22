module.exports = {
  test: /\.(ts|tsx)?$/,
  use: ['ts-loader', 'babel-loader'],
  exclude: /node_modules/,
};
