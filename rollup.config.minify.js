'use strict'

const { uglify } = require('rollup-plugin-uglify')
const configs = require('./rollup.config')

configs.forEach((config) => {
  config.output.file = config.output.file.replace(/js$/, 'min.js')
  config.plugins = config.plugins.concat(uglify())
})

module.exports = configs
