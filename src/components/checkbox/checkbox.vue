<template>
    <label class="checkbox">
        <input type="checkbox" />
        <i class="iconfont icon-xuanze"></i>
        <i class="iconfont icon-selected"></i>
    </label>
</template>

<script>
export default
{

}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@import "../../assets/scss/parameter";
.checkbox
{
    input[type=checkbox]
    {
        display: none;

        &:checked
        {
            &~.icon-xuanze
            {
                display: none;
            }
            &~.icon-selected
            {
                display: block;
            }
        }
    }
    .iconfont
    {
        font-size: 20px;
        color: $theme;
    }
    .icon-selected
    {
        display: none;
    }
}
</style>