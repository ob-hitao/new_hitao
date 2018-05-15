<template>
    <div class="alipay">
        <v-header title="支付宝代充">
            <router-link to="alipayguidance" tag="span" class="alipayguidance" append>说明</router-link>
        </v-header>
        <div class="mui-content">
            <div class="plus">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">
                        <span class="ps">支付宝账户名</span>
                        <input type="text" placeholder="请输入您的支付宝账户名" />
                    </li>
                    <li class="mui-table-view-cell">
                        <span class="ps">支付宝账户</span>
                        <input type="text" placeholder="请输入您的支付宝账户" />
                    </li>
                    <li class="mui-table-view-cell">
                        <span class="ps">充值金额(￥)</span>
                        <input type="text" placeholder="请输入充值金额(RMB)" />
                    </li>
                    <li class="mui-table-view-cell total">
                        手续费：<span class="price">¥5.50</span>  您需要充值：<span class="price">¥55.50</span>
                    </li>
                </ul>
            </div>
        </div>
        <footer class="footer">充值</footer>
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
@import "../../../assets/scss/parameter";
.alipay
{
    .price
    {
        color: #ff6900;
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
        background: #e95168;
        color: #fff;
    }
    .alipayguidance
    {
        position: absolute;
        right: 5px;
        top: 0;
        color: #666666;
        font-size: 14px;
        padding: 10px;
        z-index: 999;
    }
    .mui-table-view-cell
    {
        font-size: 14px;

        &::after
        {
            right: 15px;
        }
        &.total
        {
            text-align: right;
        }
        .ps
        {
            display: inline-block;
            width: 104px;
            color: #666666;
        }
        input
        {
            width: auto;
            height: auto;
            padding: 0;
            margin: 0;
            border: none;
            font-size: 14px;
        }
    }
}
</style>