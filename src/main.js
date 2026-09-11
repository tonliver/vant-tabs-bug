import { createApp } from 'vue'
import App from './App.vue'
import 'vant/lib/index.css'
import './style.css';

document.addEventListener('touchstart', () => {}, { passive: true })
createApp(App).mount('#app')
