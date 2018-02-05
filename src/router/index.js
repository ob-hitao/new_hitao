import Vue from 'vue';
import Router from 'vue-router';

import home from '@/views/home/home';
import shopping from '@/views/shopping/shopping';
import transport from '@/views/transport/transport';
import shopping_cart from '@/views/shopping_cart/shopping_cart';

import user from '@/views/user/user';
import me from '@/views/user/me/me';
import checkin from '@/views/user/checkin/checkin';

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
            path: '/user/',
            component: user,
            children:
            [
                {
                    path: '/',
                    component: me
                },
                {
                    path: 'checkin',
                    component: checkin
                }
            ]
        },
    ]
})
