# computed 与 watch

### computed

改变对象属性，不能触发 computed 的 set 方法。

computed 的 set 方法什么时候可以触发？

### watch

- 如何监听数据
- 为什么要用 deep 和 immediate

父组件切换模块然后给模块中的对象类型变量重新初始化值时，在子组件中监听到该对象，需要在 watch 中添加 immediate。

改变对象中的属性时？？监听需要 deep？？
