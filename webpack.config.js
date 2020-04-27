// webpack.config.js
// import { Configuration } from 'webpack' // 仅仅在配置时打开注释，打包时需要注释改代码

const RemoveJsCommentPlugin = require('./my-plugin/remove-js-comment-plugin')

/**
 * @type {Configuration}
 */
const config ={
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
        use: ['style-loader', 'css-loader'] // css-loader只是吧css转化成js模块，而style-loader才是将css放到style标签中，插入页面
      },
      {
        test:/.md$/,
        // use: './my-loader/markdown-loader' // markdown-loader loader返回js代码字符串
        use: ['html-loader', './my-loader/markdown-loader-to-html'] // markdown-loader-to-html 返回
      }
    ]
  },
  plugins:[
    new RemoveJsCommentPlugin()
  ]
}

module.exports = config