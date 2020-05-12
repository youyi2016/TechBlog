# Webpack

## Webpack原理与背景

### webpack是什么？
* 前端发展的产物

* 前端工程解决方案

* 前端模块打包方案

### webpack的发展由来

模块化优点：封装作用域、逻辑解耦、重用性。

前端模块化的发展：从最初单例模式创建模块到AMD、CMD 、Es6模块。

 对比 |                                                               单例模式模块化                               |                                                                                   AMD | CMD                                                                                                                                                      | Es 模块化 | Common.js
---- | --- | --- | --- | --- | ---
缺点|1、跨模块引用需要将模块暴露到全局变量上；2、无法按需加载；3、定义模块前，需要手动引入依赖模块。||| |
加载方式|同步/异步|异步|异步|同步/异步 |同步/异步
加载时机|运行时|运行时|运行时| 编译时| 运行时
运行环境|浏览器/node|浏览器|浏览器|浏览器/node |浏览器/node
备注||解决了暴露全局变量问题||| 

前端模块化开发的发展催生了前端构建工具的产生：



| 对比 | Npm Script  | Grunt | Gulp | Webpack | Rollpup  |
---- | --- | --- | --- | --- | ---
功能特点 |任务执行者 | 任务执行者 | 基于流的自动化构建工具 | 前端模块打包工具 | 前端模块打包工具
|优点|内置，无需安装|1、可以管理任务之间的依赖关系； 2、自动化地执行依赖的任务； 3、有大量现成的插件封装了常见的任务。|在Grunt的优点的基础上，还支持监听文件变化自动刷新页面、读写文件，例如将scss文件转化成css文件等| 1、专注于处理模块化的项目，能做到开箱即用、一步到位；2、社区庞大活跃，经常引入紧跟时代发展的新特性，能为大多数场景找到已有的开源扩展；3、灵活，可通过Plugin按需扩展功能| 
|缺点|功能太简单，不能方便地管理多个任务之间的依赖|集成度不高，要写很多配置后才可以用，无法做到开箱即用|集成度不高，要写很多配置后才可以用，无法做到开箱即用| 只能用于采用模块化开发的项目 |
|备注|在package.json文件里面使用scripts字段定义任务，通过调用Shell去运行脚本命令|任务定义在配置文件Gruntfile.js中，执行grunt + 对应指令运行任务||

参考[前端构建工具发展及其比较](
https://blog.zhangbing.site/2018/04/23/%E5%89%8D%E7%AB%AF%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7%E5%8F%91%E5%B1%95%E5%8F%8A%E5%85%B6%E6%AF%94%E8%BE%83/)

随着前端项目逻辑多、文件多、项目日益复杂，前端需要更强大并且灵活的构建工具，来提升开发效率。

### webpack打包思路



## Webpack的使用

### 
### 热更新

webpack-dev-server

* 安装webpack-dev-server：

npm install --save-dev webpack-dev-server

* 配置webpack.config.js文件：

```
  module.exports = {
    entry: {
			app: './docs',
			print: './docs',
    },
    devtool: 'inline-source-map',
		devServer: { //配置devServer
			contentBase: './docs/.vuepress/dist', //指定检测的文件夹
			hot: true
		},
    plugins: [
      
    ],
    output: {
     
    }
  };
```

* 配置package.json

```
  "devDependencies": {
    "vuepress": "^1.2.0",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.11.0"
  },
  "scripts": {
    "watch": "webpack --watch",
    "start": "webpack-dev-server --open", //配置指令
    "docs:dev": "vuepress dev docs",
    "dev": "vuepress build docs"
  }
}
```

