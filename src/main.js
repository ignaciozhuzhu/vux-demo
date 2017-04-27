// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Hello from './components/HelloFromVux'
import He from './components/Hello'
import Second from './components/Second'
import Third from './components/Third'
import Forth from './components/Forth'

import Email from './components/my/Email'
import Address from './components/my/Address'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Hello,
}, {
  path: '/first',
  component: Hello
}, {
  path: '/second',
  component: Second
}, {
  path: '/third',
  component: Third
}, {
  path: '/forth',
  component: Forth
}, { //该部分是我的信息里的跳转
  path: '/my/email',
  component: Email
}, {
  path: '/my/address',
  component: Address
}]

const router = new VueRouter({
  //mode: 'history',
  //base: __dirname,
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
