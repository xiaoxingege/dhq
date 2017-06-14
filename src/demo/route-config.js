import VueRouter from 'vue-router'
import index from '../components/index.vue'

export function configRouter(routes) {

    let promise = new Promise(function(resolve, reject) {


        let router = new VueRouter({
            routes
        })

        router.beforeEach((to, from, next) => {
            next()

        })

        resolve(router);
    });

    return promise

}
