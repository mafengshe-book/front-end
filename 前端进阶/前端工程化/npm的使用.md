# npm安装应用

## 课程目的

*   了解npm作用
*   会使用npm安装node包

## 课程内容

### npm是什么

NPM（node package manager），通常称为node包管理器。顾名思义，它的主要功能就是管理node包，包括：安装、卸载、更新、查看、搜索、发布等。

npm的背后，是基于couchdb的一个数据库，详细记录了每个包的信息，包括作者、版本、依赖、授权信息等。它的一个很重要的作用就是：将开发者从繁琐的包管理工作（版本、依赖等）中解放出来，更加专注于功能的开发。

npm官网：[https://npmjs.org/](https://npmjs.org/)

npm官方文档：[https://npmjs.org/doc/README.html](https://npmjs.org/doc/README.html)

### npm的安装

安装node后，npm会自动被安装。

node的下载安装地址：[https://nodejs.org/download/](https://nodejs.org/download/)

安装完成后，在终端输入：

```
node -v

```

查看node版本，输入`npm -v`查看npm版本。

npm版本应该大于2.1.8，输入`sudo npm install npm -g`可更新npm的版本

### npm包管理

node包的安装分两种：本地安装、全局安装。两者的区别如下，后面会通过简单例子说明

本地安装：package会被下载到当前所在目录，也只能在当前目录下使用。

全局安装：package会被下载到到特定的系统目录下，安装的package能够在所有目录下使用。

##### 本地安装`npm install pkg`

运行如下命令，就会在当前目录下安装grunt-cli（grunt命令行工具）

```
npm install grunt-cli

```

安装结束后，当前目录下回多出一个node_modules目录，grunt-cli就安装在里面。同时注意控制台输出的信息：

<pre>grunt-cli@0.1.9 node_modules/grunt-cli
├── resolve@0.3.1
├── nopt@1.0.10 (abbrev@1.0.4)
└── findup-sync@0.1.2 (lodash@1.0.1, glob@3.1.21)
</pre>

grunt-cli@0.1.9：当前安装的package为grunt-cli，版本为0.19

node_modules/grunt-cli：安装目录

resolve@0.3.1：依赖的包有resolve、nopt、findup-sync，它们各自的版本、依赖在后面的括号里列出来

如果报Error: EACCES, open '/Users/xxx/xxx.lock错误。先执行：sudo chown -R $(whoami) $HOME/.npm;

如果使用npm安装插件太慢（被墙），可执行 npm install -g cnpm --registry=[https://registry.npm.taobao.org,先安装cnpm](https://registry.npm.taobao.org,先安装cnpm), 之后再安装插件时用cnpm安装cnpm install gulp

##### 全局安装`npm install -g pkg`

进行了本地安装，grunt命令只能在对应安装目录下使用。如果为了使用grunt命令，每到一个目录下都得重新安装一次，采用全局安装只需安装一次，在任意目录都使用了。

```
npm install -g grunt-cli

```

或者

```
sudo npm install -g grunt-cli

```

于是，在所有目录下都可以无压力使用grunt命令了。这个时候，你会注意到控制台输入的信息有点不同。主要的区别在于安装目录，现在变成了/usr/local/lib/node_modules/grunt-cli，/usr/local/lib/node_modules/也就是之前所说的全局安装目录啦。

grunt-cli@0.1.9 /usr/local/lib/node_modules/grunt-cli ├── resolve@0.3.1 ├── nopt@1.0.10 (abbrev@1.0.4) └── findup-sync@0.1.2 (lodash@1.0.1, glob@3.1.21)

##### 卸载包`npm uninstall pkg`

```
npm unistall grunt-cli

```

卸载安装的包