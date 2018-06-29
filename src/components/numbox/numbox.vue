<template>
    <div class="numbox">
        <button class="minus" @click="number--" :disabled="number <= 1">-</button>
        <input type="number" v-model="number" />
        <button class="plus" @click="number++">+</button>
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
    data()
    {
        return {
            number: this.num
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