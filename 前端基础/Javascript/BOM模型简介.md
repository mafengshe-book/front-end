# BOM

- BOM是Browser Object Model的缩写，简称浏览器对象模型
- BOM提供了独立于内容而与浏览器窗口进行交互的对象
- 由于BOM主要用于管理窗口与窗口之间的通讯，因此其核心对象是window
- BOM由一系列相关的对象构成，并且每个对象都提供了很多方法与属性

## BOM 能做什么

BOM提供了一些访问窗口对象的一些方法，我们可以用它来移动窗口位置，改变窗口大小，打开新窗口和关闭窗口，弹出对话框，进行导航以及获取客户的一些信息如：浏览器品牌版本，屏幕分辨率。但BOM最强大的功能是它提供了一个访问HTML页面的一入口——document对象，以使得我们可以通过这个入口来使用DOM的强大功能！！！

![0_1515065024900_upload-1f4f64ca-7054-4a4d-b4c5-d86a6aeed4ee](http://bbs.static.mafengshe.com/FpsoK2Xo_gnAuLO248esVGJ8G9_N?imageMogr2/quality/40) 

## window 对象

BOM 的核心是window对象，它表示浏览器的一个实例。在浏览器中，即是javascript访问浏览器窗口的一个接口，又是ECMAScript规定的Global对象，这就意味着在网页中定义的任意变量、函数、对象都是以window作为Global对象。

window对象是BOM的顶层(核心)对象，所有对象都是通过它延伸出来的，也可以称为window的子对象。由于window是顶层对象，因此调用它的子对象时可以不显示的指明window对象，例如下面两行代码是一样的：

```javascript
document.write("BOM");
window.document.write("BOM");
```

所有在全局作用域中声明的变量、函数、对象都会作为window的属性和方法

```javascript
var age = 24;

function printName(){
    console.log(age);
}

console.log(window.age);
window.printName();

```

### window.name

window.name属性用于设置当前浏览器窗口的名字。它有一个特点，就是浏览器刷新后，该属性保持不变。所以，可以把值存放在该属性内，然后跨页面、甚至跨域名使用。当然，这个值有可能被其他网站的页面改写。

```javascript
window.name = "Hello World!";
console.log(window.name);
```

各个浏览器对这个值的储存容量有所不同，但是一般来说，可以高达几MB。该属性只能保存字符串，且当浏览器窗口关闭后，所保存的值就会消失。因此局限性比较大，但是与iFrame窗口通信时，非常有用。

### 尺寸

我们可以通过 window 对象获取浏览器窗口的尺寸：

- window.innerHeight - 浏览器窗口的内部高度
- window.innerWidth - 浏览器窗口的内部宽度

这两个属性返回网页的CSS布局占据的浏览器窗口的高度和宽度，单位为像素。很显然，当用户放大网页的时候（比如将网页从100%的大小放大为200%），这两个属性会变小。

### 滚动条

#### 位置

我们也可以通过 window 获得滚动条的位置：

1.  window.scrollX：滚动条横向偏移
2.  window.scrollY：滚动条纵向偏移

这两个值随着滚动位置变化而变化

#### 滚动页面

我们也可以通过方法scrollTo或者scroll方法改变滚动条位置到指定坐标

```javascript
window.scrollTo(0, 300); // 滚动条移动到300px处
```

两个参数分别是水平、垂直方向偏移

scrollBy可以相对当前位置移动滚动条，而不是移动到绝对位置

```javascript
scrollBy(0, 100); // 滚动条下移100px
```

### 框架

window.frames 返回一个类似数组的对象，成员为页面内的所有框架，包括frame元素和iframe元素。需要注意的是，window.frames的每个成员对应的是框架内的窗口（即框架的window对象），获取每个框架的DOM树，需要使用window.frames[0].document。

```javascript
var iframe = window.getElementsByTagName("iframe")[0];
var iframe_title = iframe.contentWindow.title;
```

上面代码用于获取框架页面的标题。

iframe元素遵守同源政策，只有当父页面与框架页面来自同一个域名，两者之间才可以用脚本通信，否则只有使用window.postMessage方法。

在iframe框架内部，使用window.parent指向父页面。

### navigator

Window对象的navigator属性，指向一个包含浏览器相关信息的对象。

navigator.userAgent属性返回浏览器的`User-Agent`字符串，用来标示浏览器的种类。下面是Chrome浏览器的User-Agent。

```javascript
navigator.userAgent // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36"
```

通过userAgent属性识别浏览器，不是一个好办法。因为必须考虑所有的情况（不同的浏览器，不同的版本），非常麻烦，而且无法保证未来的适用性，更何况各种上网设备层出不穷，难以穷尽。所以，现在一般不再识别浏览器了，而是使用“功能识别”方法，即逐一测试当前浏览器是否支持要用到的JavaScript功能。

navigator对象中还包括一些其它属性，我们可以在 `console` 下使用如下指令查看

```javascript
navigator
```

### 屏幕

screen对象包含了显示设备的信息。

```javascript
// 显示设备的高度，单位为像素
screen.height
// 1920

// 显示设备的宽度，单位为像素
screen.width
// 1080

```

一般使用以上两个属性，了解设备的分辨率。上面代码显示，某设备的分辨率是1920x1080。除非调整显示器的分辨率，否则这两个值可以看作常量，不会发生变化。显示器的分辨率与浏览器设置无关，缩放网页并不会改变分辨率。

### 窗口管理

我们可以通过 window 对象 打开，关闭，移动，调整 窗口

- window.open() - 打开新窗口
- window.close() - 关闭当前窗口
- window.moveTo() - 移动当前窗口
- window.resizeTo() - 调整当前窗口的尺寸


这里给出 `window.open` 的参数列表和说明

```javascript
window.open(URL,name,features,replace)
```


| 参数 | 描述 |
| --- | --- |
| URL | 一个可选的字符串，声明了要在新窗口中显示的文档的 URL。如果省略了这个参数，或者它的值是空字符串，那么新窗口就不会显示任何文档。 |
| name | 一个可选的字符串，该字符串是一个由逗号分隔的特征列表，其中包括数字、字母和下划线，该字符声明了新窗口的名称。这个名称可以用作标记 `<a>` 和 `<form>` 的属性 target 的值。如果该参数指定了一个已经存在的窗口，那么 open() 方法就不再创建一个新窗口，而只是返回对指定窗口的引用。在这种情况下，features 将被忽略。 |
| features | 一个可选的字符串，声明了新窗口要显示的标准浏览器的特征。如果省略该参数，新窗口将具有所有标准特征。在窗口特征这个表格中，我们对该字符串的格式进行了详细的说明。 |
| replace | 一个可选的布尔值。规定了装载到窗口的 URL 是在窗口的浏览历史中创建一个新条目，还是替换浏览历史中的当前条目。支持下面的值：true: URL 替换浏览历史中的当前条目。false: URL 在浏览历史中创建新的条目。 |


### 弹窗

#### 警告框

警告框经常用于确保用户可以得到某些信息。

当警告框出现后，用户需要点击确定按钮才能继续进行操作。


```javascript
// 格式
alert(message);

// 实例
alert("Hello World");

```
#### 确认框

确认框用于使用户可以验证或者接受某些信息。

当确认框出现后，用户需要点击确定或者取消按钮才能继续进行操作。

如果用户点击确认，那么返回值为 true。如果用户点击取消，那么返回值为 false。


```javascript
// 格式
var result = confirm(message);

// 实例
var result = confirm("你最近好吗？");

```


#### 提示框

提示框经常用于提示用户在进入页面前输入某个值。

当提示框出现后，用户需要输入某个值，然后点击确认或取消按钮才能继续操纵。

如果用户点击确认，那么返回值为输入的值。如果用户点击取消，那么返回值为 null。

```javascript
// 格式
var result = prompt(text[, default]);

// 实例
var result = prompt('您的年龄？', 25)

```

上面代码会跳出一个对话框，文字提示为“您的年龄？”，要求用户在对话框中输入自己的年龄（默认显示25）。

### window.getComputedStyle

我们知道DOM元素有个style属性，里面就是元素的style值，使用这个方法是不是可以呢？

大部分情况下是不可以的，因为style中给出的是DOM节点上写的值，而不是计算出的值

听起来比较抽象，举个例子

```javascript
<div id="test" style="height:2px;">123</div>

<script>
    var div = document.getElementById('test');
    console.log(div.style.height);
    console.log(div.style);
</script>

```


我们去掉div的style属性，添加css样式

```css
div{
    height:100px;
    background:#333;
}

```

发现高度变成了`""`

这就是说style属性内的值非常机械，读取的就是元素的内联style属性的值，而不是我们计算出来的实际值，所以一般情况下没什么用处

getComputedStyle是一个可以获取当前元素所有最终使用的CSS属性值。返回的是一个CSS样式声明对象([object CSSStyleDeclaration])

一看这个函数的名字我们就知道问题解决了

```javascript
var style = window.getComputedStyle("元素", "伪类");

```

第二个参数没有伪类设置为null

```javascript
var div = document.getElementById('test');

console.log(window.window.getComputedStyle(div,null));

```

### Location

window.location 对象用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面。

- location.hostname 返回 web 主机的域名
- location.pathname 返回当前页面的路径和文件名
- location.port 返回 web 主机的端口 （80 或 443）
- location.protocol 返回所使用的 web 协议（http:// 或 https://）

我们也可以通过 location 设置当前页面的 URL

```javascript
window.location.assign("http://www.mafengshe.com")
```

### history

window.history 对象包含浏览器的历史。

为了保护用户隐私，对 JavaScript 访问该对象的方法做出了限制。

- history.back() - 与在浏览器点击后退按钮相同
- history.forward() - 与在浏览器中点击按钮向前相同



