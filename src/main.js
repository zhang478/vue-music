// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueSwiper from 'vue-awesome-swiper'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import 'animate.css'

Vue.use(ElementUI)

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VueSwiper)


/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
