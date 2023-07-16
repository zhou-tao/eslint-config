import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/index.scss'
import '@unocss/reset/tailwind-compat.css'
import 'uno.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
