import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import lib from 'lib/dist/lib.js';
const app = createApp(App);
app.use(lib).mount('#app')
