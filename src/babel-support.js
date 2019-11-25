module.exports = target => {
  if (target === 'es2015') {
    return {
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }
  }
  return {

  }
}