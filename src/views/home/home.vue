<template>
  <div class="home">
      <v-search icon="icon-xinxi"></v-search>
      <div class="home__container">
          <v-slider v-if="bannerList.length" :images="bannerList"></v-slider>
          <v-goods></v-goods>
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

import {postJSON} from '@/assets/js/common';  //公共函数库

export default
{
    components:
    {
        vFooter,
        vSearch,
        vSlider,
        vGoods
    },
    data()
    {
        return {
            bannerList: [],
            goodList: []
        }
    },
    created()
    {
        // 轮播
        postJSON(this.API.INDEX_CAROUSEL, {}, data => this.bannerList = data.list);
        // 推荐商品
        // postJSON(this.API.INDEX_GOODSRECOMMEND, {}, data => this.goodList = data.list);
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
            margin-bottom: 10px;
            color: #888888;
            font-size: 12px;
            text-align: center;
        }
    }
}
</style>
