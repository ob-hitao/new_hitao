<template>
    <div class="mypackage_desc">
        <v-header title="国际运单详情"><i class="iconfont icon-msnui-more"></i></v-header>
        <div class="mui-content">
            <section class="mypackage_desc__main">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell mui-collapse">
                        <a class="mui-navigate-right" href="#">基本信息</a>
                        <div class="mui-collapse-content">
                            <p class="order_number">
                                国际订单号：{{detail.sid}}
                                <button>复制单号</button>
                            </p>
                            <p>
                                邮寄方式: {{detail.deliveryname}}<br />
                                跟踪号: {{detail.sn}}<br />
                                体积: <span v-if="detail.actualVolume == ''">{{detail.countvolume + 'm²'}}</span><span v-else><s>{{detail.countvolume + 'm²'}}</s> {{detail.actualVolume + 'm²'}}</span><br />
                                报关费: {{detail.customsfee}}<br />
                                状态: {{detail.state}}<br />
                                收件人: {{detail.uname}}<br />
                                时间: {{new Date(detail.uptime*1000).Format("yyyy-MM-dd hh:mm:ss")}}<br />
                                重量: <span v-if="detail.actualWeight == ''">{{detail.countweight + 'm²'}}</span><span v-else><s>{{detail.countweight + 'm²'}}</s> {{detail.actualWeight + 'm²'}}</span><br />
                                运费: <span v-if="detail.actualFreight == ''">{{detail.freight + 'm²'}}</span><span v-else><s>{{detail.freight + 'm²'}}</s> {{detail.actualFreight + 'm²'}}</span><br />
                                总计: {{detail.totalfee}}<br />
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import {getJSON, postJSON} from '@/assets/js/common';  //公共函数库

export default
{
    components:
    {
        vHeader
    },
    data()
    {
        return {
            detail: {},
            packageId: this.$route.query.orderId
        }
    },
    created()
    {
        this.getDesc()
    },
    methods:
    {
        getDesc()
        {
            postJSON
            (
                this.API.SENDORDER_DETAILS,
                {
                    userId: localStorage.getItem('userId'),
                    packageId: this.packageId
                },
                data =>
                {
                    this.detail = data.order;
                }
            );
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../../assets/scss/parameter";
.mypackage_desc
{
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
    .order_details__process__icon
    {
        height: 128px;
    }
    &__main
    {
        .mui-table-view
        {
            margin-top: 10px;

            &::after, &::before
            {
                display: none;
            }
            .mui-navigate-right
            {
                font-size: 14px;
            }
            .mui-collapse
            {
                .mui-navigate-right
                {
                    &::after
                    {
                        color: $theme;
                    }
                }
                .mui-collapse-content
                {
                    font-size: 14px;

                    .order_number
                    {
                        display: flex;
                        justify-content: space-between;

                        button
                        {
                            padding: 0 5px;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
}
</style>