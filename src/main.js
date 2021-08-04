import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import store from './store'
import './assets/reset.css'
import './assets/icons/iconfont/iconfont.css'


createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
