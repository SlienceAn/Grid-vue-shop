import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './components/index.vue'
import New from './components/New.vue'
import Contact from './components/Contact.vue'
import About from './components/About.vue'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: New
        },
        {
            path: '/contact',
            component: Contact
        },
        {
            path: '/production',
            component: index
        },
        {
            path: '/about',
            component: About
        }
    ]
})

export default router