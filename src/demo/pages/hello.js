import Vue from 'vue'
import VueRouter from 'vue-router'
import { configRouter } from '../route-config'
import App from '../../components/app'
import index from '../../components/index'

Vue.use(VueRouter);

const routes = [
	{ path: '/hello', component: index }
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
