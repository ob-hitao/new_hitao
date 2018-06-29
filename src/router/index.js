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
import shopping_list from '@/views/shopping/shopping_list/shopping_list';
import shopping_desc from '@/views/shopping/shopping_list/shopping_desc/shopping_desc';
import shopping_market from '@/views/shopping/shopping_list/shopping_desc/shopping_market/shopping_market';

/************************************* transport **************************************/
import transport from '@/views/transport/transport';
import guidance from '@/views/transport/guidance/guidance';

/************************************* shopping_cart **************************************/
import shopping_cart from '@/views/shopping_cart/shopping_cart';
import clearing from '@/views/shopping_cart/clearing/clearing';

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
import coupon from '@/views/user/coupon/coupon';
import exchange from '@/views/user/coupon/exchange/exchange';

import order from '@/views/user/order/order';
import order_desc from '@/views/user/order/order_desc/order_desc';
import order_submit from '@/views/user/order/order_submit/order_submit';
import order_logistics from '@/views/user/order/order_submit/order_logistics/order_logistics';

import waybill from '@/views/user/waybill/waybill';
import mypackage_desc from '@/views/user/waybill/mypackage_desc/mypackage_desc';


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
                },
                {
                    path: 'shopping_list',
                    component: container,
                    children:
                    [
                        {
                            path: '/',
                            component: shopping_list
                        },
                        {
                            path: 'shopping_desc',
                            component: container,
                            children:
                            [
                                {
                                    path: '/',
                                    component: shopping_desc
                                },
                                {
                                    path: 'shopping_market',
                                    component: shopping_market
                                }
                            ]
                        }
                    ]
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
            component: container,
            children:
            [
                {
                    path: '/',
                    component: shopping_cart
                },
                {
                    path: 'clearing',
                    component: clearing
                }
            ]
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
                },
                {
                    path: 'coupon',
                    component: container,
                    children:
                    [
                        {
                            path: '/',
                            component: coupon
                        },
                        {
                            path: 'exchange',
                            component: exchange
                        }
                    ]
                },
                {
                    path: 'order',
                    component: container,
                    children:
                    [
                        {
                            path: '/',
                            component: order
                        },
                        {
                            path: 'order_desc',
                            component: order_desc
                        },
                        {
                            path: 'order_submit',
                            component: container,
                            children:
                            [
                                {
                                    path: '/',
                                    component: order_submit
                                },
                                {
                                    path: 'order_logistics',
                                    component: order_logistics
                                }
                            ]
                        }
                    ]
                },
                {
                    path: 'waybill',
                    component: waybill
                },
                {
                    path: 'waybill/mypackage_desc',
                    component: mypackage_desc
                }
            ]
        },
        {
            path: '/shopping_search',
            component: shopping_search
        }
    ]
})
