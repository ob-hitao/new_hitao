<template>
    <div class="order_logistics">
        <v-header title="选择物流"></v-header>
        <div class="mui-content">
            <section class="order_logistics__item">
                <h4 class="order_logistics__item__title">
                    <v-checkbox></v-checkbox>DHL
                </h4>
                <div class="order_logistics__item__body">
                    <p>
                        <span>首重：￥1.00 / 1.00g</span>
                        <span>续重：￥1.00 / 1.00g</span>
                    </p>
                    <p>
                        <span>报关费：￥1.00 / 1.00g</span>
                        <span>免费额度：￥1.00</span>
                    </p>
                </div>
                <div class="order_logistics__item__footer">
                    <span>预计运费</span><span class="price">￥38.00</span>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import vHeader from '@/components/header/header';
import vCheckbox from '@/components/checkbox/checkbox';

export default
{
    components:
    {
        vHeader,
        vCheckbox
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.order_logistics
{
    &__item
    {
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