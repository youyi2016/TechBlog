# vue 中使用 ts

### 前言

Ts 只能识别.ts 文件，对于其他例如.vue 文件默认不能识别。那么在 vue 中如何使用 ts？

### 需要的工具

```
typescript”: “\^3.1.4” (这个是必须的，ts库)
“ts-loader”: “\^3.5.0” (识别ts的laoder)
“tslint”: “\^5.11.0” (tslint校验库)
“tslint-loader”: “\^3.5.4” (tslint的loader)
“tslint-config-standard”: “\^8.0.1” (用于tslint默认校验规则)
“vue-property-decorator”: “\^7.2.0” (用于在.vue文件中使用ts语法)
```

### ts 编译

指定编译的模块类型：

基于编译器模块选项（--module commonjs 或 --module amd 或 --module umd 或 --module system）会生成不同的 JavaScript。

### 注意事项

1、ts 默认不能识别.vue 文件，所以需要在.d.ts 中声明.vue 模块

```
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

```

2、在导入 vue 组件时需要指明 .vue 后缀。

ts 中没有后缀的文件，会首先被当作为 js 文件，如果 js 文件没有，就会被当作 .ts 文件。

3、在.ts 文件中通过一定的配置可以直接使用在.d.ts 文件中声明的变量类型。

**参考资料：**

[vue 中使用 Ts](https://blog.fundebug.com/2018/11/30/how-to-use-typescript-in-vue/)

[vue 对 Ts 的支持](https://cn.vuejs.org/v2/guide/typescript.html)
