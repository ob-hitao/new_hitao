import Vue from 'vue';
import Router from 'vue-router';

import home from '@/views/home/home';

import shopping from '@/views/shopping/shopping';
import shopping_search from '@/views/shopping/shopping_search/shopping_search';

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
import language from '@/views/user/setting/language/language';
import login from '@/views/user/login/login';
import warehouse from '@/views/user/warehouse/warehouse';
import feedback from '@/views/user/feedback/feedback';
import user_info from '@/views/user/user_info/user_info';
import notice from '@/views/user/notice/notice';
import collection from '@/views/user/collection/collection';
import address from '@/views/user/address/address';
import add_address from '@/views/user/address/add_address/add_address';

Vue.use(Router)

export default new Router
({
    routes:
    [
        // 基本界面
        {
            path: '/',
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
                            path: 'users',
                            component: users
                        },
                        {
                            path: 'language',
                            component: language
                        },
                        {
                            path: 'guide',
                            component: guide
                        },
                        {
                            path: 'about',
                            component: about
                        }
                    ]
                },
                {
                    path: 'login',
                    component: login
                },
                {
                    path: 'warehouse',
                    component: warehouse
                },
                {
                    path: 'feedback',
                    component: feedback
                },
                {
                    path: 'user_info',
                    component: user_info
                },
                {
                    path: 'notice',
                    component: notice
                },
                {
                    path: 'collection',
                    component: collection
                },
                {
                    path: 'address',
                    component: address
                },
                {
                    path: 'address/add_address',
                    component: add_address
                }
            ]
        },
        {
            path: '/shopping_search',
            component: shopping_search
        }
    ]
})
