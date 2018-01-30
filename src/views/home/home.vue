<template>
  <div class="home">
      <v-search></v-search>
      <div class="home__container">
          <v-slider></v-slider>
          <v-goods v-for="n in 10" :key="'goods' + n"></v-goods>
          <p class="tips">没有更多了</p>
      </div>
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
    &__container
    {
        position: absolute;
        top: 44px;
        bottom: 50px;
        width: 100%;
        overflow: auto;

        .tips
        {
            color: #888888;
            font-size: 12px;
            text-align: center;
        }
    }
}
</style>
