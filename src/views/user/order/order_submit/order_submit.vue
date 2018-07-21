<template>
    <div class="order_submit">
        <v-header title="提交运单"></v-header>
        <div class="mui-content">
            <router-link to="/user/address" tag="section" class="basic_info">
                <div class="basic_info__receipt">
                    <span>收货人: {{info.address_array[0].consignee}}</span>
                    <span>{{info.address_array[0].tel}}</span>
                </div>
                <div>国家: {{info.address_array[0].CountryName}}</div>
                <div>地址: {{info.address_array[0].address}}</div>
                <div>邮编: {{info.address_array[0].zip}}</div>
            </router-link>
            <section class="goods_info">
                <figure v-for="item in info.order_array" class="goods">
                    <img class="goods__img" v-lazy="item.goodsimg" />
                    <figcaption class="goods__wrap">
                        <h4 class="goods__wrap__title mui-ellipsis">
                            {{item.goodsname}}
                        </h4>
                        <p class="goods__wrap__description">{{item.option}}</p>
                        <div class="goods__wrap__priceAndnumber">
                            <span class="price">￥{{item.goodsprice}}</span>
                            <span class="mui-pull-right">x{{item.goodsnum}}</span>
                        </div>
                    </figcaption>
                </figure>
            </section>
            <section class="ps">
                1.上面的重量是物品的实际重量，不包括包装材料的重量<br />
                2.包裹的实际重量会改变，当我们打包好以后<br />
                3.如果你选择 dhl ,fedex,6ls-express,aramex 等其他快
                递 , 要计算体积重量:长 X 宽 X 高 cm/5000,体积重量与物理重量
                按大的计算运费
            </section>
            <section class="list">
                <ul class="mui-table-view">
                    <router-link :to="{path: 'order_logistics', query: {options}}" tag="li" class="mui-table-view-cell" append>
                        <a class="mui-navigate-right">
                            <span class="description">选择物流</span>
                            <span v-if="logistics">{{logistics.shipping_name}}</span>
                        </a>
                    </router-link>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="description">优惠券</span>
                            <span>
                                <select v-model="coupon">
                                    <option>不使用</option>
                                    <option :value="{cid: coupon.cid, money: coupon.money}" v-for="coupon in info.coupon_array">{{coupon.money}}元运费抵扣券 ￥{{coupon.money}}</option>
                                </select>
                            </span>
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="description">服务费</span>
                            <span class="price">￥{{info.cost.server_fee}}</span>
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="description">运费</span>
                            <span class="price" v-if="logistics">￥{{logistics.total_fee}}</span>
                        </a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="description">运费折扣</span>
                            <span class="green">￥{{info.cost.fee_discount}}</span>
                        </a>
                    </li>
                    <li @click="service.vacuum = !service.vacuum" class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="description">商品包装</span>
                            <span>
                                真空包装
                                <input type="checkbox" v-model="service.vacuum">
                            </span>
                        </a>
                    </li>
                    <li @click="service.needphoto = !service.needphoto" class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="description">拍照服务</span>
                            <span>
                                拍照
                                <input type="checkbox" v-model="service.needphoto">
                            </span>
                        </a>
                    </li>
                    <li @click="service.insurance = !service.insurance" class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <span class="description">运费险</span>
                            <span>商品价格的2%
                                <span class="price">￥{{info.cost.insurancefee}}</span>
                                <input type="checkbox" v-model="service.insurance">
                            </span>
                        </a>
                    </li>
                    <li class="mui-table-view-cell zhus">
                        <span class="description">商品备注</span>
                        <input v-model="remark" class="text" type="text" placeholder="选填：填写对本次交易的说明等" />
                    </li>
                </ul>
            </section>
        </div>
        <footer class="submit">
            共{{info.order_array.length}}件商品，总计  <span class="price">￥{{totalMoney}}</span><button @click="pay">前往付款</button>
        </footer>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import {postJSON, yesAlert} from '@/assets/js/common';  //公共函数库

export default
{
    components:
    {
        vHeader,
    },
    data()
    {
        return {
            options:
            {
                userId: localStorage.getItem('userId'),
                orderIds: this.$route.query.orderIds,
                country: {}
            },
            info:
            {
                address_array: [{}],
                order_array: [],
                cost: {},
                addressId: {}
            },
            service:
            {
                vacuum: false,
                insurance: false,
                needphoto: false
            },
            remark: '',
            coupon: {},
            logistics: this.$route.query.logistics
        }
    },
    computed:
    {
        totalMoney()
        {
            let money = 0,
                info = this.info,
                service = this.service;

            // 物流费
            if (this.logistics) money += this.logistics.total_fee * info.cost.fee_discount;
            // 服务费
            money += info.cost.server_fee;
            // 保险费
            money += service.insurance ? info.cost.insurance_fee : 0;
            // 拍照费
            money += service.needphoto ? info.cost.photo_fee : 0;
            // 包装费
            money += service.vacuum ? info.cost.vacuum_fee : 0;
            // 优惠券
            if (this.coupon.money) money -= Number(this.coupon.money);

            return money.toFixed(2);
        }
    },
    created()
    {
        this.getGoods()

        let _back = mui.back;
        if (this.logistics)
        {
            mui.back = () =>
            {
                this.$router.push({path: '/user/order', query: {modules: 'arrived'}})
            }
        }
        else
        {
            mui.back = _back;
        }
    },
    methods:
    {
        getGoods()
        {
            postJSON
            (
                this.API.ORDER_PAYMENT,
                {
                    userId: this.options.userId,
                    orderIds: this.options.orderIds
                },
                data =>
                {
                    this.info = data;
                    if (data.address_array.length)
                    {
                        this.options.country = data.address_array[0].country;
                        this.options.addressId = data.address_array[0].aid;
                    }
                }
            );
        },
        pay()
        {
            if (!this.logistics) return yesAlert('请选择物流');

            postJSON
            (
                this.API.ORDER_PAYCONFIRM,
                {
                    userId: this.options.userId,
                    orderIds: this.options.orderIds,
                    couponId: this.coupon.cid,
                    shippingAreaId: this.logistics.shipping_area_id,
                    addressId: this.options.addressId,
                    remark: this.remark,
                    insurance: this.service.insurance ? 1 : 0,
                    needphoto: this.service.needphoto ? 1 : 0,
                    vacuum: this.service.vacuum ? 1 : 0
                },
                data =>
                {
                    if(data.sid)
                    {
                        this.$router.push({path: '/user/waybill', query: {modules: 'mypackage'}})
                    }
                    else if(data.error_code==-2)
                    {
                        yesAlert('余额不足', data =>
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
@import "../../../../assets/scss/parameter";
.order_submit
{
    .mui-content
    {
        bottom: 50px;
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
    .price
    {
        color: #ff6900;
    }
    padding-bottom: 60px;

    .description
    {
        color: #666666;
        font-size: 14px;
    }
    .green
    {
        color: #14d195;
    }
    .basic_info
    {
        font-size: 14px;
        padding: 12px;
        background: #fff;
        position: relative;
        margin-bottom: 10px;

        &__receipt
        {
            display: flex;
            justify-content: space-between;
        }
        &__icon
        {
            width: 14px;
            height: 14px;
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    .goods_info
    {
        background: #fff;
        padding: 12px;

        .goods
        {
            padding-bottom: 10px;

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
                    margin: 0;
                }
                &__priceAndnumber
                {
                    bottom: 0;
                }
            }
        }
        &__weight
        {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
        }
    }
    .ps
    {
        padding: 12px;
        font-size: 12px;
    }
    .list
    {
        .mui-table-view-cell
        {
            &::after
            {
                right: 15px;
            }
            .mui-navigate-right
            {
                display: flex;
                justify-content: space-between;
                padding-right: 35px;
                font-size: 14px;
            }
            select
            {
                margin: 0;
                padding: 0;
                background: transparent;
            }
        }
        .icon
        {
            width: 16px;
            height: 16px;
            vertical-align: sub;
        }
        .zhus
        {
            display: flex;

            .description
            {
                width: 80px;
            }
            .text
            {
                height: auto;
                border: none;
                padding: 0;
                font-size: 14px;
                margin: 0;
                background: transparent;
                line-height: 1;
            }
        }
    }
    .submit
    {
        position: fixed;
        bottom: 0;
        padding: 12px;
        width: 100%;
        height: 50px;
        font-size: 12px;
        color: #666666;
        background: #fff;

        .price
        {
            font-size: 16px;
        }
        button
        {
            position: absolute;
            top: 0;
            right: 0;
            width: 100px;
            height: 100%;
            background: $theme;
            color: #fff;
            font-size: 16px;
            border: none;
            border-radius: 0;
        }
    }
}
</style>