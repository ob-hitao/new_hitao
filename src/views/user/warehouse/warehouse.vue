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
                    <li @click="setcopy(address.diqu)" class="mui-table-view-cell"><span>省份</span>{{address.diqu}} <i class="iconfont icon-copy"></i></li>
                    <li @click="setcopy(address.jiedao)" class="mui-table-view-cell"><span>地址</span>{{address.jiedao}} <i class="iconfont icon-copy"></i></li>
                    <li @click="setcopy(address.shoujianren)" class="mui-table-view-cell"><span>收件人</span>{{address.shoujianren}} <i class="iconfont icon-copy"></i></li>
                    <li @click="setcopy(address.ZipCode)" class="mui-table-view-cell"><span>邮编</span>{{address.ZipCode}} <i class="iconfont icon-copy"></i></li>
                    <li @click="setcopy(address.dianhua)" class="mui-table-view-cell"><span>电话</span>{{address.dianhua}} <i class="iconfont icon-copy"></i></li>
                </ul>
                <p class="warehouse__content__ps">提示：复制仓库地址到你的淘宝或其他网站帐号，作为收货人地址，当您获得快递跟踪号后，到会员中心 “转运” 提交订单页面提交相交的信息。收到货物后我们会为您更新货物的最新信息。</p>
            </div>
        </div>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import {postJSON, setClipText} from '@/assets/js/common';  //公共函数库


export default
{
    components:
    {
        vHeader
    },
    data()
    {
        return {
            address: {}
        }
    },
    created()
    {
        postJSON
        (
            this.API.SENDORDER_ADDRESS,
            {
                userId: localStorage.getItem('userId')
            },
            data =>
            {
                this.address = data.address;
            }
        );
    },
    methods:
    {
        setcopy(text)
        {
            mui.plusReady(() =>
            {
                setClipText(text);
                mui.toast('copy成功！');
            })
        }
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