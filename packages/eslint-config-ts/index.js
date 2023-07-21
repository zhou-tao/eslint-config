module.exports = {
  extends: [
    '@antfu/eslint-config-basic',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended'
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] }
    }
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
    '@typescript-eslint/no-unused-vars': 'off'
  }
}
