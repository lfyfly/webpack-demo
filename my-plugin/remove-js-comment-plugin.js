// 移除 /** xxxx **/ 注释

module.exports = class removeJsComment {
  constructor(options) {
    this.options = options;
    this.externalModules = {};
  }
  apply(compiler) {
    var reg = /\/(\*)+.*(\*)+\//g; // 注释正则
    compiler.hooks.emit.tap("removeJsComment", compilation => { // 注册emit事件
      // compilation对应所有编译的文件
      Object.keys(compilation.assets).forEach(filename => { 
        let content = compilation.assets[filename].source();
        if(filename.endsWith('.js')){
          content = content.replace(reg, ""); // 替换掉注释
        }
        // 返回新的内容
        compilation.assets[filename] = {
          source() {
            return content;
          },
          size() {
            return content.length;
          }
        };
      });
    });
  }
};