<template>
    <div class="order_desc">
        <v-header title="订单详情"><i class="iconfont icon-msnui-more"></i></v-header>
        <div class="mui-content">
            <section class="order_desc__info">
                <h4 class="order_desc__info__title">卖家：{{order.goodsseller}}</h4>
                <figure class="goods">
                    <img class="goods__img" v-lazy="order.goodsimg" />
                    <figcaption class="goods__wrap">
                        <h4 class="goods__wrap__title mui-ellipsis">
                            {{order.goodsname}}
                        </h4>
                        <p class="goods__wrap__description">{{order.option}}</p>
                        <div class="goods__wrap__priceAndnumber">
                            <span class="price">￥{{order.goodsprice}}</span>
                            <span class="mui-pull-right">x{{order.goodsnum}}</span>
                        </div>
                    </figcaption>
                </figure>
                <ul class="order_desc__info__list">
                    <li>
                        <span class="order_desc__info__list__left">商品备注</span>
                        <span class="order_desc__info__list__right">{{order.goodsremark}}</span>
                    </li>
                    <li>
                        <span class="order_desc__info__list__left">采购留言</span>
                        <span class="order_desc__info__list__right">{{order.orderremark}}</span>
                    </li>
                    <li>
                        <span class="order_desc__info__list__left">重量/体积</span>
                        <span class="order_desc__info__list__right">{{order.orderweight}}g</span>
                    </li>
                    <li>
                        <span class="order_desc__info__list__left">国内运费</span>
                        <span class="order_desc__info__list__right">￥{{order.sendprice}}</span>
                    </li>
                    <li>
                        <span class="order_desc__info__list__left">付款时间</span>
                        <span class="order_desc__info__list__right">{{order.addtime}}</span>
                    </li>
                    <li>
                        <span class="order_desc__info__list__left">实付款(含运费）</span>
                        <span class="order_desc__info__list__right price">￥{{Number(order.goodsprice) + Number(order.sendprice)}}</span>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import {postJSON} from '@/assets/js/common';  //公共函数库

export default
{
    components:
    {
        vHeader,
    },
    data()
    {
        return {
            userId: localStorage.getItem('userId'),
            oid: this.$route.query.id,
            order: {}
        }
    },
    created()
    {
        this.getInfo()
    },
    methods:
    {
        getInfo()
        {
            postJSON
            (
                this.API.ORDER_DETAILS,
                {
                    userId: this.userId,
                    orderId: this.oid
                },
                data =>
                {
                    data.order.addtime = new Date(data.order.addtime*1000).Format("yyyy-MM-dd hh:mm:ss");
                    this.order = data.order;
                }
            )
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.order_desc
{
    ul
    {
        padding: 0;
        margin: 0;
    }
    .price
    {
        color: #ff6900;
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

    &__process
    {
        display: flex;
        padding: 10px 12px;
        background: #fff;
        margin-bottom: 10px;

        &__icon
        {
            width: 12px;
            height: 165px;
            box-sizing: content-box;
            padding: 0 5px;
            margin-right: 10px;
        }
        .mui-table-view
        {
            width: 100%;
            margin-top: 0 !important;

            &::after, &::before
            {
                display: none;
            }
            .mui-table-view-cell
            {
                display: flex;
                justify-content: space-between;
                padding: 10px 0 14px;
                line-height: 1;

                &:first-child
                {
                    padding-top: 0;
                }
                &:last-child
                {
                    padding-bottom: 0;
                }
                &::after
                {
                    left: 0;
                    right: 0;
                }
                span
                {
                    color: #979797;

                    &:first-child
                    {
                        font-size: 14px;
                    }
                    &:last-child
                    {
                        font-size: 12px;
                    }
                }
            }
        }
    }

    &__info
    {
        background: #fff;
        padding: 0 15px;

        .goods
        {
            padding-bottom: 5px;
            margin-bottom: 5px;

            &__img
            {
                width: 65px;
                height: 65px;
            }
            &__wrap
            {
                width: calc(100% - 75px);

                &__title
                {
                    -webkit-line-clamp: 1;
                }
                &__priceAndnumber
                {
                    bottom: 0;

                    .mui-pull-right
                    {
                        color: #999999;
                    }
                }
            }
        }
        &__title
        {
            padding: 15px 0;
            font-size: 14px;
            font-weight: normal;
        }
        &__list
        {
            li
            {
                display: flex;
                width: 100%;
                justify-content: space-between;
                font-size: 14px;
                list-style: none;
                line-height: 28px;

                &:last-child
                {
                    .order_desc__info__list__left
                    {
                        color: #000;
                    }
                    .order_desc__info__list__right
                    {
                        font-size: 16px;
                    }
                }
            }

            &__left
            {
                color: #666666;
            }
        }
    }
}
</style>