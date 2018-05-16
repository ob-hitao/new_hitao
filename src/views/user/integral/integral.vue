<template>
    <div class="integral">
        <v-header title="积分">
            <span class="alert">积分规则</span>
        </v-header>
        <div class="mui-content">
            <div class="plus">
                <figure class="banner">
                    <img src="./integral_icon.png"/>
                    <figcaption>
                        <div class="now">
                            当前积分
                            <span class="number">300</span>
                            <i class="iconfont icon-204"></i>
                        </div>
                        <div class="grade">
                            会员等级
                            <v-star :size="4" :score="1"></v-star>
                        </div>
                        <div class="info">总积分:350 已兑换积分:0 待兑换积分:350</div>
                        <button class="exchange">兑换优惠券</button>
                    </figcaption>
                </figure>
                <section class="list">
                    <nav class="tab">
                        <div class="tab__item">
                            <span class="tab__text active">积分日志</span>
                        </div>
                        <div class="tab__item">
                            <span class="tab__text">获得积分</span>
                        </div>
                        <div class="tab__item">
                            <span class="tab__text">积分兑换</span>
                        </div>
                    </nav>
                    <!--<ul class="mui-table-view">-->
                        <!--<li v-for="item in list" class="mui-table-view-cell">-->
                            <!--<div class="left">-->
                                <!--{{item.remark}}<br/>-->
                                <!--<span class="ps">{{new Date(item.addtime*1000).Format("yyyy-MM-dd hh:mm:ss")}}</span>-->
                            <!--</div>-->
                            <!--<div class="right price">-->
                                <!--{{item.score}}-->
                            <!--</div>-->
                        <!--</li>-->
                    <!--</ul>-->
                </section>
            </div>
            <!--<div class="cover">-->
                <!--<div class="rules">-->
                    <!--<h4 class="rules__title">积分规则</h4>-->
                    <!--<article class="rules__body">-->
                        <!--<p>使用积分可以兑换多种面值的电子优惠券，可用于抵扣国际运费等等！</p>-->
                        <!--<section>-->
                            <!--<h5>1、如何赚取积分？</h5>-->
                            <!--您有多重途径可以获得积分，比如注册新会员、在个人中心进行每日签到等等。-->
                        <!--</section>-->
                        <!--<section>-->
                            <!--<h5>2、如何使用积分</h5>-->
                            <!--您可以用积分可兑换多种面值的电子优惠券，可用于抵扣国际运费等等！-->
                        <!--</section>-->
                    <!--</article>-->
                    <!--<footer class="footer">关闭</footer>-->
                <!--</div>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import vStar from '@/components/star/star';
export default
{
    components:
    {
        vHeader,
        vStar
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/parameter";
@import "../../../assets/scss/mixin";
.integral
{
    .alert
    {
        position: absolute;
        right: 5px;
        top: 0;
        color: #666666;
        font-size: 14px;
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

    .banner
    {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 154px;
        @include bg-img('./mine_bg');

        & > img
        {
            width: 102px;
            height: 102px;
            margin-right: 11px;
        }

        .now
        {
            color: #fff;
            font-size: 14px;

            .number
            {
                font-size: 28px;
            }
            .iconfont
            {
                font-size: 24px;
            }
        }
        .grade
        {
            font-size: 12px;
            color: #ffef68;

            img
            {
                width: 48px;
                height: 10px;
            }
        }
        .info
        {
            font-size: 12px;
            color: #fff;
        }
        .exchange
        {
            border: none;
            background: #fded8b;
            color: #ff6900;
            font-size: 14px;
        }
    }

    .list
    {
        .mui-table-view-cell
        {
            display: flex;
            justify-content: space-between;
            align-items: center;

            &::after
            {
                right: 15px;
            }

            .left
            {
                font-size: 14px;

                span
                {
                    font-size: 12px;
                    color: #a6a6a6;
                }
            }
            .right
            {
                font-size: 16px;

                &.green
                {
                    color: #14d195;
                }
            }
        }
    }

    .rules
    {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 271px;
        border-radius: 20px;
        z-index: 999;
        background: #fff;
        overflow: hidden;
        padding-bottom: 40px;

        &__title
        {
            font-size: 16px;
            text-align: center;
            margin-top: 20px;
            margin-bottom: 0;
            font-weight: normal;
        }
        &__body
        {
            padding: 25px 17.5px;
            font-size: 14px;
            color: #666666;

            section
            {
                margin-top: 22.5px;

                h5
                {
                    color: $theme;
                }
            }
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
</style>