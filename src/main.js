import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
// import 'element-plus/lib/theme-chalk/base.css'
import installElementPlus from './element'
let app = createApp(App);
installElementPlus(app);
import 'ant-design-vue/dist/antd.css';
import installAntdv from './antdv';
installAntdv(app);

app.use(store).use(router).mount('#app')
