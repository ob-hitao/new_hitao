<template>
    <div class="warehouse">
        <v-header title="仓库地址"></v-header>
        <div class="mui-content warehouse__content">
            <div class="plus">
                <h4 class="warehouse__content__title">
                    <i class="iconfont icon-home2"></i>
                    包裹转运的寄送地址
                </h4>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell"><span>省份</span>广东省 <i class="iconfont icon-copy"></i></li>
                    <li class="mui-table-view-cell"><span>城市</span>广东市 <i class="iconfont icon-copy"></i></li>
                    <li class="mui-table-view-cell"><span>地址</span>白云区太和镇均禾街道南岭岗埔大道新洋工业园A栋一楼A仓 3468 库 <i class="iconfont icon-copy"></i></li>
                    <li class="mui-table-view-cell"><span>收件人</span>YES-CC大小姐 <i class="iconfont icon-copy"></i></li>
                    <li class="mui-table-view-cell"><span>邮编</span>510440 <i class="iconfont icon-copy"></i></li>
                </ul>
                <p class="warehouse__content__ps">提示：复制仓库地址到你的淘宝或其他网站帐号，作为收货人地址，当您获得快递跟踪号后，到会员中心 “转运” 提交订单页面提交相交的信息。收到货物后我们会为您更新货物的最新信息。</p>
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
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/parameter";
.warehouse
{
    .mui-table-view::before, .mui-table-view::after
    {
        left: 15px;
        right: 15px;
    }
    .mui-table-view-cell
    {
        font-size: 14px;
        padding-left: 70px;
        padding-right: 50px;
        position: relative;

        &::after
        {
            right: 15px;
        }
        span
        {
            position: absolute;
            left: 15px;
            color: #666666;
        }
    }
    &__content
    {
        background: #fff;

        &__title
        {
            font-weight: normal;
            color: $theme;
            font-size: 16px;
            padding: 15px;
            background: #fff;
            margin: 0;

            &__icon
            {
                width: 21px;
                height: 21px;
                margin-right: 10px;
                vertical-align: sub;
            }
        }
        &__ps
        {
            padding: 15px;
            background: #fff;
            font-size: 12px;
        }
        .icon-copy
        {
            width: 16px;
            height: 16px;
            position: absolute;
            right: 20px;
            top: 50%;
            margin-top: -8px;
            color: $theme;
        }
    }
}
</style>