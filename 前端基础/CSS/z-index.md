# z-index

HTML文档元素除了在水平（X轴）和垂直（Y轴）方向进行布局以外，还会在第三维度Z轴进行布局，在多个元素位于同一个位置的时候，用来决定层叠关系（谁在上面，谁在下面）。

### z-index属性

该属性仅适用于定位元素。即元素的`position`属性为除`static`以外的值。

`z-index`属性赋值情况有以下三种：


|值|描述|
|:---:|:---:|
| `auto` | 默认, 会处理成`z-index=0`, 堆叠顺序与父元素相等。 |
| `<integer>` | 设置元素的堆叠顺序|

简单来讲，元素的层叠顺序可以根据`z-index`的值进行判断，当`z-index`的值越大则越在上层，越小越在下层。

但仍旧有很多复杂情况无法解决：

* 设置了z-index值得定位元素与常规文档流中的元素相互重叠，谁会被置于上方？
* 定位元素与浮动元素相互重叠，谁会被置于上方？
* 定位元素被嵌套在其他定位元素中时会发生什么？

要想回答这些问题，需要理解z-index如何工作，以及__层叠上下文__、__层叠层__、__层叠次序__。

### 层叠上下文和层叠层

[层叠上下文](stacking-contexts.png)

图片引用自![关于z-index你不知道的事](https://webdesign.tutsplus.com/zh-hans/articles/what-you-may-not-know-about-the-z-index-property--webdesign-16892)。

借助上图理解层叠上下文和层叠层，可以将整个HTML文档看作一张大桌子，大桌子上有两块玻璃，玻璃上分别有两本书。 大桌子是两块玻璃和书的层叠上下文，两块玻璃和书是大桌子上的两个层叠层。同理，玻璃是书本的层叠上下文，书本是玻璃的层叠层。

对应到我们实际的HTML文档中，每个HTML文档都有一个默认的层叠上下文，html标签中的所有元素都是在这个默认层叠上下文的一个层叠层。在某些条件下，元素会生成一个新的层叠上下文。这些条件有：

* 给相对定位、绝对定位或弹性盒子里的元素设置`z-index`的值但不为`auto`。
* `opacity`值小于1。
* 固定定位元素。
* `transform`值不为`none`。
* `mix-blend-mode`值不为`normal`。
* `filter`值不为`none`。
* `perspective`值不为`none`。
* `isolation`值设为`isolate`。
* `will-change`值 __待补充__。
*  设置`-webkit-overflow-scrolling`设置为`touch`。

一个层叠上下文的子元素如果满足以上规则中的一条，则会生成新的层叠上下文，一个层叠上下文及其所包含的层叠层在其上层层叠上下文中将会被看作一个整体。

要点：

* 设置一个元素的定位方式和`z-index`可以生成一个新的层叠上下文。
* 层叠上下文可以嵌套。
* 每个层叠上下文是和它的兄弟层叠上下文完全独立的
* 每个层叠上下文是自包含的。

### 堆叠顺序

#### 单个层叠上下文中

在一个层叠上下文中一共可以有7种层叠等级，但__处于同一层级的元素，按照HTML元素的书写顺序排列__, 列举如下：

1. __背景和边框__ —— 形成层叠上下文的元素的背景和边框。层叠上下文中的最低等级。
2. __负z-index值__ —— 层叠上下文内有着负z-index值的子元素。
3. __块级盒__ —— 文档流中非行内非定位子元素。
4. __浮动盒__ —— 非定位浮动元素。
5. __行内盒__ —— 文档流中行内级别非定位子元素。
6. __z-index: 0/auto__ —— 定位元素。 这些元素形成了新的层叠上下文。
7. __正z-index值__ —— 定位元素。 层叠上下文中的最高等级。

[](https://cdn.tutsplus.com/webdesign/uploads/2013/11/stacking-order1.png)

（图片来自网络，侵删）

例子

注意这里讲的顺序是指的同一个层叠上下文中，层叠上下文之间是可以嵌套的，那多个层叠上下文之间是如何排序的？

#### 多个层叠上下文

* 多个层叠上下文可以看做他们共同所在的层叠上下文中的两个层叠层，按照单个层叠上下文内部的层叠顺序层叠；
* 每个层叠上下文与其包含的子层叠层作为一个整体与其他层叠层进行排布。

通过一个例子来理解这两点：

```html
<div class="one">
  <div class="two"></div>
  <div class="three"></div>
</div>
<div class="four"></div>
```

```css
div {
  width: 200px;
  height: 200px;
  padding: 20px;
}
 
.one, .two, .three, .four {
  position: absolute;
}
  
.one {
  background: #f00;
  outline: 5px solid #000;
  top: 100px;
  left: 200px;
  z-index: 10;
}
  
.two {
  background: #0f0;
  outline: 5px solid #000;
  top: 50px;
  left: 75px;
  z-index: 100;
}
 
.three {
  background: #0ff;
  outline: 5px solid #000;
  top: 125px;
  left: 25px;
  z-index: 150;
}
 
.four {
  background: #00f;
  outline: 5px solid #ff0;
  top: 200px;
  left: 350px;
  z-index: 50;
}
```
例子：

[](./images/stacking1.png)

由于`div.two`被包含在`div.one`中，它的`z-index`值也是相对于`div.one`的层叠上下文来说的。 事实上，我们真正得到的是如下结果：
```
.one — z-index = 10
.two — z-index = 10.100
.three — z-index = 10.150
.four — z-index = 50
```

我们所做的其实是把`div.one`和它所包含的一切放在了`div.four`之下。 不管我们给`div.one`中的元素设置了什么`z-index`值，他们永远都会显示在`div.four`的下面。

参考链接：

![没人告诉你关于z-index的一些事](https://www.w3cplus.com/css/what-no-one-told-you-about-z-index.html)
![关于z-index 那些你不知道的事](https://webdesign.tutsplus.com/zh-hans/articles/what-you-may-not-know-about-the-z-index-property--webdesign-16892)