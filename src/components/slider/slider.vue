<template>
    <section class="mui-slider">
        <div class="mui-slider-group mui-slider-loop">
            <!--支持循环，需要重复图片节点-->
            <div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img :src="images[images.length - 1].src" /></a></div>
            <div class="mui-slider-item" v-for="item in images"><a href="#"><img :src="item.src" /></a></div>
            <!--支持循环，需要重复图片节点-->
            <div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img :src="images[0].src" /></a></div>
        </div>
    </section>
</template>

<script>
import {getDpi, imgAuto} from '@/assets/js/common';  //公共函数库

export default
{
    data()
    {
        return {
            images:
            [
                {
                    src: 'home_banner1'
                },
                {
                    src: 'home_banner2'
                },
                {
                    src: 'home_banner3'
                }
            ]
        }
    },
    created()
    {
        let dpi = getDpi();
        this.images.forEach(el => el.src = require(`./${el.src}@${dpi}x.png`));
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
        height: 131px;
    }
}
</style>