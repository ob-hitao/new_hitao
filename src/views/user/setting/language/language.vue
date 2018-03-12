<template>
    <div class="language">
        <div class="language__logo"></div>
        <h2 class="language__title">请选择语言版本</h2>
        <h4 class="language__subtitle">Please choose language</h4>
        <button>中文</button>
        <button>English</button>
        <button>其他语言</button>
    </div>
</template>

<script>
export default
{

}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../../assets/scss/mixin";
@import "../../../../assets/scss/parameter";
.language
{
    padding-top: 80px;
    text-align: center;
    height: 100%;
    background: $theme;

    &__logo
    {
        width: 164.5px;
        height: 73px;
        margin: 0 auto 70px;
        @include bg-img('./logo');
    }
    &__title, &__subtitle
    {
        font-weight: normal;
        color: #fff;
    }
    &__title
    {
        margin-bottom: 10px;
        font-size: 38.5px;
    }
    &__subtitle
    {
        margin-bottom: 17px;
        font-size: 22px;
    }
    button
    {
        display: block;
        width: 70%;
        margin: 0 auto 27px;
        font-size: 18px;
        color: $theme;
        border: none;
    }
}
</style>