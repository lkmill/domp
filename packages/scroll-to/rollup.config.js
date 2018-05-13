import babel from 'rollup-plugin-babel'

export default {
  plugins: [
    babel({
      exclude: 'node_modules/**/*',
    }),
  ],
  input: 'src/index.mjs',
  output: {
    file: 'dist/scroll-to.js',
    format: 'umd',
    name: '$scrollTo',
    sourcemap: true,
  },
}
