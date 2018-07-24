const postcss = require('postcss')
const plugin = require('./plugin.js')

const find = (content, cb) => {
	postcss([plugin({ callback: cb })])
		.process(content)
		.css
}

module.exports = find
