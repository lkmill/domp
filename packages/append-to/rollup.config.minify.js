import { uglify } from 'rollup-plugin-uglify'
import config from './rollup.config'

config.output.file = config.output.file.replace(/js$/, 'min.js')
config.plugins = config.plugins.concat(uglify())

export default config
