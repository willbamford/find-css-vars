const postcss = require('postcss')

const VAR_PROP_IDENTIFIER = '--'

module.exports = postcss.plugin('', (options) => (style) => {
  const results = {}
  style.walkRules((rule) => {
    if (
      rule.selectors.length !== 1 ||
      rule.selectors[0] !== ':root' ||
      rule.parent.type !== 'root'
    ) {
      return
    }

    rule.each((decl) => {
      const prop = decl.prop
      const value = decl.value
      if (prop && prop.indexOf(VAR_PROP_IDENTIFIER) === 0) {
        results[prop] = value
      }
    })
  })
  options.callback(results)
})