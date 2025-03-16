import js from '@eslint/js'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import redosPlugin from 'eslint-plugin-redos'

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': tsPlugin,
      'simple-import-sort': simpleImportSort,
      redos: redosPlugin
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json'
      },
      globals: {
        ...globals.browser,
        ...globals.es2020
      }
    },
    rules: {
      ...tsPlugin.configs['recommended-type-checked'].rules,
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'redos/no-vulnerable': 'error',
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  },
  {
    // 無視設定
    ignores: ['dist/**', 'node_modules/**', '*.config.*', '.secretlintrc.json', '.prettierrc.json', 'src/vite-env.d.ts']
  }
]
