(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{332:function(t,e,n){"use strict";n.r(e);var a=n(33),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"观察者模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式"}},[t._v("#")]),t._v(" 观察者模式")]),t._v(" "),n("h3",{attrs:{id:"应用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),n("p",[t._v("Vue 中的 emit/on bus 模式, 跨组件通信。")]),t._v(" "),n("p",[t._v("Websocket 消息事件的订阅与发布。")]),t._v(" "),n("h3",{attrs:{id:"实现原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[t._v("#")]),t._v(" 实现原理")]),t._v(" "),n("p",[t._v("相当于报纸订阅者向报社订阅报纸，报社要满足订阅者的不同需求，不同订阅者订阅相同的报纸，报社需要将该报纸卖多份。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class FEEvents {\n\teventsMap = {}\n\n\ton(eventName, eventfn) {\n\t\tvar _ref;\n\t\tlet stack = (_ref = this.eventsMap[eventName]) != null ? _ref : this.eventsMap[eventName] = [];\n\t\tstack.push(eventfn);\n\t\treturn this.eventsMap[eventName] = stack;\n\t}\n\n\temit(eventName, data) {\n\t\tvar _ref;\n\t\tvar stack = (_ref = this.eventsMap[eventName]) != null ? _ref : this.eventsMap[eventName] = [];\n\t\tfor (var _i = 0, _len = stack.length; _i < _len; _i++) {\n\t\t\tvar fn = stack[_i];\n\t\t\tif (!fn) return false\n\t\t\tfn(data)\n\t\t}\n\t}\n\n\toff(eventName) {\n\t\treturn (this.eventsMap[eventName]) != null ? this.eventsMap[eventName].length = 0 : void 0;\n\t}\n\n\tone(eventName, eventfn) {\n\n\t\tthis.off(eventName)\n\t\tthis.on(eventName, eventfn)\n\t}\n}\n\nlet eventObj = new FEEvents()\neventObj.on('call', function (data) {\n\tconsole.log('my name is:', data)\n})\n\neventObj.on('call', function (data) {\n\tconsole.log('my age is:', data)\n})\n\neventObj.emit('call', 'no data')\n\neventObj.one('oneEvent', function () {\n\tconsole.log('one event 1....')\n})\n\neventObj.one('oneEvent', function () {\n\tconsole.log('one event 2....')\n})\n\neventObj.emit('oneEvent')\n")])])]),n("p",[n("strong",[t._v("参考资料：")])]),t._v(" "),n("p",[n("a",{attrs:{href:"http://www.alloyteam.com/2012/10/commonly-javascript-design-pattern-observer-mode/",target:"_blank",rel:"noopener noreferrer"}},[t._v("观察者模式"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("11-26")])])}),[],!1,null,null,null);e.default=s.exports}}]);