<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default
{
    name: 'app',
    created()
    {
        mui.plusReady(() =>
        {
            // 系统顶部样式
            plus.navigator.setStatusBarBackground('#e95168');
            plus.navigator.setStatusBarStyle('light');
        });
    }
}
</script>

<style lang="scss" rel="stylesheet/scss">
/* reset */
figure, p, h1, h2, h3, h4
{
    margin: 0;
}
.mui-bar-nav
{
    background: #fff;
    box-shadow: none;
    border-bottom: 1px solid #d0d0d0;
}
.mui-action-back
{
    color: #666666;
}
/* end */
@font-face
{
    font-family: "冬青黑体";
    src: url("./assets/fonts/冬青黑体W3.otf") format("otf");
}
*
{
    font-family: "冬青黑体";
}
</style>
