import Vue from 'vue'
import VueRouter from 'vue-router'
import { configRouter } from './route-config'
import App from './app.vue'


Vue.use(VueRouter);

var router;

configRouter(router).then((router) => {

    new Vue({
        el: '#app',
        components: {
            App
        },
        router
    });

})