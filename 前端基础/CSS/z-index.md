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

堆叠顺序是当前元素位于z轴上的值。数值越大表明元素的堆叠顺序越高，越靠近屏幕。如果未指定 z-index 的属性，元素的堆叠顺序基于它所在的文档树。默认情况下，文档中后来声明的元素具有更高的堆叠顺序。

计算堆叠顺序
除了指定的 z-index，元素的堆叠顺序是由大量的因素控制的。元素按照下面表格顺序进行堆叠。

|位置	| 描述	|  CSS |
| 1 (bottom) | 元素构成堆叠上下文 | z-index: < integer > |
| 2	负堆叠顺序的子元素 | `z-index: < negative integer > ` | `position: relative | absolute | fixed`|
| 3 文档流中，非内联，非定位子元素	| display: /* not inline */ position: static
4	非定位浮动子元素	float: left | right position: static
5	内联流，非定位子元素	display: /* inline */ position: static
6	堆叠顺序为0的子元素	z-index: auto | 0 position: relative | absolute | fixed
7(top)	堆叠顺序为正的子元素	z-index: < position intege > position: relative | absolute | fixed

### 一个例子