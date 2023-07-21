module.exports = {
  extends: [
    'plugin:vue/recommended',
    '@toryz/eslint-config-basic'
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off'
      }
    }
  ],
  rules: {
    'vue/multi-word-component-names': ['off'],
    'vue/max-attributes-per-line': ['off']
  }
}
