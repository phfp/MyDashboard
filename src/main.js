// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import money from 'v-money'
import VueTheMask from 'vue-the-mask'
import VueSession from 'vue-session'

Vue.use(VueSession)
Vue.use(money, {precision:2})
Vue.use(VueTheMask)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})