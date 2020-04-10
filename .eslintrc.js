module.exports = {
	env: {
		node: true,
	},
	extends: require.resolve('./index.js'),
	rules: {
		'no-magic-numbers': 'off',
		'max-lines': 'off',
	},
};
