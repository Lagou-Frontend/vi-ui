const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

module.exports = merge(baseWebpackConfig, {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../lib/'),
    filename: 'vi-ui.js',
    library: "VIUI",
    libraryTarget: "umd"
  },
  target: 'web',
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }
})


