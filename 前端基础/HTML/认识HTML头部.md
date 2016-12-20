# HTML 头部——head

 `<head>` 元素包含了文档的元（meta）数据，不会在浏览器窗口中显示，定义文档的标题、编码格式、引入样式文件和脚本以及其他元数据。

## HTML `<head>` 元素

`<head>` 元素包含了所有的头部标签元素。在 `<head>`元素中你可以插入脚本（scripts）, 样式文件（CSS），及各种meta信息。
可以添加在头部区域的元素标签为: `<title>`, `<style>`, `<meta>`, `<link>`, `<script>`, `<noscript>`, and `<base>`.

## HTML `<title>` 元素

`<title>` 标签定义了不同文档的标题,在 HTML/XHTML 文档中是必须的,浏览器工具栏的标题。

## HTML `<base>` 元素
`<base>` 标签描述了基本的链接地址/链接目标，该标签作为HTML文档中所有的链接标签的默认链接:
```
`<head>`
`<base href="http://www.runoob.com/images/" target="_blank">`
`</head>`

```
## HTML `<link>` 元素
`<link>` 标签定义了文档与外部资源之间的关系,通常用于链接到样式表:

```
`<head>`
`<link rel="stylesheet" type="text/css" href="mystyle.css">`
`</head>`
```

## HTML `<style>` 元素
`<style>` 标签定义了HTML文档的样式文件引用地址,指定样式文件来渲染HTML文档:

```
`<head>`
`<style type="text/css">`
body {background-color:yellow}
p {color:blue}
`</style>`
`</head>`
```

## HTML `<meta>` 元素
meta标签描述了一些基本的元数据。
`<meta>` 标签提供了元数据.元数据也不显示在页面上，但会被浏览器解析。META元素通常用于指定网页的描述，关键词，文件的最后修改时间，作者，和其他元数据。元数据可以使用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他Web服务。一般放置于 `<head>`区域

实例

定义文档的字符集：

```
`<meta charset="UTF-8">`
```
为搜索引擎定义关键词:

```
`<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">`
```

为网页定义描述内容:

```
`<meta name="description" content="Free Web tutorials on HTML and CSS">`
```

定义网页作者:

```
`<meta name="author" content="Hege Refsnes">`
```

每30秒中刷新当前页面:

```
`<meta http-equiv="refresh" content="30">`
```

## HTML `<script>` 元素

`<script>`标签用于加载脚本文件，如： JavaScript。在标签内部书写脚本或引入脚本文件位置。如下：

```
`<script type="text/javascript">`
document.write("Hello World!")
`</script>`
```

```
`<script type="text/javascript" src="myscripts.js">`</script>`
```

## 总结


|标签	|描述|
|:------|:----|
|`<head>`	|规定文档相关的通用信息（元数据），包括文档标题、样式或脚本的链接或定义。|
|`<title>`|定义文档的标题，显示在浏览器的标题栏或标签页上|
|`<base>`	|指定文档里所有相对URL地址的基础URL。一份文档最多一个`<base>`元素|
|`<link>`	|定义了一个文档和外部资源之间的关系，常用来链接css文件|
|`<meta>`	|定义了HTML文档中的元数据，表达任何其他 HTML 元相关元素 (`<base>`, `<link>`, `<script>`, `<style>` 或者 `<title>`) 等无法表达的信息|
|`<script>`|定义了客户端的脚本文件|
|`<style>`|包含了文档的样式化信息或者文档的一部分|

参考链接 https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element