<template>
    <div class="shopping_desc">
        <v-slider></v-slider>
        <section class="info">
            <h4 class="title">
                Pristian zouboutin 秋季新款羽毛蕾丝抹胸长拖尾镶钻
                拉链婚纱
            </h4>
            <div class="price">
                ￥489
            </div>
            <div class="detailed">
                <span>国内运费：RMB 0.00</span>
                <span>月销量：月销量：997</span>
            </div>
        </section>
        <p class="select">
            请选择尺码  颜色  分类  款式 <span class="mui-pull-right">></span>
        </p>
        <!--<div class="evaluation">-->
            <!--<div class="top">商品评价(99)</div>-->
            <!--<div class="evaluation__wrap">-->
                <!--<div class="evaluation__wrap__head">-->
                    <!--<div>-->
                        <!--<img class="atr" src="../../images/60x60.gif" />人不犯二枉少年-->
                    <!--</div>-->
                    <!--<div>-->
                        <!--<img class="star" src="../../images/icon/fivestars.png"/>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="evaluation__wrap__main">收到了，费了老大劲才穿上，但是非常合身，效果特别好，家里人都说很美，太棒了，五分好评。</div>-->
                <!--<div class="evaluation__wrap__time">2015-12-28  颜色:白色  尺码:S</div>-->
            <!--</div>-->
            <!--<div class="bottom">查看更多评价</div>-->
        <!--</div>-->
        <section class="shop">
            <div class="mui-card-header mui-card-media">
                <img class="logo" src="./avatar@2x.png" />
                <div class="mui-media-body">
                    皇宫婚纱旗舰店
                    <p>总销量：1368  收藏数：987</p>
                </div>
            </div>
            <div class="integrated">
                <div>
                    描述相符  <i>4.7</i> <span>高</span>
                </div>
                <div>
                    物流速度<i>4.7</i> <span>高</span>
                </div>
                <div>
                    商品质量  <i>4.7</i> <span>高</span>
                </div>
            </div>
            <div class="mui-card-footer">
                <button type="button" class="mui-btn" id="allGoods">全部商品</button>
                <button type="button" class="mui-btn" id="goShop">进店逛逛</button>
            </div>
        </section>
        <!--<div id="slider" class="mui-slider">-->
            <!--<div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">-->
                <!--<a class="mui-control-item" href="#item1mobile">-->
                    <!--图文详情-->
                <!--</a>-->
                <!--<a class="mui-control-item" href="#item2mobile">-->
                    <!--产品参数-->
                <!--</a>-->
                <!--<a class="mui-control-item" href="#item3mobile">-->
                    <!--热卖推荐-->
                <!--</a>-->
            <!--</div>-->
            <!--<div id="sliderProgressBar" class="mui-slider-progress-bar mui-col-xs-4"></div>-->
            <!--<div class="mui-slider-group">-->
                <!--<div id="item1mobile" class="mui-slider-item mui-control-content mui-active">-->
                    <!--<div id="scroll1" class="mui-scroll-wrapper">-->
                        <!--<div class="mui-scroll">-->
                            <!--<div id="desc"></div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div id="item2mobile" class="mui-slider-item mui-control-content">-->
                    <!--<div id="scroll2" class="mui-scroll-wrapper">-->
                        <!--<div class="mui-scroll">-->
                            <!--<ul class="mui-table-view">-->
                                <!--&lt;!&ndash;<li v-for="pro in item.props" class="mui-table-view-cell">&ndash;&gt;-->
                                    <!--&lt;!&ndash;<span>{{pro.name}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{pro.value}}&ndash;&gt;-->
                                <!--&lt;!&ndash;</li>&ndash;&gt;-->
                            <!--</ul>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div id="item3mobile" class="mui-slider-item mui-control-content">-->
                    <!--<div id="scroll3" class="mui-scroll-wrapper">-->
                        <!--<div class="mui-scroll">-->
                            <!--<div class="mui-loading">-->
                                <!--<div class="mui-spinner">-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item mui-col-xs-2">
                <i class="iconfont icon-xinxi"></i>
                <span class="mui-tab-label">客服</span>
            </a>
            <a class="mui-tab-item mui-col-xs-2">
                <i class="iconfont icon-dianpu1"></i>
                <span class="mui-tab-label">店铺</span>
            </a>
            <a class="mui-tab-item mui-col-xs-2">
                <i class="iconfont icon-kongaixin"></i>
                <span class="mui-tab-label">收藏</span>
            </a>
            <a class="mui-tab-item mui-col-xs-3 cat">
                <span class="mui-tab-label">加入购物车</span>
            </a>
            <a class="mui-tab-item mui-col-xs-3 buy">
                <span class="mui-tab-label">立即购买</span>
            </a>
        </nav>

        <!--<div class="cover"></div>-->
        <!--<div class="shopping_bomb">-->
            <!--<figure class="goods">-->
                <!--<img class="goods__img" src="./avatar@2x.png"/>-->
                <!--<figcaption class="goods__wrap">-->
                    <!--<h4 class="goods__wrap__title">-->
                        <!--蕾丝送吊带2017春夏新款韩版直筒H型-->
                        <!--两件套连衣裙短裙女-->
                    <!--</h4>-->
                    <!--<p class="goods__wrap__description">请选择颜色分类</p>-->
                <!--</figcaption>-->
                <!--<i class="iconfont icon-guanbi mui-action-back goods__close"></i>-->
            <!--</figure>-->
            <!--<div class="mui-scroll-wrapper">-->
                <!--<div class="mui-scroll">-->
                    <!--&lt;!&ndash;这里放置真实显示的DOM内容&ndash;&gt;-->
                    <!--<section class="shopping_bomb__info">-->
                        <!--<div class="mui-row">-->
                            <!--颜色<br />-->
                            <!--<button type="button" class="mui-btn">白色</button>-->
                        <!--</div>-->
                        <!--<div class="mui-row">-->
                            <!--数量<br />-->
                            <!--<div class="mui-numbox" data-numbox-step='1' data-numbox-min='1' data-numbox-max='goods.maxnum' style="margin: 10px 10px 10px 0">-->
                                <!--<button class="mui-btn mui-numbox-btn-minus" type="button" style="margin: 0;">-</button>-->
                                <!--<input id="goodsNum" class="mui-numbox-input" type="number" value="1" readonly="readonly"/>-->
                                <!--<button class="mui-btn mui-numbox-btn-plus" type="button" style="margin: 0;">+</button>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="mui-row">-->
                            <!--备注<br />-->
                            <!--<textarea style="margin: 10px 0 0 0;" placeholder="如您有需要客服留心的问题或要求，可以在这里进行留言哦~"></textarea>-->
                        <!--</div>-->
                    <!--</section>-->
                    <!--<section class="mui-row shopping_bomb__total">-->
                        <!--<div class="mui-row">-->
                            <!--<div class="mui-pull-left">商品价格</div>-->
                            <!--<div class="mui-pull-right price"><button type="button" class="mui-btn active">修改</button> ￥149.40</div>-->
                        <!--</div>-->
                        <!--<div class="mui-row">-->
                            <!--<div class="mui-pull-left shopping_bomb__total__special">国内运费</div>-->
                            <!--<div class="mui-pull-right price"><button type="button" class="mui-btn active">修改</button>￥149.40</div>-->
                        <!--</div>-->
                        <!--<div class="mui-row">-->
                            <!--<div class="mui-pull-left">国际运费</div>-->
                            <!--<div class="mui-pull-right"><i class="iconfont icon-zhuyi"></i> 另计</div>-->
                        <!--</div>-->
                    <!--</section>-->
                <!--</div>-->
            <!--</div>-->
            <!--<footer class="footer">-->
                <!--确定-->
            <!--</footer>-->
        <!--</div>-->
    </div>
</template>

<script>
import vSlider from '@/components/slider/slider';
export default
{
    components:
    {
        vSlider
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../../assets/scss/parameter";
@import "../../../../assets/scss/mixin";
.shopping_desc
{
    %mb
    {
        margin-bottom: 10px;
        padding: 5px 10px;
        background: #fff;
    }

    .info
    {
        @extend %mb;

        .title
        {
            color: #333333;
            font-size: 14px;
            font-weight: normal;
        }
        .price
        {
            margin: 10px 0;
            font-size: 18px;
            color: #ff6900;
        }
        .detailed
        {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: #666666;
        }
    }
    .select
    {
        color: #333333;
        padding: 10px;
        @extend %mb;
    }
    .evaluation
    {
        @extend %mb;
        .title
        {
            @extend .select;
            margin: 0;
            padding: 10px 0;
            border-bottom: 1px solid #eeeeee;
        }
        .comment
        {
            font-size: 14px;

            figure
            {
                .mui-row
                {

                    img
                    {
                        border-radius: 50%;
                        margin-top: 5px;
                        margin-right: 5px;
                    }
                    i
                    {
                        font-size: 18px;
                    }
                }
                figcaption
                {
                    color: #666666;

                    p
                    {
                        color: #999999;
                        margin-top: 5px;
                    }
                }
            }
            button
            {
                width: 100%;
                border: none;
                border-top: 1px solid #eeeeee;
            }
        }
    }
    .shop
    {
        @extend %mb;

        .logo
        {
            width: 50px;
            height: 50px;
        }
        .mui-card-header:after
        {
            display: none;
        }
        .mui-media-body
        {
            line-height: 1;
            margin-left: 60px;

            p
            {
                padding-top: 20px;
            }
        }
        .integrated
        {
            display: flex;
            justify-content: space-between;
            padding: 5px 10px;

            div
            {
                color: #666666;
                font-size: 12px;

                span
                {
                    padding: 2px;
                    color: #fff;
                    background: $theme;
                }
            }
        }
        .mui-card-footer
        {
            padding: 15px 40px;

            button
            {
                width: 120px;
                height: 40px;
            }
        }
    }


    .mui-bar-tab
    {
        line-height: 20px;
        box-shadow: 0 0 2px #dedede;
        background: #fff;

        .mui-tab-item
        {
            color: #666666;
            border-right: 1px solid #dedede;

            &:nth-child(4)
            {
                background: #fbdce1;
                color: $theme;
            }
            &:nth-child(5)
            {
                background: $theme;
                color: #ffffff;
            }

            .mui-tab-label
            {
                font-size: 12px;
                display: block;
            }
            .iconfont
            {
                font-size: 21px;
                margin-bottom: -5px;
            }
        }
        .mui-col-xs-2
        {
            width: 16.66666667% !important;
        }
        .mui-col-xs-3
        {
            width: 30% !important;
        }
    }
    .aside
    {
        display: none;
        position: absolute;
        left: 0;
        right: 0;
        z-index: 20;
        background: #fff;

        %wrap
        {
            padding: 15px 20px;
            border-bottom: 1px solid #eeeeee;

            h6
            {
                color: #333333;
                padding-bottom: 5px;
                margin-left: 5px;
            }
            .mui-btn
            {
                padding: 9px 25px;
                margin: 5px;
            }
        }
        %btn
        {
            border: none;
            background: $theme;
            color: #fff;
        }

        .mui-card-header
        {
            border: none;
            @extend %wrap;

            img
            {
                width: 50px;
                height: 50px;
                margin-right: 15px;
            }
            .price
            {
                color: $theme;
            }
            p
            {
                padding-top: 10px;
                text-indent: 4px;
            }
            .off
            {
                position: absolute;
                right: 15px;
                top: 15px;
                display: block;
                width: 15px;
                height: 15px;
                //background: url("../../images/shopping/spxq-btn-shutdown.png") no-repeat center center / 100%;
            }
        }
        .color
        {
            @extend %wrap;

            .mui-btn
            {
                @extend %btn;
            }
        }
        .size
        {
            @extend %wrap;
        }
        .number
        {
            @extend %wrap;

            .mui-numbox
            {
                margin-left: 5px;

                .mui-btn
                {
                    padding: 0;
                    margin: 0;
                }
            }
        }
        .confirm
        {
            .mui-btn
            {
                border-radius: 0;
                width: 100%;
                height: 50px;
                font-size: 16px;
                @extend %btn;
            }
        }
    }
}
.shopping_bomb
{
    position: absolute;
    top: 100px;
    z-index: 999;
    width: 100%;
    height: calc(100% - 100px);
    background: #fff;
    animation: .5s bounceInUp;

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
    .goods
    {
        padding: 15px;

        &__img
        {
            width: 64px;
            height: 64px;
        }
        &__wrap
        {
            width: calc(100% - 105px);

            &__description
            {
                position: absolute;
                bottom: 0;
                margin: 0;
            }
        }
        &__close
        {
            font-size: 21px;
            margin-left: 20px;
        }
    }
    .mui-scroll-wrapper
    {
        background: #fff;
        top: 100px;
    }
    &__x
    {
        width: 17.5px;
        height: 18px;
    }
    &__info
    {
        padding: 5px 15px;

        .mui-row
        {
            margin-bottom: 5px;
        }
        button
        {
            margin: 10px 10px 10px 0;

            &.active
            {
                background: $theme;
                border-color: $theme;
                color: #fff;
            }
        }
    }
    &__total
    {
        padding: 11px 15px;
        border-top: 1px solid #dedede;

        .mui-row
        {
            margin-bottom: 5px;
            line-height: 28px;

            button
            {
                padding: 3px;

                &.active
                {
                    background: $theme;
                    border-color: $theme;
                    color: #fff;
                }
            }
        }

        &__special
        {
            font-size: 16px;
        }
        &__icon
        {
            width: 14px;
            height: 14px;
            vertical-align: middle;
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