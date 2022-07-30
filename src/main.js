import Vue from 'vue'
import App from './App.vue'
import router from './router'    //从其他文件引入了router
//默认引入一个文件夹下名为 index/index.js/index.json
Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 引入 vue-l18n
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const messages={
  en:{
    message:{
      login:'login',
      loginin:'Login interface'
    }
  },
  ja:{
    message:{
      login:"ログイン",
      loginin:'ログインインタフェース'
    }
  },
  zh:{
    message:{
      login:"登录",
      loginin:'登入界面'
    }
  }
}

const i18n = new VueI18n({
  locale: 'zh', // set locale
  messages, // set locale messages
})




new Vue({
  router: router,
  render: h => h(App),
  i18n
}).$mount('#app')
