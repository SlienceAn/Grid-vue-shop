import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './components/index.vue'
import About from './components/About.vue'
import New from './components/New.vue'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: index
        },
        {
            path: '/About',
            component: About
        },
        {
            path: '/New',
            component: New
        }
    ]
})

export default router