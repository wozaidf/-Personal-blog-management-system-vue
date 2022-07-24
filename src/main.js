import Vue from 'vue'
import App from './App.vue'
import router from './router'    //从其他文件引入了router
//默认引入一个文件夹下名为 index/index.js/index.json
Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  router:router,
  render: h => h(App)
}).$mount('#app')
