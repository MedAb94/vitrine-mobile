import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Terms from '../views/Terms'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    } ,
    {
        path: '/terms-and-conditions',
        name: 'Terms',
        component: Terms
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
