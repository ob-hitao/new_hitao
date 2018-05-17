import Vue from 'vue';
import Router from 'vue-router';

/************************************* transitions **************************************/
import container from '@/components/container/container';
import setcontainer from '@/components/setcontainer/setcontainer';

/************************************* home **************************************/
import home from '@/views/home/home';

/************************************* shopping **************************************/
import shopping from '@/views/shopping/shopping';
import shopping_search from '@/views/shopping/shopping_search/shopping_search';
import pay from '@/views/shopping/pay/pay';

/************************************* transport **************************************/
import transport from '@/views/transport/transport';
import guidance from '@/views/transport/guidance/guidance';

/************************************* shopping_cart **************************************/
import shopping_cart from '@/views/shopping_cart/shopping_cart';

/************************************* user **************************************/
import user from '@/views/user/user';
import checkin from '@/views/user/checkin/checkin';
import setting from '@/views/user/setting/setting';
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
import wallet from '@/views/user/wallet/wallet';
import expenses_record from '@/views/user/wallet/expenses_record/expenses_record';
import rechange from '@/views/user/wallet/rechange/rechange';
import offline_recharge from '@/views/user/wallet/rechange/offline_recharge/offline_recharge';
import alipay from '@/views/user/alipay/alipay';
import alipayguidance from '@/views/user/alipay/alipayguidance/alipayguidance';
import invite from '@/views/user/invite/invite';
import integral from '@/views/user/integral/integral';
import help from '@/views/user/help/help';
import help_details from '@/views/user/help/help_details/help_details';
import calculation from '@/views/user/calculation/calculation';

Vue.use(Router)

export default new Router
({
    routes:
    [
        {
            path: '/',
            component: home
        },
        {
            path: '/shopping',
            component: container,
            children:
            [
                {
                    path: '/',
                    component: shopping
                },
                {
                    path: 'pay',
                    component: pay
                }
            ]
        },
        {
            path: '/transport',
            component: container,
            children:
            [
                {
                    path: '/',
                    component: transport
                },
                {
                    path: 'guidance',
                    component: guidance
                }
            ]
        },
        {
            path: '/shopping_cart',
            component: shopping_cart
        },
        {
            path: '/user',
            component: container,
            children:
            [
                {
                    path: '/',
                    component: user
                },
                {
                    path: 'checkin',
                    component: checkin
                },
                {
                    path: 'setting',
                    component: setcontainer,
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
                    path: 'wallet',
                    component: container,
                    children:
                    [
                        {
                            path: '/',
                            component: wallet
                        },
                        {
                            path: 'expenses_record',
                            component: expenses_record
                        },
                        {
                            path: 'rechange',
                            component: container,
                            children:
                            [
                                {
                                    path: '/',
                                    component: rechange,
                                },
                                {
                                    path: 'offline_recharge',
                                    component: offline_recharge,
                                }
                            ]
                        }
                    ]
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
                    path: 'alipay',
                    component: container,
                    children:
                    [
                        {
                            path: '/',
                            component: alipay,
                        },
                        {
                            path: 'alipayguidance',
                            component: alipayguidance,
                        }
                    ]
                },
                {
                    path: 'invite',
                    component: invite
                },
                {
                    path: 'integral',
                    component: integral
                },
                {
                    path: 'calculation',
                    component: calculation
                },
                {
                    path: 'help',
                    component: container,
                    children:
                    [
                        {
                            path: '/',
                            component: help
                        },
                        {
                            path: 'help_details',
                            component: help_details
                        }
                    ]
                },
                {
                    path: 'address',
                    component: container,
                    children:
                    [
                        {
                            path: '/',
                            component: address
                        },
                        {
                            path: 'add_address',
                            component: add_address
                        }
                    ]
                }
            ]
        },
        {
            path: '/shopping_search',
            component: shopping_search
        }
    ]
})
