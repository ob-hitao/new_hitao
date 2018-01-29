<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default
{
    name: 'app',
    created()
    {
        if (mui.os.plus)
        {
            // 系统顶部样式
            plus.navigator.setStatusBarBackground('#e95168');
            plus.navigator.setStatusBarStyle('light');
        }
    }
}
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
