
import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

// Configurar la URL de la API en el servidor Express.js
axios.defaults.baseURL = 'http://localhost:3000';

const app = createApp(App)

// Proporcionar la instancia de Axios a todos los componentes
app.config.globalProperties.$axios = axios;

app.use(router)

app.mount('#app')
