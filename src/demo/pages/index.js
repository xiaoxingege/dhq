import Vue from 'vue'
import VueRouter from 'vue-router'
import { configRouter } from '../route-config'
import App from '../../components/app'
import Index from '../../components/index'

Vue.use(VueRouter);

const routes = [
	{ path: '/', component: Index }
]

configRouter(routes).then((router) => {

	new Vue({
		el: '#app',
		components: {
			App
		},
		router
	});

})
