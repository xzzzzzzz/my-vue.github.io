import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import investList from '@/views/invest-list'
import invest from '@/views/invest'
import demo from '@/views/demo'
import input from '@/views/dem'
// import demoList from '@/views/demo/list'

Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/investList',
    name: 'investList',
    component: investList,
    meta: {
      title: '出借'
    },
    children: [
      // {
      //   path: '/invest/invest',
      //   name: 'invest',
      //   component: invest
      // }
    ]
  },
  {
    path: '/invest/invest',
    name: 'invest',
    component: invest
  },
  {
    path: '/demo',
    component: demo
  },
  {
    path: '/input',
    component: input
  }
]
export default new Router({
  mode: 'history',
  saveScrollPosition: true,
  routes
})
