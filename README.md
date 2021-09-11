<div align="center">

[![Build Status](https://travis-ci.com/randolphtellis/vuecado-ui.svg?token=hXpsA9tqveCqkXWMHjxp&branch=main)](https://travis-ci.com/randolphtellis/vuecado-ui) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/vuecado-ui)](https://bundlephobia.com/result?p=vuecado-ui@latest) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/vuecado-ui) ![npm](https://img.shields.io/npm/dt/vuecado-ui)

![vue supported version](https://img.shields.io/badge/vue-3.x-brightgreen) [![npm](https://img.shields.io/npm/v/vuecado-ui)](https://www.npmjs.com/package/vuecado-ui/v/latest) [![NPM](https://img.shields.io/npm/l/vuecado-ui)](https://github.com/randolphtellis/vuecado-ui/blob/main/LICENSE.md)

#### <a target="_blank" href="https://randolphtellis.github.io/vuecado-ui">DEMO</a>

</div>

## Install

```bash
npm i vuecado-ui
or
yarn add vuecado-ui
```

## Usage

##### Demo code can be found under the docs section <a href="https://randolphtellis.github.io/vuecado-ui/?path=/docs/">here</a>.

### Import globally
```ts
import { createApp } from 'vue'
import App from './App.vue'
import VuecadoUi from 'vuecado-ui'

const app = createApp(App)
app.use(VuecadoUi)
app.mount('#app')
```



### Tree Shaking
#### Import components from the `esm` folder to enable tree shaking.
```ts
<script>
import { defineComponent } from 'vue'
import { VcButton } from 'vuecado-ui/esm'

export default defineComponent({
  components: { VcButton }
})
</script>
```
