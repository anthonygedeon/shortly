module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	extends: [
		'airbnb-base',
	],
	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'module',
	},
	rules: {
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
		indent: [2, 4],
	},
};
