module.exports = {
	'/FEProblem/CSS/': ['', 'css居中布局'],
	// '/FEProblem/移动端/': getGuideSidebar('CSS', 'Vue', 'HTML'),
	'/FEProblem/VUE/': ['', '按返回跳转到指定页面']
}

function getGuideSidebar(groupA, groupB, groupC) {
	return [{
			title: groupA,
			collapsable: false,
			children: [
				// '中文与数字或字母不对齐问题',
				// 'Android和Ios样式兼容问题',
			]
		},
		{
			title: groupB,
			collapsable: false,
			children: [
				'',
			]
		},
		{
			title: groupC,
			collapsable: false,
			children: [
				'吸底布局'
			]
		}
	]
}