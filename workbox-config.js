module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{js,css,png,jpg,ico,html}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'dist/sw.js'
};