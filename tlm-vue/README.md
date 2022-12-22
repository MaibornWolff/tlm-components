[![npm](https://img.shields.io/npm/v/tlm-vue?color=blue)](https://www.npmjs.com/package/tlm-vue)

# MWUI - Vue

## Publish package

1. Build your core stencil package.
2. Run build on this package.
3. Publish.

## Use in Vue

Import the library plugin in the `main.js` file:

```JavaScript
import { MwComponents } from 'mw-vue';

createApp(App).use(MwComponents).mount('#app');
```
You can then use your components within vue:

```Vue
<template>
  <mw-button test-id="test-id" disabled="false">Press here</mw-button>
</template>

<script>
import { MwButton } from 'mw-vue';

export default {
  name: 'HelloWorld',
  components: {
    MwButton
  }
}
```

## Known Issues

Vue will throw a deprecation error if `slots` are used. This is due to `eslint` misidentifying the slots as outdated Vue 2
syntax.

To disable the error, add the following under `eslintConfig` within the `package.json`:

```json
"rules": {
    "vue/no-deprecated-slot-attribute": "off"
}
```