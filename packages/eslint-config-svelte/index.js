module.exports = {
  extends: [
    'plugin:svelte/recommended',
    '@toryz/eslint-config-ts'
  ],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ]
}
