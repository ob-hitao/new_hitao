<template>
    <label class="checkbox">
        <input type="checkbox" :checked="checked" @change="$emit('change', $event.target.checked)" />
        <i class="iconfont icon-xuanze"></i>
        <i class="iconfont icon-selected"></i>
    </label>
</template>

<script>
export default
{
    model:
    {
        prop: 'checked',
        event: 'change'
    },
    props:
    {
        checked:
        {
            type: Boolean,
            default: false
        }
    }
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
                display: inline-block;
            }
        }
    }
    .iconfont
    {
        font-size: 20px;
        color: #c8c8c8;
    }
    .icon-selected
    {
        display: none;
        color: $theme;
    }
}
</style>