# RequireJS

RequireJS 遵循 AMD 规范，用于解决命名冲突和文件依赖的问题。

[下载](http://www.requirejs.cn/docs/download.html)

## 使用

```
<script src="http://apps.bdimg.com/libs/require.js/2.1.9/require.min.js"></script>
<script>
    requirejs.config({
        base: ".",
        paths: {
            'easyTpl': '../lib/easyTpl'
        }
    });

    // 加载入口模块
    requirejs(['amd-cmd-main']);
</script>

```

## demo

#### index.html

```

<!DOCTYPE html>
<html>
    <head>
        <script data-main="app" src="lib/require.js"></script>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
</html>

```

#### app.js

```
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);

```

#### app/main.js

```
define(function (require) {

    var messages = require('./messages');

    var print = require('print');

    print(messages.getHello());
});

```

#### app/message.js

```
define(function () {
    return {
        getHello: function () {
            return 'Hello World';
        }
    };
});

```

#### lib/print.js

```
define(function () {
    return function print(msg) {
        console.log(msg);
    };
});

```

## 参考

1.  [RequireJS 中文文档](http://www.requirejs.cn/docs/download.html)