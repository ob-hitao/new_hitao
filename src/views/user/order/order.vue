<template>
    <div class="order">
        <v-header title="代购订单"><i class="iconfont icon-msnui-more"></i></v-header>
        <div class="mui-content">
            <section class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <nav class="tab mui-scroll">
                    <div class="tab__item">
                        <span class="tab__text active">全部</span>
                    </div>
                    <div class="tab__item">
                        <span class="tab__text">待付款</span>
                    </div>
                    <div class="tab__item">
                        <span class="tab__text">处理中</span>
                    </div>
                    <div class="tab__item">
                        <span class="tab__text">已到库</span>
                    </div>
                    <div class="tab__item">
                        <span class="tab__text">已邮递</span>
                    </div>
                    <div class="tab__item">
                        <span class="tab__text">无效单</span>
                    </div>
                </nav>
            </section>
            <section class="order_list__order">
                <h4 class="order_list__order__title">
						<span class="order_list__order__title__number">
                            <v-checkbox></v-checkbox>
							代购订单：DG0038022
						</span>
                    <span class="order_list__order__title__type">待付款</span>
                </h4>
                <figure class="goods">
                    <img class="goods__img" src="./avatar@2x.png" />
                    <figcaption class="goods__wrap">
                        <h4 class="goods__wrap__title">
                            蕾丝送吊带2017春夏新款韩版直筒H型两件套
                        </h4>
                        <p class="goods__wrap__description">颜色:白色; 尺码:S</p>
                        <div class="goods__wrap__priceAndnumber">
                            <span class="price">￥149.40</span>
                            <span class="mui-pull-right">x1</span>
                        </div>
                    </figcaption>
                </figure>
                <p class="order_list__order__remarks">
                    打包到仓库7天后再发货
                </p>
                <div class="order_list__order__info">
                    <span>卖家:C小小XIAOXIAO</span>
                    <span class="order_list__order__info__price">
                        合计:<span class="price">合计:￥149.40(含运费￥0.00）</span>
                    </span>
                </div>
                <div class="order_list__order__btns">
                    <button class="btn_empty">去付款</button>
                </div>
            </section>
            <!--<v-no_data icon="icon-zongheyewudingdan" text="您还没有订单"></v-no_data>-->
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

export default
{
    components:
    {
        vHeader,
        vCheckbox,
        vNo_data
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/parameter";
.order
{
    .mui-content
    {
        bottom: 50px;
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
                justify-content: space-between;
                height: 37px;
                line-height: 37px;
                font-size: 12px;
                border-top: 1px solid #efefef;
                border-bottom: 1px solid #efefef;
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