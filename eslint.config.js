// {
//   "extends": ["plugin:react/recommended", "prettier", "prettier/react"],
//   "rules": {
//     "semi": "error",
//     "no-unused-vars": "warn"
//   },
//   "globals": {
//     "node": "readonly",
//     "browser": "readonly"
//   },
//   "parserOptions": {
//     "project": "./tsconfig.json",
//     "tsconfigRootDir": "./",
//     "ecmaVersion": 2020,
//     "sourceType": "module",
//     "settings": {
//       "react": {
//         "version": "detect"
//       }
//     }
//   },
//   "plugins": ["react"],
//   "overrides": [
//     {
//       "files": ["client/**/*.tsx"],
//       "rules": {
//         "react/react-in-jsx-scope": "off",
//         "react/jsx-uses-react": "off"
//       }
//     }
//   ],
//   "ignorePatterns": ["node_modules", "client/dist/"]
// }

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';
const { node, browser, mocha } = globals;

export default [
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.js'],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    rules: {
      'require-atomic-updates': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      eqeqeq: 'error',
      'no-console': 'warn',
      'prefer-const': 'error',
    },
  },
  {
    files: ['server/**/*.{js,ts}'],
    languageOptions: {
      globals: {
        ...node,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  {
    files: ['server/__tests__/**/*.{js,ts}'],
    languageOptions: {
      globals: {
        ...node,
        ...mocha,
      },
    },
  },
  {
    files: ['client/**/*.{js,jsx,ts,tsx}'],
    ...reactRecommended,
    plugins: {
      react,
    },
    languageOptions: {
      ...reactRecommended.languageOptions,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['client/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
      ],
    },
  },
  {
    ignores: ['client/dist', 'server/dist/'],
  },
];
