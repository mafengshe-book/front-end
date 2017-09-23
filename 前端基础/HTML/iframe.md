# iframe

iframe 也是html的一个标签，不过不是往页面上添加一个元素那么简单，iframe 会创建包含另外一个文档的内联框架

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <p>下面放置一个iframe</p>

    <iframe src="./frames/inner.html" width="500" height="300" frameborder="1"></iframe>
</body>
</html>

```
<body>
    <p>下面放置一个iframe</p>

    <iframe src="./frames/inner.html" width="500" height="300" frameborder="1"></iframe>
</body>


## 属性

* frameborder：可用值为1和0，规定是否显示框架周围的边框
* width：frame的宽度
* height：frame的高度
* src：引入的资源（页面、图片等）url

## 父子关系

在父窗体中，iframe是document对象的一个子对象，可以直接在脚本中访问子窗体中的对象。

在子窗体内`parent`对象就代表父窗体，要在子窗体中访问父窗体中的对象，无一例外都通过parent对象来进行。

iframe的高级用法要涉及 JS 用法，这里我们只需有个基本的概念即可。

## 结合 `<a>` 标签使用

iframe 可以通过配合 `<a>` 标签的 target 属性实现动态切换 iframe 打开的网页
```html
<html>
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>

<body>
  <div>
    <a href="http://www.sina.com.cn" target="iframe1">新浪</a>
    <a href="https://www.mafengshe.com" target="iframe1">码蜂社</a>
  </div>
  <iframe name="iframe1" src="http://www.baidu.com" ></iframe>
</body>
</html>
```

## 常见应用

- 插入广告
- 实现简单的`局部刷新`

```html
<html>

<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style>
    body{
      margin: 0
    }
    *{
      box-sizing: border-box
    }
    .left {
      float: left;
      width: 100px;
    }
    .left a{
      display: block
    }
    .right {
      float: left;
      width: calc(100% - 102px);
      height: 100vh
    }
  </style>
</head>

<body>
  <div class="left">
    <a href="http://www.baidu.com" target="iframe1">百度</a>
    <a href="http://www.sina.com.cn" target="iframe1">新浪</a>
    <a href="https://www.mafengshe.com" target="iframe1">码蜂社</a>
  </div>
  <iframe name="iframe1" src="http://www.baidu.com" class="right"></iframe>
</body>

</html>
```

## frameset
frameset 也可以实现嵌入其他网页。但是由于布局不够灵活，**很少**使用

- frame不能脱离frameSet单独使用。
- frame不能放在body中,否则不能正常显示。

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<frameset rows="50%,*">
		<frame name="frame1" src="./frames/inner.html"/> 
		<frame name="frame2" src="./frames/inner.html"/> 
</frameset>

```

frameset的属性

- cols 把整个画面竖向分割成几个画面
- rows 把整个画面横向分割成几个画面
- frameborder 表示设定这个框架的边框值。它的值只有两个0或者1。0表示不显示边框，1表示显示边框。
- border 表示边框的宽度
- bordercolor 设定框架边框的颜色

## frame ？iframe ！

frame 和 iframe 看似只有一个字母只差，实则差别很大：

1. frame不能脱离frameSet单独使用，iframe可以。
2. frame不能放在body中,否则不能正常显示。
3. frame的高度只能通过frameSet控制；iframe可以自己控制，不能通过frameSet控制。

	```
	<!--<body>-->
	<frameset rows="50%,*">
	   <frame   name="frame1"   src="test1.htm"/> 
	   <frame   name="frame2"   src="test2.htm"/> 
	</frameset>
	<!--</body>-->
	 
	<body>
	<frameset>
	   <iframe height="30%"  name="frame1"   src="test1.htm"/> 
	   <iframe height="100"  name="frame2"   src="test2.htm"/> 
	</frameset>
	</body>
	```

## 浏览器兼容性

* HTML 4.1 Strict DTD 和 XHTML 1.0 Strict DTD 中，不支持 iframe 元素。
* HTML5 不支持 `<frame>` 标签，HTML 4.01 支持 `<frame>` 标签。

## 参考链接

[Iframe 标签](http://www.w3schools.com/html/html_iframe.asp)

[w3c HTML/Elements/iframe](https://www.w3.org/wiki/HTML/Elements/iframe)

[w3c 中文参考](http://www.w3school.com.cn/tags/tag_iframe.asp)

[frame与iframe的区别？](http://www.cnblogs.com/jiechn/p/4018722.html)


