<template>
    <header class="mui-bar mui-bar-nav">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
        <h1 class="mui-title">{{title}}</h1>
        <slot></slot>
    </header>
</template>

<script>
export default
{
    props:
    {
        title: String
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>