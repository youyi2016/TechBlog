# 绝对定位或 fixed 定位的元素的子元素如何上下居中

（常见场景：元素上的遮罩层的子元素或弹窗中的内容）

    垂直居中的所有情况如下

    注：1、2、6 非常适用于像弹窗这种父元素设置了绝对定位，子元素需要上下居中的情况。

### 1、块元素： absolute+transform

> 优点： 不需要知道子元素尺寸

```
.parent {
    position: relative;
    height: 200px;
}
.child {
    width: 80px;
    height: 40px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: blue;
}
```

### 2、块元素：absolute+marign: auto

> 优点： 不需要知道子元素尺寸

```
.parent {
    position: relative;
    height: 200px;
}
.child {
    width: 80px;
    height: 40px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: blue;
}
```

### 3、块元素：padding

> 缺点：高度固定的情况下才适用，指定上下 padding 值实现居中。

```
.parent {
    padding: 5% 0;
}
.child {
    padding: 10% 0;
    background: blue;
}
```

### 4、块元素：display: table-cell

> 缺点：1、parent 不能设置绝对定位，绝对定位优先级大于 display: table-cell; 2、子元素必须设置成行级元素或行内块级元素。

```
.parent {
  width: 400px;
  height: 600px;
  background: #f00;
  <!-- position: absoult;
  top: 0;
  left: 0; -->
/*   display: table; */
  display: table-cell;
  vertical-align: middle;
}

.child {
  width: 140px;
  height: 140px;
  background: #0f0;
  display: inline-block;
}
```

### 5、块级元素：display：flex

> 缺点：flex 布局和绝对定位不能在同一个元素上同时使用，移动端会出现问题

```
.parent {
  width: 400px;
  height: 600px;
  background: #f00;
/*   position: absolute;
  top: 0;
  left: 0; */
/*   display: table; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.child {
  width: 140px;
  height: 140px;
  background: #0f0;
  display: inline-block;
}
```

### 6、块级元素：利用行级元素 vertical-align：middel +:after/:before 伪元素

利用行级元素可以通过 vertical-align 调整基线的原则

> 优点: 父元素可以设置绝对定位

> 缺点：子元素必须设置成行级元素

```
.parent {
  width: 400px;
  height: 600px;
  background: #f00;
  <!-- position: absolute;
  top: 0;
  left: 0;  -->
}

.parent:after {
  content: '';
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}

.child {
  width: 140px;
  height: 140px;
  background: #0f0;
  display: inline-block;
  vertical-align: middle;
}
```

### 7、块级元素：display：inline-block + vertical-align：middel

同第 6 点，将伪元素换成一个 font-size 为 0，高度和父元素高度等高的行级元素。第 6 点可以合并成第 7 点。

```
<div class="parent">
    <div class="child">child</div>
    <div class="brother">brother</div>
</div>

.parent {
  width: 400px;
  height: 600px;
  background: #f00;
  position: absolute;
  top: 0;
  left: 0;
}

.brother {
  display: inline-block;
  vertical-align: middle;
  height: 100%;
  font-size：0；
}

.child {
  width: 140px;
  height: 140px;
  background: #0f0;
  display: inline-block;
  vertical-align: middle;
}
```

### 参考资料：

[垂直居中](https://juejin.im/post/5a7a9a545188257a892998ef)
