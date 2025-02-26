import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'HOME',
            component: () => import('@/page/Home.vue'),
        },
        {
            path: '/auth',
            name: 'AUTH',
            component: () => import('@/page/Auth.vue')
        },
        {
            path: '/callback/:provider',
            name: 'CALLBACK',
            props: true,
            component: () => import('@/page/Callback.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NOTFOUND',
            component: () => import('@/page/NotFound.vue')
        }
    ],
})

export default router
