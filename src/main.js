import { createApp } from 'vue'
import App from './App.vue'
import VueHeadSlot from "./plugins/vue-head-slot";

const app = createApp(App)

app.use(VueHeadSlot)

app.mount('#app')
