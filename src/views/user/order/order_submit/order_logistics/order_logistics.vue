<template>
    <div class="order_logistics">
        <v-header title="选择物流"></v-header>
        <div class="mui-content">
            <div class="plus">
                <section v-for="item in list" class="order_logistics__item">
                    <h4 class="order_logistics__item__title">
                        <v-checkbox @change="select(item)"></v-checkbox>{{item.shipping_name}}
                    </h4>
                    <div class="order_logistics__item__body">
                        <p>
                            <span>首重：{{item.first_fee}} / {{item.first_weight}}{{'volume' == item.mode ? 'm³' : 'g'}}</span>
                            <span>续重：{{item.continue_fee}}/ {{item.continue_weight}}{{'volume' == item.mode ? 'm³' : 'g'}}</span>
                        </p>
                        <p>
                            <span>报关费：{{item.customs_fee}}</span>
                            <span>续重：{{item.fuel_fee}}</span>
                        </p>
                        <p>
                            <span>服务费：{{item.server_fee}}</span>
                            <span>免费额度：{{item.free_money}}</span>
                        </p>
                    </div>
                    <div class="order_logistics__item__footer">
                        <span>预计运费</span><span class="price">￥{{item.total_fee}}</span>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import vCheckbox from '@/components/checkbox/checkbox';
import {postJSON} from '@/assets/js/common';  //公共函数库


export default
{
    components:
    {
        vHeader,
        vCheckbox
    },
    data()
    {
        return {
            list: [],
            options: this.$route.query.options
        }
    },
    created()
    {
        this.getList()
    },
    methods:
    {
        getList()
        {
            postJSON
            (
                this.API.ORDER_GETSHIPPING,
                this.options,
                data =>
                {
                    this.list = data.list;
                }
            )
        },
        select(item)
        {
            this.$router.push({path: '/user/order/order_submit', query: {orderIds: this.options.orderIds, logistics: item}})
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.order_logistics
{
    .price
    {
        color: #ff6900;
    }
    &__item
    {
        margin-bottom: 10px;
        padding: 12px;
        background: #fff;

        &__title
        {
            font-size: 14px;
            font-weight: normal;
            padding: 5px 0 10px;

            label
            {
                vertical-align: middle;
                margin-right: 15px;
            }
        }
        &__body
        {
            border-bottom: 1px solid #efefef;
            border-top: 1px solid #efefef;
            padding-top: 10px;

            p
            {
                display: flex;
                justify-content: space-between;
                font-size: 14px;
            }
        }
        &__footer
        {
            display: flex;
            justify-content: space-between;
            padding-top: 10px;
            font-size: 14px;
        }
    }
}
</style>