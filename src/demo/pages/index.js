import Vue from 'vue'
import VueRouter from 'vue-router'
import { configRouter } from '../route-config'
import App from '../components/app.vue'


Vue.use(VueRouter);

const routes = [
	{ path: '/', component: index },
	{ path: '/index', component: index }
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
