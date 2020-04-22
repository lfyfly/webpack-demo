const markded = require('marked')  

module.exports = sorce=>{
  console.log(sorce)
  const html =  markded(sorce)
  // loader 输出必须是一段js代码字符串
  return `export default ${JSON.stringify(html)}`
}