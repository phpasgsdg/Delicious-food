<template>
  <div>
  <div class="header">
    <div class="back">主页</div>
    <div class="icon iconfont" @click="showGallary">&#xe603;
   
  </div>
  </div>
    <gallary v-show="show"
             @close="handleGallaryClose"></gallary>

  </div>
</template>

<script>
  import Gallary from './gallary'
  export default {
    data () {
      return {
        show: false
      }
    },
    components: {
      Gallary
    },
    methods: {
      showGallary () {
        this.show = true
      },
      handleGallaryClose () {
        this.show = false
      }
    }
  }
</script>

<style scoped lang="stylus">
  .header
    position: relative
    height: 1rem
    background: #2fd6b4
    .back
      line-height: 1rem
      text-align: center
      font-weight: bold
      font-size: .32rem
      color: #fff
    .icon
      display: flex
      position: absolute
      top: .30rem
      right: .21rem
      font-weight: 900
      font-size: .38rem
      color: #fff
</style>
