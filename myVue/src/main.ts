import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'github-markdown-css'

createApp(App).use(router).mount('#app')
