# JavaScript 简介

> JavaScript 与 Java 是两种完全不同的语言，无论在概念上还是设计上。Java（由 Sun 发明）是更复杂的编程语言。
>
> ECMA-262 是 JavaScript 标准的官方名称。
> 
> JavaScript 由 Brendan Eich 发明。它于 1995 年出现在 Netscape 中（该浏览器已停止更新），并于 1997 年被 ECMA（一个标准协会）采纳。

> JavaScript 是互联网上最流行的脚本语言，这门语言可用于 HTML 和 web，更可广泛用于服务器、PC、笔记本电脑、平板电脑和智能手机等设备。

## JavaScript 是脚本语言

- JavaScript 是解释执行的，不需要预先编译。
- JavaScript 是一种轻量级的编程语言。
- JavaScript 是可插入 HTML 页面的编程代码。
- JavaScript 插入 HTML 页面后，可由所有的现代浏览器执行。

## 用法

在 HTML 页面中插入 JavaScript，需要使用 `<script>` 标签。
`<script>` 和 `</script>` 会告诉 JavaScript 在何处开始和结束。
`<script>` 和 `</script>` 之间的代码行包含了 JavaScript:

```html
<script>
alert("我的第一个 JavaScript");
</script>
```

上面例子中的 JavaScript 语句，会在页面加载时执行。
通常，我们需要在某个事件发生时执行代码，比如当用户点击按钮时。
如果我们把 JavaScript 代码放入函数中，就可以在事件发生时调用该函数。
后面的章节会学到更多有关 JavaScript 函数和事件的知识。

## JavaScript 可以干什么？

### 直接写入 HTML 输出流

我们可以在 JS 中直接输出文档

```javascript
document.write("<h1>这是一个标题</h1>");
document.write("<p>这是一个段落。</p>");
```

> 试一试在文档已经存在的情况下使用 `document.write()` 输出文档会怎么样

### 响应事件

我们可以在 JS 中响应元素的事件

```html
<button type="button" onclick="alert('hello')">点我</button>
```

### 改变页面内容

我们可以在 JS 中获取页面元素，然后改变元素。

```javascript
x = document.getElementById("demo")  //查找元素
x.innerHTML = "Hello JavaScript";    //改变内容
```

### 表单验证

通过 JS 我们可以实现验证用户的输入的表单是否合法

### 用户交互

通过使用 JS，我们可以自定义用户交互的逻辑（流程），实现弹窗/跳转等功能

## 历史版本

JavaScript 已经由 ECMA（欧洲电脑制造商协会）通过 ECMAScript 实现语言的标准化。

|年份	 |名称	| 描述|
|:-----|:----|:----|
|1997	|ECMAScript 1	| 第一个版本|
|1998	|ECMAScript 2	|版本变更|
|1999	|ECMAScript 3	|添加正则表达式 添加 try/catch|
| |ECMAScript 4	|没有发布|
|2009	|ECMAScript 5 |	添加 "strict mode"，严格模式 添加 JSON 支持|
|2011	|ECMAScript 5.1 |版本变更|
|2015 |ECMAScript 6	|添加类和模块|
|2016	|ECMAScript 7	|增加指数运算符 (**) 增加 Array.prototype.includes|