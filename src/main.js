import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Header from './assets/header.vue'
import Footer from './assets/footer.vue'

createApp(App).mount('#app')
createApp(Header).mount('#header')
createApp(Footer).mount('#footer')
