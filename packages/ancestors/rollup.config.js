import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  plugins: [
    babel({
      exclude: 'node_modules/**/*',
    }),
    nodeResolve({
      extensions: [ '.mjs', '.js' ],
      mainFields: [ 'browser', 'module', 'main' ],
    }),
  ],
  input: 'src/index.mjs',
  output: {
    file: 'dist/ancestors.js',
    format: 'umd',
    name: '$ancestors',
    sourcemap: true,
  },
}
