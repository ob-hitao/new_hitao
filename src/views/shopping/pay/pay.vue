<template>
    <div class="pay">
        <v-header title="支付"></v-header>
        <div class="mui-content">
            <div class="plus">
                <section class="settlement">
                    <h4  class="settlement__title">结算信息</h4>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <span>应付总额：</span>
                            <span class="price">￥{{moneyInfo.totalmoney}}</span>
                        </li>
                        <li class="mui-table-view-cell">
                            <span>账户余额：</span>
                            <span class="price">￥{{moneyInfo.user_balance}}</span>
                        </li>
                    </ul>
                </section>
                <section class="payment_method">
                    <h4  class="settlement__title">支付方式</h4>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell" @click="type = 'PayPal'">
                            <div class="mui-card-header mui-card-media">
                                <img src="./pay_paypal.png" />
                                <div class="mui-media-body">
                                    PayPal
                                    <p>在线充值，快速到账，要收手续费</p>
                                    <v-checkbox :checked="type == 'PayPal'"></v-checkbox>
                                </div>
                            </div>
                        </li>
                        <li class="mui-table-view-cell" @click="type = '支付宝支付'">
                            <div class="mui-card-header mui-card-media">
                                <img src="./pay_alipay.png" />
                                <div class="mui-media-body">
                                    支付宝支付
                                    <p>在线充值，快速到账，无手续费</p>
                                    <v-checkbox :checked="type == '支付宝支付'"></v-checkbox>
                                </div>
                            </div>
                        </li>
                        <li class="mui-table-view-cell" @click="type = '微信支付'">
                            <div class="mui-card-header mui-card-media">
                                <img src="./pay_wechat.png" />
                                <div class="mui-media-body">
                                    微信支付
                                    <p>在线充值，快速到账，无手续费</p>
                                    <v-checkbox :checked="type == '微信支付'"></v-checkbox>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
        <footer @click="pay" class="footer">确定支付</footer>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import vCheckbox from '@/components/checkbox/checkbox';
import {postJSON} from '@/assets/js/common';  //公共函数库


export default
{
    components:
    {
        vHeader,
        vCheckbox
    },
    data()
    {
        return {
            userId: localStorage.getItem('userId'),
            orderIds: this.$route.query.orderIds,
            type: '',
            moneyInfo: {}
        }
    },
    created()
    {
        this.getMoney()
    },
    methods:
    {
        getMoney()
        {
            postJSON
            (
                this.API.ORDER_ORDERPAY,
                {
                    userId: this.userId,
                    orderIds: this.orderIds
                },
                data => this.moneyInfo = data
            )
        },
        pay()
        {
            postJSON
            (
                this.API.ORDER_ORDERCONFIRM,
                {
                    userId: this.userId,
                    orderIds: this.orderIds
                },
                data =>
                {
                    if(data.msg || data)
                    {
                        this.$router.push({path: '/user/order?modules=pending'});
                    }
                }
            );
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/parameter";
.pay
{
    .settlement
    {
        &__title
        {
            background: #efefef;
            font-size: 12px;
            font-weight: normal;
            margin: 0;
            padding: 11px 15px;
        }
        .mui-table-view-cell
        {
            display: flex;
            justify-content: space-between;
            font-size: 14px;

            .price
            {
                color: #ff6900;
            }
        }
    }
    .payment_method
    {
        .mui-table-view-cell
        {
            .checkbox
            {
                position: absolute;
                top: 50%;
                margin-top: -11px;
                right: 0;
            }
            .mui-card-header
            {
                padding: 0;

                &::after
                {
                    display: none;
                }
            }
            .mui-media-body
            {
                line-height: 23px;
                position: relative;
                margin-left: 50px;

                p
                {
                    padding-right: 25px;
                }
            }
            img
            {
                width: 41px;
                height: 41px;
                position: absolute;
                top: 50%;
                margin-top: -20.5px;
            }
        }
    }
    .footer
    {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        z-index: 999;
        font-size: 18px;
        text-align: center;
        background: $theme;
        color: #fff;
    }
}
</style>