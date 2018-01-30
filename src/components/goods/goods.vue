<template>
    <section class="goods">
        <h4 class="goods__title">
            <div class="goods__type">
                <i class="iconfont icon-xingxing"></i> 热卖商品
            </div>
            <div class="goods__more">
                更多 <i class="iconfont icon-right"></i>
            </div>
        </h4>
        <div class="goods__content">
            <figure class="item">
                <img class="item__img" src="./Shopping_dress.jpg" />
                <figcaption>
                    <div class="item__name">百搭闲瘦穿搭神器</div>
                    <div class="item__price">￥362</div>
                </figcaption>
            </figure>
            <figure class="item">
                <img class="item__img" src="./Shopping_dress.jpg" />
                <figcaption>
                    <div class="item__name">百搭闲瘦穿搭神器</div>
                    <div class="item__price">￥362</div>
                </figcaption>
            </figure>
            <figure class="item">
                <img class="item__img" src="./Shopping_dress.jpg" />
                <figcaption>
                    <div class="item__name">百搭闲瘦穿搭神器</div>
                    <div class="item__price">￥362</div>
                </figcaption>
            </figure>
        </div>
    </section>
</template>

<script>
export default
{

}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.goods
{
    padding: 12px;
    margin-bottom: 10px;
    background: #fff;

    &__title
    {
        display: flex;
        justify-content: space-between;
        margin: 0 0 12px;
        line-height: 14px;
        font-weight: normal;
    }
    &__type
    {
        font-size: 14px;

        .icon-xingxing
        {
            vertical-align: top;
            font-size: 16px;
        }
    }
    &__more
    {
        font-size: 13px;
        color: #666;

        .icon-right
        {
            font-size: 13px;
        }
    }
    &__content
    {
        display: flex;
        justify-content: space-between;

        .item
        {
            margin: 0;
            font-size: 13px;

            &__img
            {
                width: 110px;
                height: 120px;
            }
            &__name
            {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            &__price
            {
                color: #ff6900;
            }
        }
    }
}
</style>