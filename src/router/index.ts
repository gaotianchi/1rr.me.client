import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/page/Home.vue'),
        },
        {
            path: '/auth',
            name: 'AUTH',
            component: () => import('@/page/Auth.vue')
        },
        {
            path: '/callback',
            component: () => import('@/page/Callback.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/page/NotFound.vue')
        },
        {
            path: '/core',
            component:() => import('@/page/Core.vue')
        }
    ],
})

export default router
