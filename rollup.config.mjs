import path from 'path'
import fs from 'fs'
import _ from 'lodash'
import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import babelConfig from './babel.config.cjs'

const pkg = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), './package.json')))
const name = pkg.name.startsWith('@domp') ? pkg.name.match(/^@domp\/(.*)$/)[1] : pkg.name
const umdGlobal = _.camelCase(name)

const plugins = [
  babel({
    ...babelConfig,
    babelHelpers: 'bundled',
    exclude: 'node_modules/**/*',
  }),
  nodeResolve(),
]

const configs = [{
  plugins,
  input: 'src/index.mjs',
  output: {
    file: `dist/${name}.js`,
    format: 'umd',
    name: `$${umdGlobal}`,
    sourcemap: true,
  },
}]

if (fs.existsSync(path.join(process.cwd(), 'src/fp.mjs'))) {
  configs.push({
    plugins,
    input: 'src/fp.mjs',
    output: {
      file: `dist/${name}.fp.js`,
      format: 'umd',
      name: `$${umdGlobal}Fp`,
      sourcemap: true,
    },
  })
}

export default configs
