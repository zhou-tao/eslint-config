module.exports = {
  extends: [
    'plugin:react-hooks/recommended',
    '@toryz/eslint-config-ts'
  ],
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ]
  }
}
