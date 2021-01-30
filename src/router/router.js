import VueRouter from 'vue-router'
import Home from '../pages/Home'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: '/',
            component: Home,
            path: '/',
            meta: {
                auth: true
            }
        },
        {
            path: '*',
            component: Home,
        },

    ]
})

export default router