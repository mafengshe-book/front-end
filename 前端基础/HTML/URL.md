# URL 与其编码

## 什么是 URL

URL 也被称为网址。URL 的英文全称是 Uniform Resource Locator，中文也译为“统一资源定位符”。

URL 可以由单词组成，比如 “mafengshe.com”，或者是IP地址：192.168.1.1。大多数人在网上冲浪时，会键入网址的域名，因为名称比数字容易记忆。

他遵守以下的语法规则：

```
scheme://host:port/path/filename
```

其中

- scheme - 定义因特网服务的类型。最常见的类型是 http
- host - 定义域主机名
- port - 定义主机上的端口号（http 的默认端口号是 80）
- path - 定义服务器上的路径（如果省略，则文档必须位于网站的根目录中）。
- filename - 定义文档/资源的名称

### 常见 URL Schemes
|Scheme| 协议名| 含义|
|:---|:-----|:----|
|http|	超文本传输协议|	以 http:// 开头的普通网页。不加密。|
|https|	安全超文本传输协议|	安全网页。加密所有信息交换。|
|ftp|	文件传输协议|	用于将文件下载或上传至网站。|
|file	| | 	您计算机上的文件。|

## URL 字符编码

> URL 编码会将字符转换为可通过因特网传输的格式。

- URL 只能使用 ASCII 字符集来通过因特网进行发送。
- 由于 URL 常常会包含 ASCII 集合之外的字符，URL 必须转换为有效的 ASCII 格式。
- URL 编码使用 "%" 其后跟随两位的十六进制数来替换非 ASCII 字符。
- URL 不能包含空格。URL 编码通常使用 + 来替换空格。

详细的 URL 编码 可以参考[这里](http://www.w3school.com.cn/tags/html_ref_urlencode.html)