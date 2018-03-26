<template>
    <div class="no_data">
        <i class="iconfont" :class="[icon]"></i>
        <p>{{text}}</p>
    </div>
</template>

<script>
export default
{
    props:
    {
        icon: String,
        text: String
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.no_data
{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: -44px;
    text-align: center;
    color: #666666;

    .iconfont
    {
        color: #bcbcbc;
        font-size: 64px;
    }
    p
    {
        margin-top: 15px;
    }
}
</style>