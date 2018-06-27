<template>
    <div class="coupon">
        <v-header title="优惠券">
            <div class="coupon__right">
                <router-link to="exchange" tag="span" append>兑换</router-link>
                <i class="iconfont icon-wentiquestions1"></i>
            </div>
        </v-header>
        <div class="mui-content">
            <nav class="tab">
                <div class="tab__item">
                    <span class="tab__text active">全部</span>
                </div>
                <div class="tab__item">
                    <span class="tab__text">未使用</span>
                </div>
                <div class="tab__item">
                    <span class="tab__text">已使用</span>
                </div>
                <div class="tab__item">
                    <span class="tab__text">待激活</span>
                </div>
            </nav>
            <section class="coupon_list__item">
                <div class="coupon_list__item__main">
                    <div class="coupon_list__item__main__number">
                        ￥10
                    </div>
                    <div class="coupon_list__item__main__info">
                        <span class="coupon_list__item__main__info__name">国际运费抵用券</span><br />
                        <span class="coupon_list__item__main__info__number">NO.123</span>
                    </div>
                </div>
                <div class="coupon_list__item__aside">
                    <div class="coupon_list__item__aside__info">
						<span class="coupon_list__item__aside__info__get">
							<i class="iconfont icon-youhuiquan01"></i>获得方式：Point EXC
						</span><br />
                        <span class="coupon_list__item__aside__info__time">
							<i class="iconfont icon-shijian"></i>有效期至：2018-06-24
						</span>
                    </div>
                </div>
            </section>
            <!--<v-no_data icon="icon-youhuiquan01" text="您没有优惠券哦"></v-no_data>-->
        </div>
    </div>
</template>

<script>
    import vHeader from '@/components/header/header';
    import vNo_data from '@/components/no_data/no_data';

    export default
    {
        components:
        {
            vHeader,
            vNo_data
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/parameter";
.coupon
{
    &__right
    {
        position: absolute;
        z-index: 999;
        right: 0;
        padding: 11px;
        font-size: 16px;
        color: #666666;

        .iconfont
        {
            margin-left: 20px;
            font-size: 22px;
        }
    }
    .tab
    {
        display: flex;
        height: 40px;
        border-bottom: 1px solid #cfcfcf;
        background: #fff;

        &__item
        {
            flex: auto;
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
    .coupon_list
    {
        &__item
        {
            height: 135px;
            margin-bottom: 10px;
            padding: 13px;
            background: #fff url("./coupon_unused.png") no-repeat 95% 85% / 91.5px 64.5px;
            &__main
            {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #efefef;
                padding-bottom: 13px;

                &__number
                {
                    font-size: 36px;
                    color: #ff6900;
                }
                &__info
                {
                    color: #666666;
                    text-align: right;

                    &__name
                    {
                        font-size: 15px;
                    }
                    &__number
                    {
                        font-size: 12px;
                    }
                }
            }
            &__aside
            {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-top: 10px;

                &__info
                {
                    span
                    {
                        color: #666666;
                        font-size: 12px;

                        .iconfont
                        {
                            font-size: 17px;
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
    }

}
</style>