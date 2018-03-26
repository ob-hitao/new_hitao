<template>
    <figure class="goods_row">
        <img class="goods_row__img" src="./gwc_img02.png"/>
        <figcaption class="goods_row__wrap">
            <h4 class="goods_row__title">
                敬酒服新娘秋冬旗袍中式婚纱结婚礼服蕾丝修身长款红色宴会晚礼服
            </h4>
            <div class="goods_row__priceAndnumber">
                <span class="goods_row__price">￥298.9</span>
            </div>
        </figcaption>
    </figure>
</template>

<script>
export default
{

}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.goods_row
{
    position: relative;

    &__img
    {
        float: left;
        margin-right: 10px;
        width: 90px;
        height: 90px;
    }
    &__title
    {
        font-weight: normal;
        font-size: 14px;
    }
    &__price
    {
        position: absolute;
        bottom: 0;
        font-size: 16px;
        color: #ff6900;
    }
}
</style>