const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const ModuleHtmlPlugin = require('./plugins/ModuleHtmlPlugin')
const path = require('path');
module.exports = target => {

  const supportModule = target === 'es2016'
  return {
    entry: './src/main.js',
    output: {
      filename: supportModule
        ? '[name].es16.[hash:8].js'
        : '[name].es15.[hash:8].js',
      path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',//production
    plugins: [

      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: supportModule ? './template/index.html' : './dist/index.html',
        inject: 'body'
      }),
      new ModuleHtmlPlugin(!supportModule)//param | support module and nomodule   ? true: false

    ]
  }

};