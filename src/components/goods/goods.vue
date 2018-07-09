<template>
    <section class="goods">
        <h4 class="goods__title">
            <div class="goods__type">
                <i class="iconfont icon-xingxing"></i> {{goods.typename}}
            </div>
            <router-link :to="{path: '/shopping/shopping_list', query: {query: goods.typename}}" tag="div" class="goods__more">
                更多 <i class="iconfont icon-right"></i>
            </router-link>
        </h4>
        <div class="goods__content">
            <router-link v-for="item in goods.goods_array" :key="item.num_iid" :to="{path: '/shopping/shopping_list/shopping_desc', query: {num_iid: item.num_iid}}" tag="figure" class="item">
                <img class="item__img" v-lazy="item.fileimg" />
                <figcaption>
                    <div class="item__name">{{item.title}}</div>
                    <div class="item__price">￥{{item.price}}</div>
                </figcaption>
            </router-link>
        </div>
    </section>
</template>

<script>
export default
{
    props:
    {
        goods: Object
    }
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