<template>
    <div class="recharge">
        <v-header title="充值"></v-header>
        <div class="mui-content">
            <div class="plus">
                <h6>支付方式</h6>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">
                        <div class="mui-card-header mui-card-media">
                            <img src="./pay_paypal.png" />
                            <div class="mui-media-body">
                                支付宝支付
                                <p>单笔金额最高为20000元人民币</p>
                                <div class="radio">
                                    <v-checkbox></v-checkbox>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="mui-table-view-cell">
                        <div class="mui-card-header mui-card-media">
                            <img src="./pay_alipay.png" />
                            <div class="mui-media-body">
                                微信支付
                                <p>单笔金额最高为20000元人民币</p>
                                <div class="radio">
                                    <v-checkbox></v-checkbox>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="mui-table-view-cell">
                        <router-link to="offline_recharge" tag="a" class="mui-navigate-right" append>
                            <div class="mui-card-header mui-card-media">
                                <img src="./pay_bank.jpg" />
                                <div class="mui-media-body">
                                    银行汇款
                                    <p>通过海外电汇或中国大陆银行汇款至Hiato</p>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
                <div class="mui-row">
                    <form>
                        <div class="money">
                            <label for="text">金额(￥)</label>
                            <input id="text" type="text" name="" placeholder="请输入充值金额(RMB)" />
                        </div>
                        <button type="button" class="pay">立即支付</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import vCheckbox from '@/components/checkbox/checkbox';
export default
{
    components:
    {
        vHeader,
        vCheckbox
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../../assets/scss/parameter";
.recharge
{
    .mui-content
    {
        .pay
        {
            display: block;
            width: 90%;
            margin: 50px auto 10px;
            height: 45px;
            border: none;
            border-radius: 5px;
            background: $theme;
            color: #fff;
        }
        h6
        {
            padding: 13px;
            margin: 0;
            font-size: 12px;
            color: #000;
        }
        .mui-table-view-cell
        {
            &::after
            {
                right: 15px;
            }
            img
            {
                width: 41px;
                height: 41px;
                position: absolute;
                top: 50%;
                margin-top: -20.5px;
            }
            .mui-card-header
            {
                padding: 0;

                &:after
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
                .radio
                {
                    position: absolute;
                    top: 50%;
                    margin-top: -11px;
                    right: 0;
                }
            }
        }
        form
        {
            text-align: center;

            .money
            {
                margin-top: 10px;
                padding: 0 15px;
                font-size: 14px;
                text-align: left;
                background: #fff;
                color: #666666;

                input
                {
                    width: auto;
                    border: none;
                    font-size: 14px;
                    margin: 0;
                }
            }
            .off
            {
                margin-top: 15px;
            }
        }
    }
}
</style>