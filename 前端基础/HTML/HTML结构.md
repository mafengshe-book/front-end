# HTML结构

以下为一个基本的HTML文档结构：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
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

__标签__ ， __元素__

## <!DOCTYPE>声明

<!DOCTYPE> 声明必须是 HTML 文档的第一行，位于

标签之前。
<!DOCTYPE> 声明不是 HTML 标签；它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令。在 HTML 4.01 中，<!DOCTYPE> 声明引用 DTD，因为 HTML 4.01 基于 SGML（一种很强大但很复杂的标记语言，HTML、XML 就是从中衍生出来的）。DTD 规定了标记语言的规则，这样浏览器才能正确地呈现内容,而HTML5 不基于 SGML，所以不需要引用 DTD。

### 常用的 DOCTYPE 声明

   HTML 5

   ```
   <!DOCTYPE html>
   ```

   HTML 4.01 Strict

   该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。

   ```
   <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
   HTML 4.01 Transitional
   ```

   该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。

   ```
   <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">
   ```

   HTML 4.01 Frameset

   该 DTD 等同于 HTML 4.01 Transitional，但允许框架集内容。

   ```
   <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN"
   "http://www.w3.org/TR/html4/frameset.dtd">
   ```

   XHTML 1.0 Strict

   该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。必须以格式正确的 XML 来编写标记。

   ```
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
   ```

   XHTML 1.0 Transitional

   该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。必须以格式正确的 XML 来编写标记。

   ```
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "
   http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   XHTML 1.0 Frameset

   该 DTD 等同于 XHTML 1.0 Transitional，但允许框架集内容。

   ```
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
   ```

   XHTML 1.1

   该 DTD 等同于 XHTML 1.0 Strict，但允许添加模型（例如提供对东亚语系的 ruby 支持）。

   ```
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
   ```
   参考 http://www.w3school.com.cn/tags/tag_doctype.asp


