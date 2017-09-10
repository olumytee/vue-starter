// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

import App from './App'
import router from './router'
import axios from './plugins/axios'
import store from './stores/index'

Vue.config.productionTip = false
Vue.use(axios)
Vue.use(VueAnalytics, {
	id: 'UA-XXX-X',
	router,
	autoTracking: {
		pageviewOnLoad: false
	},
	ignoreRoutes: []
})
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
