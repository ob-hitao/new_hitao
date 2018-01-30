<template>
    <section class="search">
        <div class="search__main">
            <input class="search__text" type="text" placeholder="请输入淘宝链接或者关键字">
            <i class="iconfont icon-sousuo1"></i>
            <i class="iconfont icon-xiangji"></i>
        </div>
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
        border-radius: 5px;
        border: none;
        font-size: 14px;
        text-indent: 15px;
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