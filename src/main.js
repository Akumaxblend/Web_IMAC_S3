import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Header from './assets/header.vue'
import Footer from './assets/footer.vue'
import {routes} from './routes.js'

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app')
createApp(Header).mount('#header')
createApp(Footer).mount('#footer')
