const webpack = require('webpack')
const webpackConfig = require('../webpack.config.js')
const fs = require('fs-extra')
const babelSupport = require('../src/babel-support')
const merge = require('webpack-merge')

const argv = require('yargs').argv
console.log(argv)
handle()

async function handle () {
  // 构建前清空下构建的目标目录
  if (argv.first) {
    await fs.remove('./dist')
  }


  if (argv.es16) {
    await build(
      merge(webpackConfig('es2016'), {
        module: {
          rules: [babelSupport('es2016')]
        }
      })
    )
  }

  if (argv.es15) {
    await build(
      merge(webpackConfig('es2015'), {
        module: {
          rules: [babelSupport('es2015')]
        }
      })
    )
  }

}

async function build (webpackConfig) {
  const compiler = webpack(webpackConfig)
  return new Promise((resolve, reject) => {
    resolve()
    compiler.run((err, status) => {
      if (err) {
        reject()
        throw err
      }
      resolve()
    })
  })
}

