<template>
  <div class="gallary animated slideInDown">
   <div class="search">
     <input type="text" class="import" placeholder="输入你要搜索的内容">
     <div @click="handleGallaryClose" class="cancel">取消</div>
   </div>
  </div>
</template>

<script>
  export default {
    name: 'gallary',
    methods: {
      handleGallaryClose () {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped lang="stylus">
  .gallary
    position:absolute
    top: 1rem
    left: 0
    right: 0
    bottom: 0
    background: #ccc
    z-index: 2
    .search
      position: relative
      height: .8rem
      display: flex
      justify-content: center
      align-items: center
      background: #fff
      .cancel
        position: absolute
        top: .2rem
        right: .21rem
        font-size: .30rem
        color: #000
</style>
