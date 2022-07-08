const path = require('path');

module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/webpack.*.js', '**/script/*.js'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
    'react/function-component-definition': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-duplicates': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '[@]common/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      { controlComponents: ['input', 'select'] },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error',
          { variables: false },
        ],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-floating-promises': 'off',
      },
      parserOptions: {
        project: ['./tsconfig.json', './packages/**/tsconfig.json'],
      },
    },
    {
      files: [
        'packages/common-components/**/*.ts?(x)',
        'packages/common-components/**/*.js?(x)',
      ],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(
              `${__dirname}/packages/common-components/tsconfig.json`
            ),
          },
        },
      },
    },
    {
      files: [
        'packages/common-styles/**/*.ts?(x)',
        'packages/common-styles/**/*.js?(x)',
      ],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(
              `${__dirname}/packages/common-styles/tsconfig.json`
            ),
          },
        },
      },
    },
    {
      files: [
        'packages/prototype-a/**/*.ts?(x)',
        'packages/prototype-a/**/*.js?(x)',
      ],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(
              `${__dirname}/packages/prototype-a/tsconfig.json`
            ),
          },
        },
      },
    },
    {
      files: [
        'packages/prototype-b/**/*.ts?(x)',
        'packages/prototype-b/**/*.js?(x)',
      ],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(
              `${__dirname}/packages/prototype-b/tsconfig.json`
            ),
          },
        },
      },
    },
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts', '.js', '.jsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  env: {
    browser: true,
  },
};