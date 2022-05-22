require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	'env': {
		'node': true,
		'commonjs': true,
		'es2021': true
	},
	'ignorePatterns': ['**/dist'],
	'extends': 'eslint:recommended',
	'parserOptions': {
		'parser': 'babel-eslint',
		'ecmaVersion': 6,
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true
		}
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'semi': ['error', 'always'],
		'quotes': ['error', 'single'],
		'no-multi-spaces': 'error',
		'no-unused-vars': 2 // 校验未使用变量
	}
};
