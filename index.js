module.exports = {
	extends: [
		'./rules/best-practices',
		'./rules/errors',
		'./rules/es6',
		'./rules/node',
		'./rules/strict',
		'./rules/style',
		'./rules/variables',
	].map(require.resolve),
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
};
