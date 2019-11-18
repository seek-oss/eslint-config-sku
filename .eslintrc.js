const path = require('path');
const root = require('find-root')(process.cwd());

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: { jsx: true }
  },
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    'cypress/globals': true
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        moduleDirectory: [root, path.join(root, 'node_modules')],
        extensions: ['.js', '.ts', '.tsx']
      }
    },
    react: {
      version: '>16'
    }
  },
  rules: {
    'no-console': 'error',
    'no-negated-in-lhs': 'error',
    'no-unexpected-multiline': 'error',
    'block-scoped-var': 'error',
    'consistent-return': 'error',
    curly: ['error', 'all'],
    'default-case': 'error',
    'dot-notation': 'error',
    eqeqeq: 'error',
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-void': 'error',
    'no-warning-comments': 'error',
    radix: 'error',
    'vars-on-top': 'error',
    yoda: 'error',
    strict: ['error', 'never'],
    'no-label-var': 'error',
    'no-shadow': 'error',
    'no-undef-init': 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-use-before-define': 'error',
    'handle-callback-err': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-exit': 'error',
    'no-restricted-modules': 'error',
    'no-sync': 'error',
    'linebreak-style': ['error', 'unix'],
    'new-cap': 'error',
    'no-lonely-if': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'spaced-comment': ['error', 'always'],
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'react/display-name': 'off',
    'react/no-danger': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/prefer-es6-class': ['error', 'always'],
    'react/prop-types': ['error', { skipUndeclared: true }],
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/jsx-pascal-case': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'import/no-unresolved': [
      'error',
      { commonjs: true, amd: true, ignore: ['.svg$', '^file?'] }
    ],
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error'
  },
  plugins: [
    'react',
    'react-hooks',
    'css-modules',
    'import',
    'flowtype',
    'cypress',
    'jest'
  ],
  extends: [
    'plugin:jest/recommended',
    'plugin:css-modules/recommended',
    'prettier',
    'plugin:flowtype/recommended',
    'plugin:cypress/recommended'
  ]
};
