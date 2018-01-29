import Vue from 'vue';
import Router from 'vue-router';

import home from '@/views/home/home';
import shopping from '@/views/shopping/shopping';
import transport from '@/views/transport/transport';
import shopping_cart from '@/views/shopping_cart/shopping_cart';
import me from '@/views/me/me';

Vue.use(Router)

export default new Router
({
    routes:
    [
        {
            path: '/',
            redirect: 'home'
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/shopping',
            component: shopping
        },
        {
            path: '/transport',
            component: transport
        },
        {
            path: '/shopping_cart',
            component: shopping_cart
        },
        {
            path: '/me',
            component: me
        },
    ]
})
