import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'

const plugins = [
  babel({
    exclude: 'node_modules/**/*',
  }),
  nodeResolve({
    extensions: [ '.mjs', '.js' ],
    jsnext: true,
    main: true,
    module: true,
    browser: true,
  }),
]

export default [{
  plugins: plugins,
  input: 'src/index.mjs',
  output: {
    file: 'dist/closest.js',
    format: 'umd',
    name: '$closest',
    sourcemap: true,
  },
}, {
  plugins: plugins,
  input: 'src/fp.mjs',
  output: {
    file: 'dist/closest.fp.js',
    format: 'umd',
    name: '$closestFp',
    sourcemap: true,
  },
}]
