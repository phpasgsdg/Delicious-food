<template>
  <div class="explain">
   <div class="header">
     <div class="ico ">
       <router-link to="/homepage">
         <div class="header-l iconfont">&#xe622;</div>
       </router-link>
     </div>
     <div class="ico header-c">详情</div>
     <div class="ico header-r iconfont">&#xe603;</div>
   </div>
   <div class="nav-img">
     <img class="l-img" src='/static/imgs/expla.png' alt="">
   </div>

  </div>
</template>
<script>
  export default {
    name: 'index'
  }
</script>
<style scoped lang="stylus">
  .explain
    display: flex
    flex-direction: column
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    .header
      display: flex
      justify-content: center
      align-items: center
      min-height: 1rem
      width: 100%
      background: #2fd6b4
      .ico
        width: 33.3%
        font-size: .4rem
        color: #fff
      .header-l
        margin-left: .2rem
        color: #fff
      .header-c
        text-align: center
      .header-r
        text-align: right
        margin-right: .2rem
    .nav-img
      flex: 1
      .l-img
        width: 100%
        height: 100%
</style>