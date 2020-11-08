# vue-head-slot

How to manage content for your `head` easily.

## Usage

```js
app.use(VueHeadSlot)
```

And anywhere in your app.
```html
<head-slot>
    <title>Hello</title>
    <meta name="Description" CONTENT="Describe'n dis page">
    <meta name="robots" content="nofollow">
</head-slot>
```
## Disclaimer
Vue3's Teleport makes this so easy that you probably don't need this module.

Just use `<teleport to="head">...</teleport>`.

I used render functions to seem a bit more clever.

```js
// pretty much the whole source code
import { h, Teleport } from 'vue'

export default {
  install(app, name) {
    app.component(name || 'head-slot', {
      render() {
        return h(
          Teleport,
          { to: 'head' },
          this.$slots.default()
        )
      }
    })
  }
}
```
