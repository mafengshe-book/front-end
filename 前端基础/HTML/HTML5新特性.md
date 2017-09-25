
# HTML5新特性

## HTML5 中的一些有趣的新特性：

* 用于绘画的 canvas 元素
* 用于媒介回放的 video 和 audio 元素
* 对本地离线存储的更好的支持
* 新的特殊内容元素，比如 article、footer、header、nav、section
* 新的表单控件，比如 calendar、date、time、email、url、search

## HTML5新的结构元素

* article元素 - article元素代表文档、页面或应用程序中独立的、完整的、可以独自被外部引用的内容，与上下文不相关的独立内容
* section元素 - section元素表示页面中的一个内容区块，比如章节、页眉、页脚或页面中的其他部分 - 不要为没有标题的内容区块使用section元素
* nav元素 - 表示页面中导航链接的部分，例如：传统导航条，侧边栏导航，页内导航，翻页等
* aside元素 - aside元素表示article元素的内容之外的、与article元素的内容相关的辅助信息，它可以包含与当前页面或主要内容相关的引用、侧边栏、广告、导航条，以及其他类似的有别于主要内容的部分
* header元素 - 表示页面中一个内容区块或整个页面的标题
* hgroup元素 - 将标题及其子标题进行分组的元素。hgroup元素通常会将h1-h6元素进行分组，譬如一个内容区块的标题及其子标题算一组。
  ```html
  <hgroup>
    <h1>文章主标题</h1>
    <h2>文章子标题</h2>
  </hgroup>
  ```
* footer元素 - 表示整个页面或页面中一个内容区块的脚注。一般来说，它会包含创作者的姓名、创作日期以及创作者联系信息
* figure元素 - 表示一段独立的流内容，一般表示文档主体流内容中的一个独立单元。使用figcaption元素为figure元素组添加标题

## html5对于表单的增强

input标签的增强,新增type属性类型

* date - 选取日、月、年
* month - 选取月、年
* week - 选取周和年
* time - 选取时间（小时和分钟）
* datetime - 选取时间、日、月、年（UTC 时间）
* datetime-local - 选取时间、日、月、年（本地时间）
* range－数字范围选择
* number－填写数字
* url-url地址
* email-邮件
* color-颜色选取
* search-搜索
* input标签新增属性

更多参考[这里](https://sallypanda.gitbooks.io/html5/content/html5/lesson2.html)