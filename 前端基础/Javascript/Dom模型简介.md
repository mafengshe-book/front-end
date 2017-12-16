# DOM

当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。

HTML DOM 模型被构造为对象的树：

![](http://www.w3school.com.cn/i/ct_htmltree.gif)

通过可编程的对象模型，JavaScript 获得了足够的能力来创建动态的 HTML。

- JavaScript 能够改变页面中的所有 HTML 元素
- JavaScript 能够改变页面中的所有 HTML 属性
- JavaScript 能够改变页面中的所有 CSS 样式
- JavaScript 能够对页面中的所有事件做出反应


### document 对象

每个载入浏览器的HTML文档都会成为`document`对象。document对象包含了文档的基本信息，我们可以通过JavaScript对HTML页面中的所有元素进行访问、修改。

## document对象常用属性

document对象有很多属性来描述文档信息，介绍几个常用的

### doctype

在书写HTML文档的时候第一句一般都是`doctype`声明，可以通过document对象获取，没有则返回`null`

```
document.doctype; // <!DOCTYPE html>
document.doctype.name; // "html"

```

### head、body

```
document.head;
document.body;

```

通过这两个属性何以分别获取文档的`head`，`body`节点

### activeElement

activeElement属性返回当前文档中获得焦点的那个元素。

用户通常可以使用tab键移动焦点，使用空格键激活焦点，比如如果焦点在一个链接上，此时按一下空格键，就会跳转到该链接

### title、characterSet

1.  title属性返回当前文档的标题，该属性是可写的
2.  characterSet属性返回渲染当前文档的字符集

### cookie

cookie是存储在客户端的文本，后续在客户端存储章节会介绍到

### innerText

innerText是一个可写属性，返回元素内包含的文本内容，在多层次的时候会按照元素由浅到深的顺序拼接其内容

```html
<div>
    <p>
        123
        <span>456</span>
    </p>
</div>

```

外层div的innerText返回内容是 `123456`

### innerHTML、outerHTML

innerHTML属性作用和innerText类似，但是不是返回元素的文本内容，而是返回元素的HTML结构，在写入的时候也会自动构建DOM

```html
<div>
    <p>
        123
        <span>456</span>
    </p>
</div>

```

外层div的innerHTML返回内容是 `"<p>123<span>456</span></p>"`

outerHTML 返回内容还包括本身

## document对象常用方法

### open()、close()

document.open方法用于新建一个文档，供write方法写入内容。它实际上等于清除当前文档，重新写入内容

document.close方法用于关闭open方法所新建的文档。一旦关闭，write方法就无法写入内容了。

### write()

document.write方法用于向当前文档写入内容。只要当前文档还没有用close方法关闭，它所写入的内容就会追加在已有内容的后面。

```javascript
document.open();
document.write("hello");
document.write("world");
document.close();

```

1.  如果页面已经渲染完成再调用write方法，它会先调用open方法，擦除当前文档所有内容，然后再写入。

2.  如果在页面渲染过程中调用write方法，并不会调用open方法。

需要注意的是，虽然调用close方法之后，无法再用write方法写入内容，但这时当前页面的其他DOM节点还是会继续加载。

除了某些特殊情况，应该尽量避免使用document.write这个方法。

