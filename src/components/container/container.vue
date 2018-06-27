<template>
    <transition :name="transitionName">
        <!--<router-view class="child-view"></router-view>-->
        <router-view></router-view>
    </transition>
</template>

<script>
export default
{
    data()
    {
        return {
            transitionName: ''
        }
    },
    watch:
    {
        // '$route' (to, from)
        // {
        //     //监听路由的路径，可以通过不同的路径去选择不同的切换效果
        //     const toDepth = to.path.split('/').length,
        //           fromDepth = from.path.split('/').length;
        //     // if (toDepth == fromDepth)
        //     // {
        //     //     this.transitionName = '';
        //     //     return;
        //     // }
        //     this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
        // }
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>