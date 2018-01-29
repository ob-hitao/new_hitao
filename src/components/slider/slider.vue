<template>
    <section class="mui-slider">
        <div class="mui-slider-group mui-slider-loop">
            <!--支持循环，需要重复图片节点-->
            <div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="./4.jpg" /></a></div>
            <div class="mui-slider-item"><a href="#"><img src="./1.jpg" /></a></div>
            <div class="mui-slider-item"><a href="#"><img src="./2.jpg" /></a></div>
            <div class="mui-slider-item"><a href="#"><img src="./3.jpg" /></a></div>
            <div class="mui-slider-item"><a href="#"><img src="./4.jpg" /></a></div>
            <!--支持循环，需要重复图片节点-->
            <div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="./1.jpg" /></a></div>
        </div>
    </section>
</template>

<script>
export default
{
    created()
    {
        //获得slider插件对象
        var gallery = mui('.mui-slider');
        gallery.slider({
            interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
        });
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.mui-slider
{
    img
    {
        height: 130px;
    }
}
</style>