(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{332:function(a,t,n){"use strict";n.r(t);var e=n(33),l=Object(e.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"绝对定位或-fixed-定位的元素的子元素如何上下居中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#绝对定位或-fixed-定位的元素的子元素如何上下居中"}},[a._v("#")]),a._v(" 绝对定位或 fixed 定位的元素的子元素如何上下居中")]),a._v(" "),n("p",[a._v("（常见场景：元素上的遮罩层的子元素或弹窗中的内容）")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("垂直居中的所有情况如下\n\n注：1、2、6 非常适用于像弹窗这种父元素设置了绝对定位，子元素需要上下居中的情况。\n")])])]),n("h3",{attrs:{id:"_1、块元素：-absolute-transform"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、块元素：-absolute-transform"}},[a._v("#")]),a._v(" 1、块元素： absolute+transform")]),a._v(" "),n("blockquote",[n("p",[a._v("优点： 不需要知道子元素尺寸")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v(".parent {\n    position: relative;\n    height: 200px;\n}\n.child {\n    width: 80px;\n    height: 40px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    background: blue;\n}\n")])])]),n("h3",{attrs:{id:"_2、块元素：absolute-marign-auto"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、块元素：absolute-marign-auto"}},[a._v("#")]),a._v(" 2、块元素：absolute+marign: auto")]),a._v(" "),n("blockquote",[n("p",[a._v("优点： 不需要知道子元素尺寸")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v(".parent {\n    position: relative;\n    height: 200px;\n}\n.child {\n    width: 80px;\n    height: 40px;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    background: blue;\n}\n")])])]),n("h3",{attrs:{id:"_3、块元素：padding"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、块元素：padding"}},[a._v("#")]),a._v(" 3、块元素：padding")]),a._v(" "),n("blockquote",[n("p",[a._v("缺点：高度固定的情况下才适用，指定上下 padding 值实现居中。")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v(".parent {\n    padding: 5% 0;\n}\n.child {\n    padding: 10% 0;\n    background: blue;\n}\n")])])]),n("h3",{attrs:{id:"_4、块元素：display-table-cell"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、块元素：display-table-cell"}},[a._v("#")]),a._v(" 4、块元素：display: table-cell")]),a._v(" "),n("blockquote",[n("p",[a._v("缺点：1、parent 不能设置绝对定位，绝对定位优先级大于 display: table-cell; 2、子元素必须设置成行级元素或行内块级元素。")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v(".parent {\n  width: 400px;\n  height: 600px;\n  background: #f00;\n  \x3c!-- position: absoult;\n  top: 0;\n  left: 0; --\x3e\n/*   display: table; */\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.child {\n  width: 140px;\n  height: 140px;\n  background: #0f0;\n  display: inline-block;\n}\n")])])]),n("h3",{attrs:{id:"_5、块级元素：display：flex"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5、块级元素：display：flex"}},[a._v("#")]),a._v(" 5、块级元素：display：flex")]),a._v(" "),n("blockquote",[n("p",[a._v("缺点：flex 布局和绝对定位不能在同一个元素上同时使用，移动端会出现问题")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v(".parent {\n  width: 400px;\n  height: 600px;\n  background: #f00;\n/*   position: absolute;\n  top: 0;\n  left: 0; */\n/*   display: table; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.child {\n  width: 140px;\n  height: 140px;\n  background: #0f0;\n  display: inline-block;\n}\n")])])]),n("h3",{attrs:{id:"_6、块级元素：利用行级元素-vertical-align：middel-after-before-伪元素"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6、块级元素：利用行级元素-vertical-align：middel-after-before-伪元素"}},[a._v("#")]),a._v(" 6、块级元素：利用行级元素 vertical-align：middel +:after/:before 伪元素")]),a._v(" "),n("p",[a._v("利用行级元素可以通过 vertical-align 调整基线的原则")]),a._v(" "),n("blockquote",[n("p",[a._v("优点: 父元素可以设置绝对定位")])]),a._v(" "),n("blockquote",[n("p",[a._v("缺点：子元素必须设置成行级元素")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v(".parent {\n  width: 400px;\n  height: 600px;\n  background: #f00;\n  \x3c!-- position: absolute;\n  top: 0;\n  left: 0;  --\x3e\n}\n\n.parent:after {\n  content: '';\n  display: inline-block;\n  vertical-align: middle;\n  height: 100%;\n}\n\n.child {\n  width: 140px;\n  height: 140px;\n  background: #0f0;\n  display: inline-block;\n  vertical-align: middle;\n}\n")])])]),n("h3",{attrs:{id:"_7、块级元素：display：inline-block-vertical-align：middel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7、块级元素：display：inline-block-vertical-align：middel"}},[a._v("#")]),a._v(" 7、块级元素：display：inline-block + vertical-align：middel")]),a._v(" "),n("p",[a._v("同第 6 点，将伪元素换成一个 font-size 为 0，高度和父元素高度等高的行级元素。第 6 点可以合并成第 7 点。")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<div class="parent">\n    <div class="child">child</div>\n    <div class="brother">brother</div>\n</div>\n\n.parent {\n  width: 400px;\n  height: 600px;\n  background: #f00;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.brother {\n  display: inline-block;\n  vertical-align: middle;\n  height: 100%;\n  font-size：0；\n}\n\n.child {\n  width: 140px;\n  height: 140px;\n  background: #0f0;\n  display: inline-block;\n  vertical-align: middle;\n}\n')])])]),n("h3",{attrs:{id:"参考资料："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料："}},[a._v("#")]),a._v(" 参考资料：")]),a._v(" "),n("p",[n("a",{attrs:{href:"https://juejin.im/post/5a7a9a545188257a892998ef",target:"_blank",rel:"noopener noreferrer"}},[a._v("垂直居中"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=l.exports}}]);