# HTML结构

以下为一个基本的HTML文档结构：

```html
<!DOCTYPE html>
<html>
<head>
   <meta charset="utf-8">
   <title>码蜂社前端</title>
</head>
<body>
   <h1>我的第一个标题</h1>
   <p>我的第一个段落。</p>
</body>
</html>
```

* `<!DOCTYPE html>` 声明为 HTML5 文档
* `<html>` 元素是 HTML 页面的根元素
* `<head>` 元素包含了文档的元（meta）数据，不会在浏览器窗口中显示，定义文档的标题、编码格式、引入样式文件和脚本以及其他元数据。
* `<body>` 元素包含了可见的页面内容，body里的元素在浏览器窗口中


## <!DOCTYPE>声明

`<!DOCTYPE>` 声明必须是 HTML 文档的**第一行**，位于 `<html>` 标签之前。
`<!DOCTYPE>` 并不属于 HTML 标签，它只是标示当前 HTML 文档的版本信息 


HTML 5中的写法（上面的例子就是 html5 中的写法）

```html
<!DOCTYPE html>
```

在 HTML5 之前还有 N 种写法，大家可以点击[这里](http://www.w3school.com.cn/tags/tag_doctype.asp)查看；这些大家看一遍就可以忘记了，以后写 HTML5 中的写法就行了

## `<html>`

此标签为 HTML 文档的根元素，只能有**一个**。

## `<head>`

`<html>`的直接子元素，`<head>`中可以设置文档的元(meta)数据，不会显示在窗口中，可以在其中设置如 浏览器标题 等属性

可以放置如下子元素：

- `<title>` 标签定义了不同文档的标题,在 HTML/XHTML 文档中是必须的,浏览器工具栏的标题。
- `<base>` 标签描述了基本的链接地址/链接目标，该标签作为HTML文档中所有的链接标签的默认链接。
  ```html
  <base href="http://www.mafengshe.com/a/" target="_blank">
  ```
- `<link>` 标签定义了文档与外部资源之间的关系,通常用于链接到样式表
  ```html
  <link rel="stylesheet" type="text/css" href="style.css">
  ```
- `<style>` 标签定义了HTML文档的样式文件引用地址,指定样式文件来渲染HTML文档
  ```html
  <style type="text/css">
    body {background-color:yellow}
    p {color:blue}
  </style>
  ```
- `<meta>` 标签提供了元数据.元数据也不显示在页面上，但会被浏览器解析。META元素通常用于指定网页的描述，关键词，文件的最后修改时间，作者，和其他元数据。元数据可以使用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他Web服务。一般放置于 `<head>`区域
  - 定义文档的字符集
    ```html
    <meta charset="utf-8">
    ```
  - 为网页定义描述内容
    ```html
    <meta name="keywords" content="HTML, CSS, JavaScript">
    ```
  - 定义网页作者
    ```html
    <meta name="author" content="mafengshe">
    ```
  - 定时刷新当前页面（30秒）
    ```html
    <meta http-equiv="refresh" content="30">
    ```
  - `<script>`标签用于加载脚本文件，如： JavaScript。在标签内部书写脚本或引入脚本文件位置
    ```html
    <script type="text/javascript">
      document.write("Hello World!")
    </script>
    ```

    ```html
    <script type="text/javascript" src="scripts.js"></script>
    ```

## `<body>`

`<html>`的直接子元素，`<body>`中的元素都会显示在浏览器窗口中。

详细元素将在下节讲解


HTML 所有元素大家可以参考[这里](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)