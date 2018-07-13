<template>
    <div class="clearing">
        <v-header title="购物车结算"></v-header>
        <div class="mui-content">
            <section v-for="item in info.list" class="main">
                <ul class="mui-table-view shadow br">
                    <li class="mui-table-view-cell">
                        <figure class="goods">
                            <img class="goods__img" v-lazy="item.goodsimg" />
                            <figcaption class="goods__wrap">
                                <h4 class="goods__wrap__title">
                                    {{item.goodsname}}
                                </h4>
                                <p class="goods__wrap__description">{{item.option}}</p>
                                <div class="goods__wrap__priceAndnumber">
                                    <span class="price">￥{{item.goodsprice}}</span>
                                    <span class="mui-pull-right">×{{item.goodsnum}}</span>
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                    <li class="mui-table-view-cell">
                        <span class="ps">商品备注</span>
                        <input type="text" v-model="item.goodsRemark" />
                    </li>
                    <li class="mui-table-view-cell freight">
                        <span class="ps">快递运费</span>
                        ￥{{item.sendprice}}
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="ps">商品包装</span>
                            <select v-model="item.packaging">
                                <option value="0">不拆包</option>
                                <option value="1">拆包</option>
                            </select>
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="ps">拍照服务</span>
                            <select v-model="item.isphoto">
                                <option value="0">不拍照</option>
                                <option value="1">拍照</option>
                            </select>
                        </a>
                    </li>
                </ul>
            </section>
            <section class="note">
                注意：<br />
                1.包装是指原包装，如果您要求放下包装，我们不对易碎物品负责。<br />
                2.从同一卖方收取国内运费，国内偏差将由我方调整。<br />
                3.价格低于500日元需要支付“拍照”（1日元1件）。
            </section>
            <footer class="confirm_footer">
                <span>共{{length}}件商品，总计 <span class="price">￥{{totalPrice}}</span></span>
                <button @click="toPay" type="button" class="btn_real">前往付款</button>
            </footer>
        </div>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import {postJSON, yesAlert} from '@/assets/js/common';  //公共函数库

export default
{
    components:
    {
        vHeader
    },
    data()
    {
        return {
            cartIds: this.$route.query.cartIds,
            userId: localStorage.getItem('userId'),
            info: {},
            length: 0,
            unpack: [],
            photo: []
        }
    },
    computed:
    {
        totalPrice()
        {
            let price = this.info.money;
            this.unpack = [];
            this.photo = [];
            for (let i in this.info.list)
            {
                if (this.info.list[i].packaging == '1')
                {
                    this.unpack.push(1);
                    price += 0;
                }
                else
                {
                    this.unpack.push(0);
                }

                if (this.info.list[i].isphoto == '1')
                {
                    this.photo.push(1);
                    price += 1;
                }
                else
                {
                    this.photo.push(0);
                }
            }
            return price;
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
                this.API.CART_PAYMENT,
                {
                    userId: this.userId,
                    cartIds: this.cartIds
                },
                data =>
                {
                    this.info = data;
                    this.length = data.list.length;
                }
            );
        },
        toPay()
        {
            postJSON
            (
                this.API.CART_PAY,
                {
                    userId: this.userId,
                    cartId: this.cartIds,
                    unpack: String(this.unpack),
                    photo: String(this.photo)
                },
                data =>
                {
                    if(data.orderIds)
                    {
                        if(data.approval == 'Y')
                        {
                            yesAlert('购买失败！',data =>
                            {
                                mui.back();
                            });
                        }
                        else
                        {
                            this.$router.push({path: '/shopping/pay', query: {orderIds: data.orderIds}})
                        }
                    }
                    else if(data.error_code == -2)
                    {
                        yesAlert('余额不足！', data =>
                        {
                            this.$router.push({path: '/user/wallet/rechange'})
                        })
                    }
                }
            );
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/parameter";
@import "../../../assets/scss/mixin";
.clearing
{
    .price
    {
        color: #ff6900;
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
                @include line-omitted;
            }
            &__description
            {
                @include line-omitted;
            }
            &__priceAndnumber
            {
                width: 100%;
                position: absolute;
                bottom: -5px;
            }
        }
    }
    .mui-table-view::after {
        height: 0px;
    }
    .mui-table-view::before {
        height: 0px;
    }
    .shopping_cart_payment_last::after {
        height: 0px;
    }
    .mui-content
    {
        padding-bottom: 40px !important;
    }
    .main
    {
        .country
        {
            color: #01a6ff;
            position: absolute;
            right: 40px;
        }
        .icon-help
        {
            width: 21px;
            height: 21px;
            margin-left: 10px;
            vertical-align: top;
        }
        .mui-table-view
        {
            margin-bottom: 10px;
        }
        .mui-table-view-cell::after
        {
            right: 15px;
        }
        .goods
        {
            padding-bottom: 0;
            margin-bottom: 0;
            border-bottom: none;

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
                &__description
                {
                    -webkit-line-clamp: 1;
                }
            }
        }
        .ps
        {
            font-size: 14px;
            color: #666666;
        }
        input
        {
            width: auto;
            height: auto;
            padding: 0;
            font-size: 14px;
            margin-bottom: 0;
            border: none;
            background: transparent;
        }
        select
        {
            height: auto;
            width: auto;
            margin: 0;
            padding: 0;
            background: transparent;
        }
        .freight
        {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
        }
        .mui-navigate-right
        {
            font-size: 14px;
            padding-right: 35px;
            display: flex;
            justify-content: space-between;
        }
    }

    .note
    {
        padding: 12px;
        font-size: 12px;
    }

    .confirm_footer
    {
        width: 100%;
        height: 40px;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        bottom: 0;
        background: #fff;
        padding-left: 15px;
        color: #666666;
        font-size: 12px;
        z-index: 998;

        .price
        {
            font-size: 16px;
        }
        button
        {
            width: 100px;
            height: 100%;
            border-radius: 0;
            background: $theme;
            border-color: $theme;
            color: #fff;
        }
    }
}
</style>