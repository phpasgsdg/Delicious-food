<template>
  <div class="logo-box">
    <div class="logo">
      <img src="../../common/logo.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'logo',
    data () {
      return {}
    }
  }
</script>

<style scoped lang="stylus">
@import '../../assets/stylus/common/varibles.styl'
  .logo-box
    position: absolute
    height: 1.96rem
    width: 1.96rem
    top: -.98rem
    left: 2.35rem
    border-radius: .98rem
    box-shadow: 0 0 .3rem #999
    background: #fff
    .logo
      position: absolute
      height: 1.84rem
      width: 1.84rem
      border-radius: .98rem
      top: 0
      left: 0
      right: 0
      bottom: 0
      margin: auto
      img
        width: 100%
        height: 100%
</style>