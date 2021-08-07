import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import store from './store'
import axios from 'axios'
import './assets/reset.css'
import './assets/icons/iconfont/iconfont.css'
import './network/request'


const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(store).use(router).use(ElementPlus).mount('#app')