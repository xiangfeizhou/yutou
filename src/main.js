import { createApp } from 'vue'
import App from './App.vue'
import App2 from './App2.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//注册所有icon
import {User,Setting,Shop,Tickets,PieChart} from '@element-plus/icons-vue'
//全局样式
import './assets/global.css'

//导入axios
// import axios from 'axios'
// import VueAxios from 'vue-axios'

const app=createApp(App);
app.component('user',User)
app.component('Setting',Setting)
app.component('Shop',Shop)
app.component('Tickets',Tickets)
app.component('PieChart',PieChart)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
// createApp(App).use(router).mount('#app')
// const app=createApp(App2);
// app.mount('#app')