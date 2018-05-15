<template>
    <div class="transport">
        <div class="transport__container">
            <div class="plus">
                <h2 class="title">转运</h2>
                <section class="main">
                    <div class="tab">
                        <button @click="transportFlag = true" :class="{active: transportFlag}">代购服务</button>
                        <button @click="transportFlag = false" :class="{active: !transportFlag}">国际转运</button>
                    </div>
                    <div v-show="transportFlag" class="dg">
                        <figure class="dg__item">
                            <div class="dg__icon"></div>
                            <figcaption class="dg__content">
                                <h4 class="dg__title">物美价廉</h4>
                                <p class="dg__text">在淘宝或其他购物网站上挑选您想要的商品</p>
                            </figcaption>
                        </figure>
                        <figure class="dg__item">
                            <div class="dg__icon"></div>
                            <figcaption class="dg__content">
                                <h4 class="dg__title">快速处理</h4>
                                <p class="dg__text">周一到周六我们会在24小时之内处理你的订单或者包裹</p>
                            </figcaption>
                        </figure>
                        <figure class="dg__item">
                            <div class="dg__icon"></div>
                            <figcaption class="dg__content">
                                <h4 class="dg__title">服务费</h4>
                                <p class="dg__text">普通会员：6%，黄金会员：5%，铂金会员：4%，钻石会员：3%</p>
                            </figcaption>
                        </figure>
                        <figure class="dg__item">
                            <div class="dg__icon"></div>
                            <figcaption class="dg__content">
                                <h4 class="dg__title">6*14 快捷服务</h4>
                                <p class="dg__text">我们在周一到周六提供14个小时的在线服务</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div v-show="!transportFlag" class="zy">
                        <figure class="dg__item">
                            <div class="dg__icon"></div>
                            <figcaption class="dg__content">
                                <h4 class="dg__title">省钱省时</h4>
                                <p class="dg__text">你可以自己在国内任何网站购买，然后寄到我们仓库</p>
                            </figcaption>
                        </figure>
                        <figure class="dg__item">
                            <div class="dg__icon"></div>
                            <figcaption class="dg__content">
                                <h4 class="dg__title">无服务费</h4>
                                <p class="dg__text">我们不收取任何服务费，节省了你的费用</p>
                            </figcaption>
                        </figure>
                        <figure class="dg__item">
                            <div class="dg__icon"></div>
                            <figcaption class="dg__content">
                                <h4 class="dg__title">低运费</h4>
                                <p class="dg__text">我们提供10几种低价的运输方式，总有一种适合你</p>
                            </figcaption>
                        </figure>
                        <figure class="dg__item">
                            <div class="dg__icon"></div>
                            <figcaption class="dg__content">
                                <h4 class="dg__title">验货服务</h4>
                                <p class="dg__text">如果有需要，我们提供验货服务，可以拍货物的照片给你</p>
                            </figcaption>
                        </figure>
                    </div>
                </section>
                <section class="links">
                    <figure>
                        <div class="links__icon"></div>
                        <figcaption class="links__desc">转运订单</figcaption>
                    </figure>
                    <figure>
                        <div class="links__icon"></div>
                        <figcaption class="links__desc">仓库地址</figcaption>
                    </figure>
                    <router-link to="guidance" tag="figure" append>
                        <div class="links__icon"></div>
                        <figcaption class="links__desc">转运指引</figcaption>
                    </router-link>
                    <figure>
                        <div class="links__icon"></div>
                        <figcaption class="links__desc">运费估算</figcaption>
                    </figure>
                </section>
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import vFooter from '@/components/footer/footer';

export default
{
    components:
    {
        vFooter
    },
    data()
    {
        return {
            transportFlag: true
        }
    },
    created()
    {
        this.taggleBg('#fff', 'dark');
    },
    beforeDestroy()
    {
        this.taggleBg('#e95168', 'light');
    },
    methods:
    {
        taggleBg(bg, style)
        {
            mui.plusReady(() =>
            {
                // 系统顶部样式
                plus.navigator.setStatusBarBackground(bg);
                plus.navigator.setStatusBarStyle(style);
            });
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../assets/scss/mixin";
.transport
{
    &__container
    {
        position: absolute;
        top: 0;
        bottom: 50px;
        overflow: auto;
        width: 100%;

        .title
        {
            height: 44px;
            line-height: 44px;
            font-size: 18px;
            text-align: center;
            font-weight: normal;
            background: #fff;
        }
        .main
        {
            margin-bottom: 10px;
            background: #fff;

            .tab
            {
                display: flex;
                justify-content: space-around;
                margin: 0 auto;
                height: 40px;
                line-height: 40px;
                @include border-1px(#efefef);

                button
                {
                    position: relative;
                    z-index: 1;
                    padding: 0;
                    border: none;
                    border-radius: 0;
                    color: #000000;
                    border-bottom: 2px solid transparent;

                    &:active
                    {
                        color: #e95168;
                        background: none;
                    }
                    &.active
                    {
                        color: #e95168;
                        border-color: #e95168;
                    }
                }
            }
            .dg
            {
                .dg__item
                {
                    @for $i from 1 through 4
                    {
                        &:nth-child(#{$i})
                        {
                            .dg__icon
                            {
                                @include bg-img('./trans_dg0#{$i}');
                            }
                        }
                    }
                }
                &__item
                {
                    position: relative;
                    margin: 0 12px;
                    padding: 15px 23px;
                    @include border-1px(#efefef);
                }
                &__icon
                {
                    position: absolute;
                    left: 35px;
                    top: 50%;
                    width: 34px;
                    height: 34px;
                    margin-top: -17px;
                }
                &__content
                {
                    padding-left: 70px;
                }
                &__title
                {
                    margin-bottom: 10px;
                    font-size: 14px;
                }
                &__text
                {
                    font-size: 14px;
                    color: #666666;
                }
            }
            .zy
            {
                .dg__item
                {
                    @for $i from 1 through 4
                    {
                        &:nth-child(#{$i})
                        {
                            .dg__icon
                            {
                                @include bg-img('./trans_zy0#{$i}');
                            }
                        }
                    }
                }
            }
        }
        .links
        {
            display: flex;
            justify-content: space-around;
            padding: 15px 25px;
            text-align: center;
            background: #fff;

            @for $i from 1 through 4
            {
                figure:nth-child(#{$i})
                {
                    .links__icon
                    {
                        @include bg-img('./trans_btn#{$i}');
                    }
                }
            }

            &__icon
            {
                width: 50px;
                height: 50px;
                margin: 0 auto 10px;
            }
            &__desc
            {
                font-size: 14px;
                color: #666666;
            }
        }
    }
}
</style>