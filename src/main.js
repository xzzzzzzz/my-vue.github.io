// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import 'lib-flexible/flexible'
import axios from 'axios'
import alertBox from './minx/alertBox'

import '../static/scss/select.scss'
import pdSelect from './components/selectIos'

Vue.use(pdSelect)
Vue.config.productionTip = false

// Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) // 注册过滤器
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(alertBox)
/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  // 进入页面前加载loading动画
  store.dispatch('onLoading', true)
  next()
})
router.afterEach((to, from, next) => {
  // 进入页面后取消loading动画
  setTimeout(function () {
    store.dispatch('onLoading', false)
  }, 1000)
})
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
