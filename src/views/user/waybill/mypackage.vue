<template>
    <section class="order_list__order">
        <h4 class="order_list__order__title">
                <span class="order_list__order__title__number">
                    ID：6821
                </span>
            <span class="order_list__order__title__type">Pending</span>
        </h4>
        <div class="waybill__main">
            <div class="left">
                邮寄方式：ChinaPost<br />
                重量：2000g<br />
                照片：
            </div>
            <div class="right">
                跟踪号：55156534555<br />
                体积：1m³<br />
                时间：2017-07-13
            </div>
        </div>
        <div class="order_list__order__info">
            运费:￥27.00 报关费:￥1.00  总计:<span class="price">￥28.00</span>
        </div>
        <div class="order_list__order__btns">
            <button class="btn_real">确定收货</button>
        </div>
        <!--<v-no_data icon="icon-address" text="您还没有收货地址"></v-no_data>-->
    </section>
</template>

<script>
import vNo_data from '@/components/no_data/no_data';
export default
{
    components:
    {
        vNo_data
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/parameter";
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
.order_list__order__title
{
    margin-bottom: 0;
    border-bottom: none;
}
.order_list__order__info
{
    justify-content: flex-end;
    border-top: none;
}
.waybill__main
{
    display: flex;
    justify-content: space-between;
    margin-left: -12px;
    margin-right: -12px;
    padding: 12px;
    background: #f8f8f8;
    font-size: 14px;
}
</style>