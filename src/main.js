import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n.js';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/main.css'

createApp(App).use(i18n).mount('#app')