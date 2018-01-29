<template>
  <div class="home">
      <v-search></v-search>
      <v-slider></v-slider>
      <v-goods></v-goods>
      <v-goods></v-goods>
      <v-goods></v-goods>
      <p class="tips">没有更多了</p>
      <v-footer></v-footer>
  </div>
</template>

<script>
import vFooter from '@/components/footer/footer';
import vSearch from '@/components/search/search';
import vSlider from '@/components/slider/slider';
import vGoods from '@/components/goods/goods';

export default
{
    components:
    {
        vFooter,
        vSearch,
        vSlider,
        vGoods
    }
}


</script>

<style scoped lang="scss" rel="stylesheet/scss">
.home
{
    padding-bottom: 50px;

    .tips
    {
        color: #888888;
        font-size: 12px;
        text-align: center;
    }
}
</style>
