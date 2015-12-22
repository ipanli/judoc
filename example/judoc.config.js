module.exports = {
  name: "jujs",
  version: "0.0.1",
  repositoryUrl: "https://github.com/ipanli/jujs",
  introduction: "jujs，一个javascript常用方法库，包含了浏览器中对storage、cookie的操作封装，e5 shim，date日期处理，身份证、url中元素校验解析，及一些其他常用的方法集合（正则、extend、继承、类等...）。<br /><br />源码采用AMD书写，以webpack打包，karma+jasmine单元测试，UMD格式输出，如果以全局方式引入，方法集全挂在全局变量ju下，例如访问util方法集则已ju.util访问。<br /><br /><a href=\"/fe/static/scripts/ju-0.0.1.min.js\" target=\"_blank\">生产版本（0.0.1）</a><br /><a href=\"/fe/static/scripts/ju-0.0.1.js\" target=\"_blank\">开发版本（0.0.1）</a>",
  paths: {
    input: "./example/src",
    output: "./example/build"
  },
  skip: ["store/AbstractStorage.js"]
}