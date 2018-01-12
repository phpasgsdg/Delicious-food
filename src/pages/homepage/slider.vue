<template>
  <swiper class="banner index-banner" :options="swiperOption">
    <swiper-slide >
      <img class="banner-img" src="../resources/banner1.jpg" />
    </swiper-slide>
    <swiper-slide >
      <img class="banner-img" src="../resources/banner.jpg" />
    </swiper-slide>
    <swiper-slide >
      <img class="banner-img" src="../resources/banner2.jpg" />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
  export default {
    name: 'index-slider',
    props: {
      sliders: Array
    },
    data () {
      return {
        swiperOption: {
          autoplay: 1000,
          pagination: '.swiper-pagination',
          loop: true
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .banner
    width: 100%
    overflow: hidden
    height: 0
    padding-bottom: 46.7%
    margin-bottom: .2rem
    .banner-img
      width: 100%
</style>

<style lang="stylus">
  .index-banner
    .swiper-pagination-bullet
      background: #fff
</style>
