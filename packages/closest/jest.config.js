'use strict'

// this file was created to force jest to handle and babelify .mjs files
// https://github.com/facebook/jest/issues/4637#issuecomment-385291263
module.exports = {
  'testMatch': [
    '**/__tests__/**/*.?(m)js?(x)',
    '**/?(*.)(spec|test).?(m)js?(x)',
  ],
  'moduleFileExtensions': [
    'js',
    'json',
    'jsx',
    'node',
    'mjs',
  ],
  'transform': {
    // eslint-disable-next-line no-useless-escape
    '^.+\.m?js$': 'babel-jest',
  },
}
