const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const config = require('../config')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

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
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify('production')
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true
    }),
  ]
})


