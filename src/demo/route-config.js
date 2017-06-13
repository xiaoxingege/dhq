import VueRouter from 'vue-router'
import index from './components/index.vue'

export function configRouter(router) {

    let promise = new Promise(function(resolve, reject) {

        const routes = [
            { path: '/', component: index },
            { path: '/index', component: index }
        ]

        router = new VueRouter({
            routes
        })

        router.beforeEach((to, from, next) => {
            next()

        })

        resolve(router);
    });

    return promise

}