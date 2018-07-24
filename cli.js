#!/usr/bin/env node

const fs = require('fs')
const find = require('./index')

const [,, ...args] = process.argv

if (args.length === 0) {
  console.error('Error, no filename argument provided e.g. find-css-vars ./path/to/my.css')
  return
}

const input = args[0]
const file = fs.readFileSync(input, 'utf8')

find(file, (results) => {
  const json = JSON.stringify(results, null, 2)
  console.log(json)
  if (args.length >= 2) {
    const output = args[1]
    fs.writeFileSync(output, json, 'utf8')
    console.log(`File written to "${output}"`)
  }
})
