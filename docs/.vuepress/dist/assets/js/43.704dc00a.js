(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{246:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("每一个组件都是一个 vue 实例")]),t._v(" "),s("p",[t._v("Vue 是一个类，里面包含了初始化 vue 实例、将父组件自定义的事件传递给子组件、将组件中 render 函数转化为 vnode...的方法：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initMixin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stateMixin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eventsMixin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lifecycleMixin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderMixin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("通过 new Vue 创建 vue 的实例的同时，会将传递的参数挂载到当前 vue 的实例上。")]),t._v(" "),s("p",[t._v("在生命周期 beforeCreated 之前，不能通过 this 访问到 data 中的数据。 这个阶段 data 数据还没有被挂载到 this 实例上。")]),t._v(" "),s("p",[s("strong",[t._v("vue 类的_init()方法：")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initLifecycle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initEvents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initRender")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callHook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'beforeCreate'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//之间this上没有挂载data/props数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initInjections")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolve  初始化inject数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//injections before data/props")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//初始化props，methods，data，computed，watch")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initProvide")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolve provide after data/props")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callHook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'created'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("strong",[t._v("需要注意在初始化 methods 时，会将当前实例 this 绑定到函数上：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("    methods[key].bind(vm)\n")])])]),s("p",[t._v("所以在定义函数时，不能使用箭头函数来定义。否则在函数内部 this 为 undefined，而不是当前的 vue 实例。箭头函数的 bind 里的参数会被忽略。")]),t._v(" "),s("p",[s("strong",[t._v("参考资料")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/instance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue 实例"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/5d2dbf5f5188256b432322f3",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue 到底是什么？"),s("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=e.exports}}]);