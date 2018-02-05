<template>
    <div class="checkin">
        <span class="checkin__left"></span>
        签到
    </div>
</template>

<script>
export default
{

}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.checkin
{
    width: 45px;
    height: 30px;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    padding: 5px;
    color: #fff;
    font-size: 15px;
    position: absolute;
    right: 0;
    bottom: 39px;

    &__left
    {
        position: absolute;
        left: -13px;
        top: -1px;
        display: block;
        width: 14px;
        height: 30px;
        overflow: hidden;

        &::before
        {
            content: '';
            position: absolute;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            border: 1px solid #fff;
        }
    }
}
</style>