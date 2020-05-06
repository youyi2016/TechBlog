## 项目创建
[Vuepress快速上手](https://vuepress.vuejs.org/zh/guide/getting-started.html#%E7%8E%B0%E6%9C%89%E9%A1%B9%E7%9B%AE)
* 创建项目目录
mkdir vuepress-starter && cd vuepress-starter

* 将 VuePress 作为一个本地依赖安装
yarn add -D vuepress # 或者：npm install -D vuepress

*  新建一个 docs 文件夹
mkdir docs

* 新建一个 markdown 文件

```
echo '# Hello VuePress!' > docs/README.md
```

* package.json里加一些脚本

```
	{
		"scripts": {
			"docs:dev": "vuepress dev docs",
			"docs:build": "vuepress build docs"
		}
	}
```	

* 写好后将markdown文件转化成html文件

```
yarn docs:build # 或者：npm run docs:build
```

* 本地运行看效果

```
yarn docs:dev # 或者：npm run docs:dev
```

## 网站结构配置
更多可以看：[基本配置](https://vuepress.vuejs.org/zh/config/#palette-styl)

*  创建config.js:
 
 docs/.vuepress/config.js

* config.js文件中配置首页页面nav、首页内容、子页面side栏等的内容

config.js：
```
//用于网站结构配置
const nav = require('./nav');
const sidebar = require('./sideBar')
let base = '/TechBlog/'
module.exports = {
	title: 'Cecilia You',
	description: '自由、利他、体验，寻找使命。',
	base: base,
	themeConfig: {
		nav,
		sidebar
	}
}
```
 路径说明：

|   文件的相对路径    |  页面路由地址   |
|--------------------|----------------|
| `/README.md`       | `/`            |
| `/guide/README.md` | `/guide/`      |
| `/config.md`       | `/config.html` |

nav.js

```
module.exports = [{
		text: 'CS内功',
		items: [{ //子选项
				text: '网络',
				link: '/网络协议/' //对应文件的路径
			},
			{
				text: '算法',
				link: '/csbase/'
			},
			{
				text: '设计模式',
				link: '/设计模式/'
			},
		]
	}]
```

sidebar.js

```
module.exports = {
	'/FEProblem/CSS/': ['', 'css居中布局'],
	// '/FEProblem/移动端/': getGuideSidebar('CSS', 'Vue', 'HTML'),
	'/FEProblem/VUE/': ['', '按返回跳转到指定页面'] //内容对应的都是文件名，文件内容中的# 后面的标题会默认作为侧边栏的标题
}
```
## 网站首页内容配置

docs/README.md

```
---
home: true
heroImage: /avatar-youyi.jpg
actionText: 快速上手 →
actionLink: /前端工程/Vuepress快速构建个人博客/
features:
  - title: 简洁至上
    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  - title: Vue驱动
    details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
  - title: 高性能
    details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2020-present Cecilia You
---
```
##  部署
[VuePress + GitHub Pages 搭建个人博客](https://www.jianshu.com/p/6e8c608f24c8)


*  1、创建deploy.sh文件（见上面的文件）

见[Vuepress部署](https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages)

作用是：运行之后会创建一个名为 gh-pages 的分支，只有把我们本地用第三方库创建的静态博客部署到 这个分支上，博客才能在线上被访问。



* 2、添加 Travis CI自动部署

见[用 Travis CI 自动部署 Github Pages](https://segmentfault.com/a/1190000019067492)

push文件到线上之后Travis CI自动运行deploy.sh

项目根目录下添加.travis.yml文件：

```
language: node_js
node_js:
- lts/*
install:
- yarn install
script:
- yarn docs:build
deploy:
  provider: pages
  skip_cleanup: true
  local_dir: docs/.vuepress/dist
  github_token: "$GITHUB_TOKEN"
  keep_history: true
  on:
    branch: master

```
   * 在gitHub上的github pages栏选择gh-pages
	  
		构建好，就可以通过git地址访问到博客，比如：https://youyi2016.github.io/TechBlog/
### 部署注意事项

1、 配置 Github Token是在github上配置。点击自己的github头像，选择Settings， 然后选择Developer settings

2、travis  找不到时，在安装travis命令行后加--user-install

gem install travis  --user-install  # Travis CI 官方 cli 工具


## 关于Travis CI
github默认使用的是Travis CI。

>Travis CI 提供的是持续集成服务（Continuous Integration，简称 CI）。它绑定 Github 上面的项目，只要有新的代码，就会自动抓取。然后，提供一个运行环境，执行测试，完成构建，还能部署到服务器。

>持续集成指的是只要代码有变更，就自动运行构建和测试，反馈运行结果。确保符合预期以后，再将新代码"集成"到主干。

>持续集成的好处在于，每次代码的小幅变更，就能看到运行结果，从而不断累积小的变更，而不是在开发周期结束时，一下子合并一大块代码。


## 更多资料

[ GitHub Pages](https://help.github.com/en/github/working-with-github-pages)