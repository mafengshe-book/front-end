# iframe

iframe 也是html的一个标签，不过不是往页面上添加一个元素那么简单，iframe 会创建包含另外一个文档的内联框架（即行内框架）

```
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

*   frameborder：可用值为1和0，规定是否显示框架周围的边框
*   width：frame的宽度
*   height：frame的高度
*   src：引入的资源（页面、图片等）url

## 父子关系

在父窗体中，Iframe是document对象的一个子对象，可以直接在脚本中访问子窗体中的对象。

在子窗体内`parent`对象就代表父窗体，要在子窗体中访问父窗体中的对象，无一例外都通过parent对象来进行。

iframe的高级用法要涉及 JS 用法，这里我们只需有个基本的概念即可。

## iframe & frame

区别：

1. frame不能脱离frameSet单独使用，iframe可以。
2. frame不能放在body中,否则不能正常显示。
3. 嵌套在frameSet中的iframe必需放在body中,不嵌套在frameSet中的iframe可以随意使用。
4. frame的高度只能通过frameSet控制；iframe可以自己控制，不能通过frameSet控制。

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
5. 如果在同一个页面使用了两个以上的iframe，在IE中可以正常显示，在firefox和chrome中只能显示出第一个；使用两个以上的frame在IE和firefox中均可正常。

## 浏览器兼容性

* HTML 4.1 Strict DTD 和 XHTML 1.0 Strict DTD 中，不支持 iframe 元素。
* HTML5 不支持 `<frame>` 标签，HTML 4.01 支持 `<frame>` 标签。

## 参考链接

[Iframe 标签](http://www.w3schools.com/html/html_iframe.asp)

[w3c HTML/Elements/iframe](https://www.w3.org/wiki/HTML/Elements/iframe)

[w3c 中文参考](http://www.w3school.com.cn/tags/tag_iframe.asp)

[frame与iframe的区别？](http://www.cnblogs.com/jiechn/p/4018722.html)


