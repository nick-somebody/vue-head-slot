# vue-head-slot

How to manage content for your `head` easily.

## Usage

```js
app.use(VueHeadSlot)
```

And anywhere in your app.
```html
<head-slot>
    <meta name="robots" content="nofollow">
</head-slot>
```

Just be sure to remove content from `index.html` that you intend to manage like this. This appends content, so it will duplicate tags that are already declared.

## Other examples

Using with `vue-router`.
```html
<!-- Some page in your route scheme -->
<head-slot>
    <title>{{ $route.name }}</title>
    <link rel="canonical" :href="dynamicallyBuiltUrl" />
    <link v-for="lang in langs" :key="lang" rel="alternate" :hreflang="lang" :href="`${dynamicallyBuiltUrl}/${lang}`" />
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

## License
Copyright 2020 nick-somebody

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.