<template>
    <div class="order">
        <v-header title="代购订单"><i class="iconfont icon-msnui-more"></i></v-header>
        <section class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <nav class="tab mui-scroll">
                <div class="tab__item">
                    <span class="tab__text" :class="{active: modules == ''}" @click="tab('')">全部</span>
                </div>
                <div class="tab__item">
                    <span class="tab__text" :class="{active: modules == 'unpaid'}" @click="tab('unpaid')">待付款</span>
                </div>
                <div class="tab__item">
                    <span class="tab__text" :class="{active: modules == 'pending'}" @click="tab('pending')">处理中</span>
                </div>
                <div class="tab__item">
                    <span class="tab__text" :class="{active: modules == 'arrived'}" @click="tab('arrived')">已到库</span>
                </div>
                <div class="tab__item">
                    <span class="tab__text" :class="{active: modules == 'Ordered'}" @click="tab('Ordered')">已邮递</span>
                </div>
                <div class="tab__item">
                    <span class="tab__text" :class="{active: modules == 'invalid'}" @click="tab('invalid')">无效单</span>
                </div>
            </nav>
        </section>
        <div class="mui-content" :class="{btm: modules == 'arrived'}" @scroll.passive="next($event)">
            <section v-for="item in list" class="order_list__order">
                <h4 class="order_list__order__title">
						<span class="order_list__order__title__number">
                            <v-checkbox v-if="modules == 'arrived'"></v-checkbox>
							代购订单：{{item.number}}
						</span>
                    <span class="order_list__order__title__type">{{item.statusname}}</span>
                </h4>
                <figure v-if="modules != 'arrived'" v-for="i in item.orders" class="goods">
                    <img class="goods__img" v-lazy="i.goodsimg" />
                    <figcaption class="goods__wrap">
                        <h4 class="goods__wrap__title">
                            {{i.goodsname}}
                        </h4>
                        <p class="goods__wrap__description">{{i.option}}</p>
                        <div class="goods__wrap__priceAndnumber">
                            <span class="price">￥{{i.goodsprice}}</span>
                            <span class="mui-pull-right">x{{i.goodsnum}}</span>
                        </div>
                    </figcaption>
                </figure>
                <figure v-if="modules == 'arrived'" class="goods">
                    <img class="goods__img" v-lazy="item.goodsimg" />
                    <figcaption class="goods__wrap">
                        <h4 class="goods__wrap__title">
                            {{item.goodsname}}
                        </h4>
                        <p class="goods__wrap__description">{{item.option}}</p>
                        <div class="goods__wrap__priceAndnumber">
                            <span class="price">￥{{item.goodsprice}}</span>
                            <span class="mui-pull-right">x{{item.goodsnum}}</span>
                        </div>
                    </figcaption>
                </figure>
                <p class="order_list__order__remarks">
                    {{item.orders_remark}}
                </p>
                <div class="order_list__order__info">
                    <span v-if="modules != 'arrived'" class="order_list__order__info__price">
                        合计:<span class="price">￥{{item.amount_total}}(含运费￥{{item.amount_send}}）</span>
                    </span>
                    <span v-else class="order_list__order__info__price">
                        合计:<span class="price">￥{{item.goodsprice}}(含运费￥{{item.goodsprice_def}}）</span>
                    </span>
                </div>
                <div class="order_list__order__btns">
                    <router-link v-if="modules == 'unpaid'" :to="{path: '/shopping/pay', query: {orderIds: item.orders_id}}" tag="button" class="btn_empty">去付款</router-link>
                    <router-link v-if="modules == 'arrived'" :to="{path: 'order_submit', query: {orderIds: item.oid}}" tag="button" class="btn_empty" append>提交</router-link>
                </div>
            </section>
            <v-no_data v-if="!list.length" icon="icon-zongheyewudingdan" text="您还没有订单"></v-no_data>
        </div>
        <footer class="order__footer">
            <div class="left">
                <v-checkbox></v-checkbox>
            </div>
            <div class="right">
                <button class="btn_real">提交运单</button>
            </div>
        </footer>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import vCheckbox from '@/components/checkbox/checkbox';
import vNo_data from '@/components/no_data/no_data';
import {getJSON} from '@/assets/js/common';  //公共函数库


export default
{
    components:
    {
        vHeader,
        vCheckbox,
        vNo_data
    },
    data()
    {
        return {
            modules: this.$route.query.modules ? this.$route.query.modules : '',
            orderState:
            {
                unpaid: 0,
                pending: 1,
                processing: 1,
                complete: 5,
                Ordered: 3,
                arrived: 4,
                Submit: 7,
                invalid: 6,
                '': ''
            },
            list: [],
            options:
            {
                userId: localStorage.getItem('userId'),
                orderState: null,
                starttime: '',
                endtime: '',
                p: 1,
                size: 6,
                query: ''
            },
            scrolled: false
        }
    },
    created()
    {
        // 初始状态
        this.options.orderState = this.orderState[this.modules];
        this.getList()
    },
    mounted()
    {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:
    {
        next(ev)
        {
            // 防止重入
            if (this.scrolled) return false;
            this.scrolled = true;
            // 锁定
            let el = ev.target;
            let bottom = el.scrollHeight - el.scrollTop - el.offsetHeight;
            if (bottom <= 250)
            {
                this.options.p++;
                this.getList();
            }
            //解锁
            setTimeout(() => this.scrolled = false, 1);
        },
        getList()
        {
            // console.log(this.API[this.modules != 'arrived' && this.modules !=  'pending' ? 'ORDER_LIST' : 'ORDER_GOODS_LIST'])
            getJSON
            (
                this.API[this.modules != 'arrived' ? 'ORDER_LIST' : 'ORDER_GOODS_LIST'],
                this.options,
                data =>
                {
                    let goods = this.list.concat(data.list);
                    this.list = goods;
                }
            )
        },
        tab(state)
        {
            this.modules = state;
            this.options.orderState = this.orderState[this.modules];
            this.list = [];
            this.getList()
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/parameter";
.order
{
    .btm
    {
        bottom: 50px;
    }
    .mui-slider-indicator.mui-segmented-control
    {
        position: fixed;
        top: 44px;
        z-index: 9999;
    }
    .mui-content
    {
        top: 83px;

        .mui-scroll-wrapper
        {
            border-bottom: 1px solid #d0d0d0;
        }
    }
    .iconfont
    {
        position: absolute;
        right: 5px;
        top: 0;
        color: #666666;
        font-size: 20px;
        padding: 10px;
        z-index: 999;
    }
    .tab
    {
        display: flex;
        height: 40px;
        border-bottom: 1px solid #cfcfcf;
        background: #fff;

        &__item
        {
            flex: none;
            padding: 0 20px;
            text-align: center;
        }
        &__text
        {
            font-size: 14px;
            display: inline-block;
            height: 39px;
            line-height: 39px;

            &.active
            {
                color: $theme;
                border-bottom: 2px solid $theme;
            }
        }
    }
    .goods
    {
        display: flex;
        padding-bottom: 20px;
        margin-bottom: 10px;
        border-bottom: 1px solid #eeeeee;

        &__img
        {
            width: 105px;
            height: 105px;
            flex-shrink: 0;
            margin-right: 10px;
        }
        &__wrap
        {
            width: calc(100% - 120px);
            position: relative;

            &__title
            {
                color: #000000;
                font-size: 16px;
                font-weight: normal;
                margin-top: -4px;
                line-height: normal;
            }
            &__priceAndnumber
            {
                width: 100%;
                position: absolute;
                bottom: -5px;
            }
        }
    }
    .order_list
    {
        &__order
        {
            padding: 0 12px;
            margin-bottom: 10px;
            display: flex;
            flex-direction: column;
            background: #fff;

            .goods
            {
                .price
                {
                    color: #ff6900;
                }
            }
            &__title
            {
                display: flex;
                justify-content: space-between;
                margin: 0 -12px 10px -12px;
                padding: 0 12px;
                height: 44px;
                line-height: 44px;
                font-weight: normal;
                font-size: 14px;
                border-bottom: 1px solid #efefef;

                &__type
                {
                    color: $theme;
                }
            }
            &__remarks
            {
                height: 30px;
                line-height: 30px;
                background: #eeeeee;
                border-radius: 5px;
                margin: 10px 0;
                text-indent: 10px;
            }
            &__info
            {
                display: flex;
                justify-content: flex-end;
                height: 37px;
                line-height: 37px;
                font-size: 12px;
                border-top: 1px solid #efefef;
                border-bottom: 1px solid #efefef;

                &__price
                {
                    span
                    {
                        color: #ff6900;
                    }
                }
            }
            &__btns
            {
                display: flex;
                justify-content: flex-end;
                padding: 5px 0;

                button
                {
                    margin-left: 17.5px;
                }
            }
        }
    }
    &__footer
    {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 50px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;

        .left
        {
            label
            {
                vertical-align: sub;
                margin-right: 12.5px;
            }
        }
        .right
        {
            button
            {
                margin-left: 17.5px;
            }
        }
    }
}
</style>