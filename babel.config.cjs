'use strict'

module.exports = {
  presets: [['@babel/env', { modules: false, shippedProposals: true }]],

  env: {
    cjs: {
      plugins: [
        'babel-plugin-transform-es2015-modules-simple-commonjs',
        [
          'module-resolver',
          {
            resolvePath(sourcePath, currentFile, opts) {
              return sourcePath.endsWith('.js') ? sourcePath.slice(0, -2) + 'cjs' : sourcePath
            },
          },
        ],
      ],
    },
    test: {
      plugins: ['babel-plugin-transform-es2015-modules-simple-commonjs'],
    },
  },
}
