// @ts-check
const eslint = require('@eslint/js');
const { defineConfig } = require('eslint/config');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const sonarjs = require('eslint-plugin-sonarjs');

module.exports = defineConfig([
  {
    ignores: ['dist/**', 'coverage/**', '.angular/**'],
  },
  {
    // Library + unit-test sources: type-aware linting (projectService powers the type-checked
    // rules below — prefer-readonly, no-floating-promises, no-deprecated).
    files: ['projects/*/src/**/*.ts'],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
      sonarjs.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    processor: angular.processInlineTemplates,
    rules: {
      // The library's own prefix, so its components never collide with a game's `app-` ones —
      // and a game's template shows at a glance what comes from the library. Its CSS variables
      // share it (--ct-card-width, --ct-hand-top, …).
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'ct', style: 'camelCase' },
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'ct', style: 'kebab-case' },
      ],
      'no-console': 'error',
      // Enforce === everywhere except `== null`, the idiomatic null-or-undefined check.
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-deprecated': 'error',
      // God-object / size caps.
      'max-lines': ['error', { max: 400, skipBlankLines: true, skipComments: true }],
      'max-lines-per-function': ['error', { max: 80, skipBlankLines: true, skipComments: true }],
      'max-classes-per-file': ['error', 1],
    },
  },
  {
    // Specs are legitimately long (fixtures, setup) — size caps do not apply.
    files: ['projects/*/src/**/*.spec.ts'],
    rules: {
      'max-lines': 'off',
      'max-lines-per-function': 'off',
      'max-classes-per-file': 'off',
      // sonarjs's design rules target production code; these misfire on the Angular
      // testing idioms.
      'sonarjs/assertions-in-tests': 'off',
      'sonarjs/prefer-specific-assertions': 'off',
      'sonarjs/no-alphabetical-sort': 'off',
    },
  },
  {
    files: ['**/*.html'],
    extends: [angular.configs.templateRecommended, angular.configs.templateAccessibility],
    rules: {},
  },
]);
