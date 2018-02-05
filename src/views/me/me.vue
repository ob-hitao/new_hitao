<template>
    <div class="user">
        <div class="user__container">
            <header class="user__info">
                <div class="user__icon">
                    <i class="iconfont icon-shezhi"></i>
                    <i class="iconfont icon-xinxi"></i>
                </div>
                <figure class="user__content">
                    <img class="user__avatar" src="./avatar@2x.png"/>
                    <figcaption class="user__detailed">
                        <h4 class="user__name">公主殿下</h4>
                        <div class="user__level">
                            会员等级 <v-star :size="4" :score="1"></v-star>
                        </div>
                    </figcaption>
                    <v-checkin></v-checkin>
                </figure>
            </header>
            <section class="data elastic_module">
                <h4 class="elastic_module__title">
                    <span>代购&转运订单</span>
                    <span class="elastic_module__aside">全部<i class="iconfont icon-right"></i></span>
                </h4>
                <div class="elastic_module__content">
                    <figure class="elastic_module__wrap">
                        <i class="iconfont icon-gerenzhongxindingdandaifukuan"></i>
                        <figcaption class="elastic_module__description">
                            待付款
                        </figcaption>
                    </figure>
                    <figure class="elastic_module__wrap">
                        <i class="iconfont icon-icon2"></i>
                        <figcaption class="elastic_module__description">
                            已到库
                        </figcaption>
                    </figure>
                    <figure class="elastic_module__wrap">
                        <i class="iconfont icon-1huojian"></i>
                        <figcaption class="elastic_module__description">
                            已邮寄
                        </figcaption>
                    </figure>
                    <figure class="elastic_module__wrap">
                        <i class="iconfont icon-gerenzhongxindingdandaishouhuo"></i>
                        <figcaption class="elastic_module__description">
                            待收货
                        </figcaption>
                    </figure>
                </div>
            </section>
            <section class="assets elastic_module">
                <h4 class="elastic_module__title">
                    <span>我的资产</span>
                </h4>
                <div class="elastic_module__content">
                    <figure class="elastic_module__wrap">
                        <figcaption class="elastic_module__description">
                            ￥0.00<br />
                            当前余额
                        </figcaption>
                    </figure>
                    <figure class="elastic_module__wrap">
                        <figcaption class="elastic_module__description">
                            0<br />
                            会员积分
                        </figcaption>
                    </figure>
                    <figure class="elastic_module__wrap">
                        <figcaption class="elastic_module__description">
                            ￥0.00<br />
                            佣金
                        </figcaption>
                    </figure>
                </div>
            </section>
            <section class="grid elastic_module">
                <div class="elastic_module__content">
                    <figure class="elastic_module__wrap">
                        <img class="elastic_module__img" src="./mine_tool_coupon@2x.png"/>
                        <figcaption class="elastic_module__description">
                            优惠券
                        </figcaption>
                    </figure>
                    <figure class="elastic_module__wrap">
                        <img class="elastic_module__img" src="./mine_tool_collect@2x.png"/>
                        <figcaption class="elastic_module__description">
                            我的收藏
                        </figcaption>
                    </figure>
                    <figure class="elastic_module__wrap">
                        <img class="elastic_module__img" src="./mine_tool_alipay@2x.png"/>
                        <figcaption class="elastic_module__description">
                            支付宝代充
                        </figcaption>
                    </figure>
                    <figure class="elastic_module__wrap">
                        <img class="elastic_module__img" src="./mine_tool_notice@2x.png"/>
                        <figcaption class="elastic_module__description">
                            通知
                        </figcaption>
                    </figure>
                    <figure class="elastic_module__wrap">
                        <img class="elastic_module__img" src="./mine_tool_invite@2x.png"/>
                        <figcaption class="elastic_module__description">
                            邀请好友
                        </figcaption>
                    </figure>
                    <figure class="elastic_module__wrap">
                        <img class="elastic_module__img" src="./mine_tool_online@2x.png"/>
                        <figcaption class="elastic_module__description">
                            在线客服
                        </figcaption>
                    </figure>
                    <figure class="elastic_module__wrap">
                        <img class="elastic_module__img" src="./mine_tool_helpcenter@2x.png"/>
                        <figcaption class="elastic_module__description">
                            帮助中心
                        </figcaption>
                    </figure>
                    <figure class="elastic_module__wrap">
                        <img class="elastic_module__img" src="./mine_tool_house@2x.png"/>
                        <figcaption class="elastic_module__description">
                            仓库地址
                        </figcaption>
                    </figure>
                    <figure class="elastic_module__wrap">
                        <img class="elastic_module__img" src="./mine_tool_feedback@2x.png"/>
                        <figcaption class="elastic_module__description">
                            意见反馈
                        </figcaption>
                    </figure>
                    <figure class="elastic_module__wrap">
                        <img class="elastic_module__img" src="./mine_tool_address@2x.png"/>
                        <figcaption class="elastic_module__description">
                            地址管理
                        </figcaption>
                    </figure>
                    <figure class="elastic_module__wrap">
                        <img class="elastic_module__img" src="./mine_tool_freight@2x.png"/>
                        <figcaption class="elastic_module__description">
                            运费试算
                        </figcaption>
                    </figure>
                    <figure class="elastic_module__wrap">
                        <img class="elastic_module__img" src="./mine_tool_info@2x.png"/>
                        <figcaption class="elastic_module__description">
                            我的信息
                        </figcaption>
                    </figure>
                </div>
            </section>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import vFooter from '@/components/footer/footer';
import vCheckin from '@/components/checkin/checkin';
import vStar from '@/components/star/star';

export default
{
    components:
    {
        vFooter,
        vCheckin,
        vStar
    },
    created()
    {

    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../assets/scss/mixin";
.user__container
{
    position: absolute;
    top: 0;
    bottom: 50px;
    overflow: auto;
}
.elastic_module
{
    background: #fff;
    margin-bottom: 10px;

    &__title
    {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        margin: 0;
        padding: 14px 12px;
        font-weight: normal;
        border-bottom: 1px solid #efefef;
    }
    &__aside
    {
        font-size: 13px;
        color: #9c9c9c;

        .iconfont
        {
            font-size: 15px;
            vertical-align: top;
        }
    }
    &__content
    {
        display: flex;
    }
    &__wrap
    {
        flex: auto;
        text-align: center;
        padding: 10px;

        .iconfont
        {
            font-size: 21px;
        }
    }
    &__description
    {
        color: #666666;
        font-size: 12px;
    }
}
.user
{
    display: flex;
    flex-direction: column;

    &__info
    {
        height: 140px;
        padding: 10px 12px;
        position: relative;
        @include bg-img('./mine_bg');
    }
    &__icon
    {
        display: flex;
        justify-content: space-between;

        .iconfont
        {
            font-size: 21px;
            color: #fff;
        }
    }
    &__content
    {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: -13.5px;
    }
    &__avatar
    {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        border: 2px solid #f5b9c2;
    }
    &__detailed
    {
        text-align: center;
    }
    &__name
    {
        font-weight: normal;
        font-size: 16px;
        color: #fff;
        margin: 5px 0;
    }
    &__level
    {
        color: #ffef68;
        font-size: 12px;
    }
    .data
    {

    }
    .assets
    {

    }
    .grid
    {
        .elastic_module
        {
            &__content
            {
                flex-wrap: wrap;
                align-content: space-between;
            }
            &__wrap
            {
                flex: 1 1 25%;
                border: 1px solid #efefef;
                border-right: none;
                border-bottom: none;
                padding: 0;
                height: 88px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            &__img
            {
                width: 26px;
                height: 26px;
                margin-bottom: 10px;
            }
        }
    }
}
</style>