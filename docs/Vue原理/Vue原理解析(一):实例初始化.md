每一个组件都是一个 vue 实例

Vue 是一个类，里面包含了初始化 vue 实例、将父组件自定义的事件传递给子组件、将组件中 render 函数转化为 vnode...的方法：

```js
initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)
```

通过 new Vue 创建 vue 的实例的同时，会将传递的参数挂载到当前 vue 的实例上。

在生命周期 beforeCreated 之前，不能通过 this 访问到 data 中的数据。 这个阶段 data 数据还没有被挂载到 this 实例上。

**vue 类的\_init()方法：**

```js
initLifecycle(vm)
initEvents(vm)
initRender(vm)
callHook(vm, 'beforeCreate') //之间this上没有挂载data/props数据
initInjections(vm) // resolve  初始化inject数据
//injections before data/props
initState(vm) //初始化props，methods，data，computed，watch
initProvide(vm) // resolve provide after data/props
callHook(vm, 'created')
```

**需要注意在初始化 methods 时，会将当前实例 this 绑定到函数上：**

```
    methods[key].bind(vm)
```

所以在定义函数时，不能使用箭头函数来定义。否则在函数内部 this 为 undefined，而不是当前的 vue 实例。箭头函数的 bind 里的参数会被忽略。

**参考资料**

[Vue 实例](https://cn.vuejs.org/v2/guide/instance.html)

[Vue 到底是什么？](https://juejin.im/post/5d2dbf5f5188256b432322f3)
