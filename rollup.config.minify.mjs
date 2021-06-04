import { uglify } from 'rollup-plugin-uglify'
import configs from './rollup.config.mjs'

configs.forEach((config) => {
  config.output.file = config.output.file.replace(/js$/, 'min.js')
  config.plugins = config.plugins.concat(uglify())
})

export default configs
