import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Intro',
        component: () => import(/* webpackChunkName: "about" */ '../views/Intro.vue')
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutMe.vue')
    },
    {
        path: '/playground',
        name: 'Playground',
        component: () => import(/* webpackChunkName: "about" */ '../views/Playground.vue')
    },
    {
        path: '/*',
        redirect: '/'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router