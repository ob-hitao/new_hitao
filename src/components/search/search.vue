<template>
    <section class="search">
        <router-link to="shopping_search" tag="div" class="search__main">
            <div class="search__text">请输入淘宝链接或关键字</div>
            <i class="iconfont icon-sousuo1"></i>
            <i class="iconfont icon-xiangji"></i>
        </router-link>
        <i class="iconfont icon-xinxi"></i>
    </section>
</template>

<script>
export default
{

}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../assets/scss/parameter";
.search
{
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    z-index: 10;
    padding: 7px 12.5px;
    background: $theme;

    &__main
    {
        flex: 1;
        position: relative;

        .icon-sousuo1, .icon-xiangji
        {
            position: absolute;
            top: 0;
            line-height: 30px;
            color: $theme;
            font-size: 20px;
        }
        .icon-sousuo1
        {
            left: 5px;
        }
        .icon-xiangji
        {
            right: 5px;
        }
    }
    &__text
    {
        margin: 0;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        border: none;
        font-size: 14px;
        text-indent: 30px;
        color: #c7c7ca;
        background: #fff;
    }
    .icon-xinxi
    {
        color: #fff;
        font-size: 25px;
        line-height: 30px;
        margin-left: 9px;
    }
}
</style>