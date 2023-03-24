const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  entry: {
    main: './src/main.js',
    // console: './src/console.js',
    // second: './src/second.js'
  },
  // 输出配置
  output: {
    path: path.resolve(__dirname, './dist'),
    // 这里预设为hash
    filename: 'js/[name].[contenthash].js',
    clean: true,
    chunkFilename: "js/[name].[contenthash].chunk.js"
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: false,
    },
  },
}