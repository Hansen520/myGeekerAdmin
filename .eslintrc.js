// @see: http://eslint.cn

module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true
	},
	/* 指定如何解析语法 */
	parser: "vue-eslint-parser",
	/* 优先级低于 parse 的语法解析配置 */
	parserOptions: {
		parser: "@typescript-eslint/parser",
		ecmaVersion: 2020,
		sourceType: "module",
		jsxPragma: "React",
		ecmaFeatures: {
			jsx: true
		}
	},
	/* 继承某些已有的规则 */
	extends: ["plugin:vue/vue3-recommended", "plugin:@typescript-eslint/recommended", "prettier", "plugin:prettier/recommended"],
	/*
	 * "off" 或 0    ==>  关闭规则
	 * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
	 * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
	 */
	rules: {
		// eslint (http://eslint.cn/docs/rules)

		// typeScript (https://typescript-eslint.io/rules)
		"@typescript-eslint/no-inferrable-types": "off", // 可以轻松推断的显式类型可能会增加不必要的冗长
		"@typescript-eslint/no-explicit-any": "off", // 禁止使用 any 类型
		"@typescript-eslint/no-namespace": "off", // 禁止使用自定义 TypeScript 模块和命名空间。
		// vue (https://eslint.vuejs.org/rules)
		"no-var": "error", // 要求使用 let 或 const 而不是 var
		"vue/require-default-prop": "off", // 此规则要求为每个 prop 为必填时，必须提供默认值
		"vue/multi-word-component-names": "off" // 要求组件名称始终为 “-” 链接的单词
	}
};
