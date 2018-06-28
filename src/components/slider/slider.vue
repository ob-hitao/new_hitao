<template>
    <section class="mui-slider">
        <div class="mui-slider-group mui-slider-loop">
            <!--支持循环，需要重复图片节点-->
            <div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img v-lazy="images[images.length - 1]" /></a></div>
            <div class="mui-slider-item" v-for="item in images"><a href="#"><img v-lazy="item" /></a></div>
            <!--支持循环，需要重复图片节点-->
            <div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img v-lazy="images[0]" /></a></div>
        </div>
    </section>
</template>

<script>
import {getDpi} from '@/assets/js/common';  //公共函数库

export default
{
    props:
    {
        images: Array
    },
    mounted()
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
        height: 210px;
    }
}
</style>