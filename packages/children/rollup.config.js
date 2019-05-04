import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'

const plugins = [
  babel({
    exclude: 'node_modules/**/*',
  }),
  nodeResolve(),
]

export default [{
  plugins: plugins,
  input: 'src/index.mjs',
  output: {
    file: 'dist/children.js',
    format: 'umd',
    name: '$children',
    sourcemap: true,
  },
}, {
  plugins: plugins,
  input: 'src/fp.mjs',
  output: {
    file: 'dist/children.fp.js',
    format: 'umd',
    name: '$childrenFp',
    sourcemap: true,
  },
}]
