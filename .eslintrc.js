module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.ts', '.tsx', 'json'] },
    ],
    'prettier/prettier': 'off',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', 'js', 'ts', 'tsx'] },
    ],
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    camelcase: 'off',
    'react/prop-types': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-unused-expressions': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', 'ts', 'tsx'],
      },
    },
  },
};
