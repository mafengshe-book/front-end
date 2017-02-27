# z-index

HTML文档元素除了在水平（X轴）和垂直（Y轴）方向进行布局以外，还会在第三维度Z轴进行布局，在多个元素位于同一个位置的时候，用来决定层叠关系（谁在上面，谁在下面）。

### z-index属性

该属性仅适用于定位元素。即元素的`position`属性为除`static`以外的值。

`z-index`属性赋值情况有以下三种：


|值|描述|
|:---:|:---:|
| `auto` | 默认, 会处理成`z-index=0`, 堆叠顺序与父元素相等。 |
| `<integer>` | 设置元素的堆叠顺序|
| `inherit` | 规定应该从父元素继承 z-index 属性的值。|

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