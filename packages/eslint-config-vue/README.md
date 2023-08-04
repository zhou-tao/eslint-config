# @toryz/eslint-config-vue

[![npm](https://img.shields.io/npm/v/@toryz/eslint-config-vue?color=1dd1a1&label=)](https://npmjs.com/package/@toryz/eslint-config-vue)

lint for vite + vue3, same as [@toryz/eslint-config](https://npmjs.com/package/@toryz/eslint-config).

### Install

```bash
pnpm add eslint @toryz/eslint-config-vue -D
```

### Usage

##### add `.eslintrc.json`
```jsonc
{
  "root": true,
  "extends": "@toryz/vue",
  "rules": {
    // your custom rules
  }
}
```