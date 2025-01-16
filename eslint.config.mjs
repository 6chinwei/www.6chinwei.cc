// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import stylistic from '@stylistic/eslint-plugin'

export default withNuxt(
  {
    files: ['**/*.vue', '**/*.ts', '**/*.js'],
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let'], next: '*'},
        { blankLine: 'any',    prev: ['const', 'let'], next: ['const', 'let']}
      ],
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': 'error',
      '@stylistic/quotes': ['error', 'single'],
    }
  }
)
