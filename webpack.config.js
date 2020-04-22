module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  module:{
    rules:[
      {
        test: /.css$/,
        // 多loader从后往前执行
        use: ['style-loader','css-loader'] // css-loader只是吧css转化成js模块，而style-loader才是将css放到style标签中，插入页面
      },
      {
        test:/.md$/,
        use: './my-loader/markdown-loader'
      }
    ]
  }
}