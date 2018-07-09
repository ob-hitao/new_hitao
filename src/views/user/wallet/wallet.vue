<template>
    <div class="wallet">
        <v-header title="我的钱包">
            <router-link to="expenses_record" tag="span" class="edit" append>消费记录</router-link>
        </v-header>
        <div class="mui-content">
            <div class="plus">
                <figure class="wallet__wrap">
                    <i class="iconfont icon-qianbao1"></i>
                    <figcaption class="wallet__details">
                        当前余额(￥)
                        <span>￥{{money}}</span>
                    </figcaption>
                </figure>
                <router-link to="rechange" tag="button" class="rechange" append>充值</router-link>
                <router-link to="" tag="button" class="withdraw" append>提现</router-link>
                <!--<ul class="mui-table-view">-->
                    <!--<li class="mui-table-view-cell">充值记录</li>-->
                    <!--<li class="mui-table-view-cell wallet__list">-->
                        <!--<div class="wallet__list__left">-->
                            <!--中国银行-->
                            <!--<p>2016-11-09 09:08</p>-->
                        <!--</div>-->
                        <!--<div class="wallet__list__right">-->
                                <!--<span class="wallet__list__right__price green">-->
                                    <!--+￥100-->
                                <!--</span>-->
                            <!--<button class="btn_empty">-->
                                <!--退款-->
                            <!--</button>-->
                        <!--</div>-->
                    <!--</li>-->
                    <!--<li class="mui-table-view-cell wallet__list">-->
                        <!--<div class="wallet__list__left">-->
                            <!--中国银行-->
                            <!--<p>2016-11-09 09:08</p>-->
                        <!--</div>-->
                        <!--<div class="wallet__list__right">-->
                                <!--<span class="wallet__list__right__price yellow">-->
                                     <!-- -￥600-->
                                <!--</span>-->
                            <!--<button class="btn_empty">-->
                                <!--退款-->
                            <!--</button>-->
                        <!--</div>-->
                    <!--</li>-->
                <!--</ul>-->
            </div>
        </div>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
export default
{
    components:
    {
        vHeader
    },
    data()
    {
        return {
            money: this.$route.query.money
        }
    },
    created()
    {

    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/parameter";
.wallet
{
    .edit
    {
        position: absolute;
        right: 5px;
        top: 0;
        color: #666666;
        font-size: 14px;
        padding: 10px;
        z-index: 999;
    }
    .mui-table-view-cell:first-child::after
    {
        left: 0;
    }
    &__wrap
    {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 22px;
        background: #efefef;

        .iconfont
        {
            margin: 50px 0;
            font-size: 102px;
            color: #dddddd;
        }
    }
    &__details
    {
        font-size: 14px;

        span
        {
            display: block;
            margin-top: 10px;
            font-size: 18px;
            color: $theme;
        }
    }
    .rechange
    {
        display: block;
        width: 90%;
        margin: 0 auto 10px;
        height: 45px;
        border: none;
        border-radius: 5px;
        background: $theme;
        color: #fff;
    }
    .withdraw
    {
        @extend .rechange;
        margin-bottom: 30px;
        background: #fff;
        color: $theme;
    }
    &__list
    {
        height: 60px;
        display: flex;
        justify-content: space-between;

        &::after
        {
            right: 15px;
        }
        &__left
        {
            font-size: 14px;

            p
            {
                font-size: 12px;
            }
        }
        &__right
        {
            &__price
            {
                font-size: 15px;
                line-height: 35px;
                margin-right: 15px;

                &.green
                {
                    color: #14d195;
                }
                &.yellow
                {
                    color: #ff6900;

                    & + button
                    {
                        visibility: hidden;
                    }
                }
            }
        }
    }
}
</style>