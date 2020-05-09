//用于网站结构配置
const nav = require('./nav');
const sidebar = require('./sideBar')
let base = '/TechBlog/'  
// let base = '' //本地使用 npm run start时使用

module.exports = {
	title: 'Cecilia You',
	description: '自由、利他、体验，寻找使命。',
	base: base,
	themeConfig: {
		nav,
		sidebar
	}
}