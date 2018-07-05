<template>
    <div class="numbox">
        <button class="minus" @click="changeNum(false)" ref="minus">-</button>
        <input type="number" ref="input" :value="num" @input="$emit('input', $event.target.value)" />
        <button class="plus" @click="changeNum(true)">+</button>
    </div>
</template>

<script>
export default
{
    props:
    {
        num:
        {
            type: Number,
            default: 1
        }
    },
    methods:
    {
        changeNum(behavior)
        {
            behavior ? this.$refs.input.value++ : this.$refs.input.value--;
            this.$refs.minus.disabled = this.$refs.input.value <= 1 ? true : false;
            this.$emit('input', this.$refs.input.value);
        }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.numbox
{
    display: flex;
    width: 120px;
    height: 35px;
    overflow: hidden;
    border: solid 1px #bbb;
    border-radius: 3px;
    background-color: #efeff4;

    button
    {
        flex: none;
        width: 40px;
        height: 100%;
        border: none;
        border-radius: 0;
        background: #f9f9f9;

        &:active
        {
            background: #ccc;
        }
        &.minus
        {
            left: 0;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;

            &[disabled]
            {
                color: silver;
            }
        }
        &.plus
        {
            right: 0;
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
        }
    }
    input
    {
        margin: 0;
        padding: 0;
        height: 100%;
        text-align: center;
        border: none;
        border-radius: 0;
        border-right: solid 1px #ccc;
        border-left: solid 1px #ccc;
    }
}
</style>