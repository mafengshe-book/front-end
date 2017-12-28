# DOM 实战

## 表单验证

```javascript
<!-- HTML结构 -->
<form action="#" target="_blank">
    <p id="test-error" style="color:red"></p>
    <p>
        用户名: <input type="text" id="username" name="username">
    </p>
    <p>
        口令: <input type="password" id="password" name="password">
    </p>
    <p>
        重复口令: <input type="password" id="password-2">
    </p>
    <p>
        <button type="submit">提交</button> <button type="reset">重置</button>
    </p>
</form>
```

利用JavaScript检查用户注册信息是否正确，在以下情况不满足时报错并阻止提交表单：

- 用户名必须是3-10位英文字母或数字；

- 口令必须是6-20位；

- 两次输入口令必须一致。

## 翻页效果

效果如[码蜂社作业管理系统](https://work.mafengshe.com/?class=1)，前端实现根据用户点击实现翻页。

基本原理：前端根据数据，动态更改列表的DOM结构。