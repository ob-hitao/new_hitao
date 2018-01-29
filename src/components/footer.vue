<template>
    <nav class="nav">
        <router-link to="/home" tag="a" class="nav__item">home</router-link>
        <router-link to="/shopping" tag="a" class="nav__item">shopping</router-link>
        <router-link to="/transport" tag="a" class="nav__item">transport</router-link>
        <router-link to="/shopping_cart" tag="a" class="nav__item">shopping cart</router-link>
        <router-link to="/me" tag="a" class="nav__item">me</router-link>
    </nav>
</template>

<script>
export default
{

}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
@import "../assets/scss/parameter";

$animal-list:
(
    "(1)": "\e652",
    "(2)": "\e604",
    "(3)": "\e68c",
    "(4)": "\e689",
    "(5)": "\e606"
);

.nav
{
    display: flex;
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    background: #fff;
    border-top: 1px solid #cfcfcf;

    &__item
    {
        display: block;
        padding-top: 5px;
        flex: 1;
        text-align: center;
        font-size: 12px;
        color: #6d6d72;

        @each $index, $animal in $animal-list
        {
            &:nth-child#{$index}::before
            {
                font-family:"iconfont" !important;
                font-size:16px;
                font-style:normal;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                content: $animal;
                display: block;
            }
        }
        &.router-link-active
        {
            color: $theme;
        }
    }
}
</style>
