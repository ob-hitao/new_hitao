<template>
  <div class="home">
      <v-search></v-search>
      <v-slider></v-slider>
      <v-footer></v-footer>
  </div>
</template>

<script>
import vFooter from '@/components/footer/footer';
import vSearch from '@/components/search/search';
import vSlider from '@/components/slider/slider';

export default
{
    components:
    {
        vFooter,
        vSearch,
        vSlider
    }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.home
{

}
</style>
