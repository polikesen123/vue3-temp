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
import OpenLayersMap from 'vue3-openlayers'
import 'vue3-openlayers/dist/vue3-openlayers.css'
app.use(OpenLayersMap)
app.use(store).use(router).mount('#app')
