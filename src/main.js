// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Hello from './components/HelloFromVux'
import Home from './components/Hello'
import Second from './components/Second'
import Third from './components/Third'
import Forth from './components/Forth'


Vue.use(VueRouter)

const routes = [{
	path: '/',
	component: Hello,
}, {
	path: '/first',
	component: Home
}, {
	path: '/second',
	component: Second
}, {
	path: '/third',
	component: Third
}, {
	path: '/forth',
	component: Forth
}]

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	router,
	render: h => h(App)
}).$mount('#app-box')