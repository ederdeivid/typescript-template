module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    node: true
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'no-new': ['off'],
    'no-async-promise-executor': ['off'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/interface-name-prefix': ['off', 'always']
  }
}