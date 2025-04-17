const path = require('path');

module.exports = {
  entry: './src/main.ts', // Angular 应用的入口文件
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'), // 输出目录
    clean: true, // 在每次构建前清理输出目录
  },
  resolve: {
    extensions: ['.ts', '.js'], // 解析的文件扩展名
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // 匹配 TypeScript 文件
        use: 'ts-loader', // 使用 ts-loader 处理 TypeScript
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // 匹配 CSS 文件
        use: ['style-loader', 'css-loader'], // 使用 style-loader 和 css-loader
      },
      {
        test: /\.html$/, // 匹配 HTML 文件
        use: 'html-loader', // 使用 html-loader
      },
      // 其他规则...
    ],
  },
  plugins: [
    // 可以添加插件，例如 HtmlWebpackPlugin
  ],
  mode: 'development', // 开发模式，可以根据需要更改为 'production'
};