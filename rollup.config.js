'use strict'

const path = require('path')
const fs = require('fs')
const _ = require('lodash')
const babel = require('rollup-plugin-babel')
const nodeResolve = require('rollup-plugin-node-resolve')

const babelConfig = require('./babel.config')
const pkg = require(path.join(process.cwd(), 'package.json'))

const name = pkg.name.startsWith('@domp') ? pkg.name.match(/^@domp\/(.*)$/)[1] : pkg.name
const umdGlobal = _.camelCase(name)

const plugins = [
  babel({
    ...babelConfig,
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

module.exports = configs
