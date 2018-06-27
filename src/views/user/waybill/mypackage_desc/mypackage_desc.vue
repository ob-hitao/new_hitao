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
                                国际订单号：AA0006821
                                <button>复制单号</button>
                            </p>
                            <p>
                                提交时间：2016-11-10 11:44:56<br />
                                付款时间：2016-11-10 11:45:51<br />
                                发货时间：2016-11-10 11:46:22<br />
                                含包装重量：7.90Kg<br />
                                报关费：100.00(美元)<br />
                                使用优惠券：￥5.00<br />
                                商品备注：打包到仓库7天后再发货
                            </p>
                        </div>
                    </li>
                </ul>

                <ul class="mui-table-view">
                    <li class="mui-table-view-cell mui-collapse">
                        <a class="mui-navigate-right" href="#">增值服务</a>
                        <div class="mui-collapse-content">
                            <p>
                                提交时间：2016-11-10 11:44:56<br />
                                付款时间：2016-11-10 11:45:51<br />
                                发货时间：2016-11-10 11:46:22<br />
                                含包装重量：7.90Kg<br />
                                报关费：100.00(美元)<br />
                                使用优惠券：￥5.00<br />
                                商品备注：打包到仓库7天后再发货
                            </p>
                        </div>
                    </li>
                </ul>

                <ul class="mui-table-view">
                    <li class="mui-table-view-cell mui-collapse">
                        <a class="mui-navigate-right" href="#">结算信息</a>
                        <div class="mui-collapse-content">
                            <p>
                                提交时间：2016-11-10 11:44:56<br />
                                付款时间：2016-11-10 11:45:51<br />
                                发货时间：2016-11-10 11:46:22<br />
                                含包装重量：7.90Kg<br />
                                报关费：100.00(美元)<br />
                                使用优惠券：￥5.00<br />
                                商品备注：打包到仓库7天后再发货
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

export default
{
    components:
    {
        vHeader
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