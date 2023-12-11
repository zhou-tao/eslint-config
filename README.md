# @toryz/eslint-config

[![npm](https://img.shields.io/npm/v/@toryz/eslint-config?color=ffb&label=)](https://npmjs.com/package/@toryz/eslint-config)

Refer to [@antfu/eslint-config](https://github.com/antfu/eslint-config).

### Install

```bash
# for vue
pnpm add eslint @toryz/eslint-config -D

# for react
pnpm add eslint @toryz/eslint-config-react -D

# for svelte
pnpm add eslint @toryz/eslint-config-svelte -D
```

### Usage

##### add `.eslintrc.json`
```jsonc
{
  "root": true,
  "extends": "@toryz",
  "rules": {
    // your custom rules
  }
}
```

Tips: if you working on react or svelte, please use `@toryz/react` or `@toryz/svelte` to instead it.

##### add scripts in `package.json`
```jsonc
{
  // ...
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

##### VS Code support (auto fix)

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Add the following settings to your `settings.json`:

```jsonc
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // The following is optional.
  // It's better to put under project setting `.vscode/settings.json`
  // to avoid conflicts with working with different eslint configs
  // that does not support all formats.
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "svelte",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yml",
    "yaml"
  ]
}
```

##### Lint Staged

If you want to apply lint and auto-fix before every commit, you can add the following to your `package.json`:

```json
{
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged"
  },
  "lint-staged": {
    "*": "eslint --fix"
  }
}
```

and then

```bash
npm i -D lint-staged simple-git-hooks
```