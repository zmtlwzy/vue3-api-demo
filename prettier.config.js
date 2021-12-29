module.exports = {
	printWidth: 120, // 超过最大值换行
	tabWidth: 2, // 缩进字节数
	useTabs: false, // 缩进使用tab，不使用空格
	semi: true, // 句尾添加分号
	singleQuote: true, // 使用单引号代替双引号
	proseWrap: 'preserve', // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
	arrowParens: 'avoid', //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
	bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
	endOfLine: 'auto', // 结尾是 \n \r \n\r auto
	htmlWhitespaceSensitivity: 'ignore', // 指定HTML文件的全局空白区域敏感度 有效选项："css"- 遵守CSS display属性的默认值。"strict" - 空格被认为是敏感的。"ignore" - 空格被认为是不敏感的。html 中空格也会占位，影响布局，prettier 格式化的时候可能会将文本换行，造成布局错乱
	jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
	trailingComma: 'none', // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
};
