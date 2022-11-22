module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [],

  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 0, // 0 代表 off 关闭, 1 代表 warning, 2 代表 error
    'vue/multi-word-component-names': [
      0,
      {
        ignores: [],
      },
    ],
  },
};
