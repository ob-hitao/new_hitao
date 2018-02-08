import Vue from 'vue';
import Router from 'vue-router';

import home from '@/views/home/home';
import shopping from '@/views/shopping/shopping';
import transport from '@/views/transport/transport';
import shopping_cart from '@/views/shopping_cart/shopping_cart';

import user from '@/views/user/user';
import me from '@/views/user/me/me';
import checkin from '@/views/user/checkin/checkin';
import container from '@/views/user/setting/container';
import setting from '@/views/user/setting/setting/setting';
import guide from '@/views/user/setting/guide/guide';
import about from '@/views/user/setting/about/about';
import users from '@/views/user/setting/users/users';

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
                },
                {
                    path: 'setting',
                    component: container,
                    children:
                    [
                        {
                            path: '/',
                            component: setting
                        },
                        {
                            path: 'guide',
                            component: guide
                        },
                        {
                            path: 'about',
                            component: about
                        },
                        {
                            path: 'users',
                            component: users
                        }
                    ]
                }
            ]
        },
    ]
})
