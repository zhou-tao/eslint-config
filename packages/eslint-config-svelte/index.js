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
      },
      rules: {
        'import/no-mutable-exports': 'off',
        '@typescript-eslint/indent': 'off',
        'svelte/indent': [
          'error',
          {
            indent: 2,
            ignoredNodes: [],
            switchCase: 1,
            alignAttributesVertically: false
          }
        ],
        'svelte/valid-compile': [
          'error',
          {
            ignoreWarnings: true
          }
        ]
      }
    }
  ]
}
