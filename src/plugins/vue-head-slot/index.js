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
