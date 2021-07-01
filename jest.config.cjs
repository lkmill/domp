'use strict'

// this file was created to force jest to handle and babelify .mjs files
// https://github.com/facebook/jest/issues/4637#issuecomment-385291263
module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.?(m)js?(x)', '**/?(*.)(spec|test).?(m)js?(x)'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'mjs'],
  transform: {},
}
