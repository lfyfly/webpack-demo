const markded = require('marked')  

module.exports = sorce=>{
  // console.log(sorce)
  const html =  markded(sorce)
  return html
}