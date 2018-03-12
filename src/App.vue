<template>
    <div id="app">
        <router-view></router-view>
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
    },
    watch:
    {
        '$route' (to, from)
        {

        }
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
.mui-content
{
    position: absolute;
    top: 44px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    padding: 0 !important;
    overflow: auto;
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

// 路由切换动画
.child-view
{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    transition: all .3s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active
{
    transform: translate(100%, 0);
}
.slide-left-leave-active, .slide-right-enter
{
    transform: translate(-100%, 0);
}

// auto 滚动
.plus
{
    height: calc(100% + 1px);
}
</style>
