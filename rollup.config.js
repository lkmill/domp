'use strict'

const path = require('path')
const _ = require('lodash')
const babel = require('rollup-plugin-babel')
const nodeResolve = require('rollup-plugin-node-resolve')

const babelConfig = require('./babel.config')
const pkg = require(path.join(process.cwd(), 'package.json'))

const [ , name ] = pkg.name.match(/^@domp\/(.*)$/)

const plugins = [
  babel({
    ...babelConfig,
    exclude: 'node_modules/**/*',
  }),
  nodeResolve(),
]

module.exports = [{
  plugins: plugins,
  input: 'src/index.mjs',
  output: {
    file: `dist/${name}.js`,
    format: 'umd',
    name: `$${_.camelCase(name)}`,
    sourcemap: true,
  },
}, {
  plugins: plugins,
  input: 'src/fp.mjs',
  output: {
    file: `dist/${name}.fp.js`,
    format: 'umd',
    name: `$${_.camelCase(name)}Fp`,
    sourcemap: true,
  },
}]
