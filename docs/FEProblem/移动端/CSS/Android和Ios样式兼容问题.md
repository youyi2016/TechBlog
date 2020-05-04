# Android 和 Ios 样式兼容（显示不一致）问题

### Input 高度显示不一致问题

解决办法：

一定要给 input 设置一个固定的高度

现象：

Android 上默认显示的 input 高度要比 Ios 上默认的 input 高度短，导致无法与左边的文本对齐。

原因： 待考证

```css
input {
  border: none;
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  height: 44px;
}

input:-ms-input-placeholder {
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #c3c1c1;
}
```

### Android 上中文文本与非中文文本无法对齐的问题：

Android 无法兼容 flex-start 属性

解决方案：

用行级元素代替块级元素，并设置文本元素 vertical-align：top，调整基线。

[更多微信 H5 上的兼容问题](https://www.boxuegu.com/news/1963.html)

11 月 16 日

### input:disabled ios 上样式被覆盖

```
input:disabled,
textarea:disabled {
  -webkit-text-fill-color: #383333;
  -webkit-opacity: 1;
  color: #383333;
}
```
