<template>
  <div class="container">
    <div class="header">
      我的
    </div>
    <div class="banner">
      <img src="/static/imgs/1.png" alt="" class="img">
      <router-link to="/login">
      <div class="icon iconfont">点击登录 &#xe62d;</div>
      </router-link>
    </div>
    <div class="list">
       <div class="list-h">
          <div class="lt">
            <img class="lt-img" src="/static/imgs/2.png" alt="">
            <h2 class="letter">收藏</h2>
          </div>
          <div class="lt">
            <img class="lt-img" src="/static/imgs/3.png" alt="">
            <h2 class="letter">消息</h2>
          </div>
          <div class="lt">
            <img class="lt-img" src="/static/imgs/4.png" alt="">
            <h2 class="letter">签到</h2>
          </div>
       </div>
       <div class="list-f">
         <div class="lis border-topbottom">
           <div class="lis-tit">
             <img class="lis-img" src="/static/imgs/5.png" alt="">
             <div class="lis-let">最近阅读</div>
           </div>
           <div class="lis-pot iconfont">&#xe62d;</div>
         </div>
         <div class="lis border-topbottom">
           <div class="lis-tit">
             <img class="lis-img" src="/static/imgs/6.png" alt="">
             <div class="lis-let">邀请朋友</div>
           </div>
           <div class="lis-pot iconfont">&#xe62d;</div>
         </div>
         <div class="lis border-topbottom">
           <div class="lis-tit">
             <img class="lis-img" src="/static/imgs/7.png" alt="">
             <div class="lis-let">设置</div>
           </div>
           <div class="lis-pot iconfont">&#xe62d;</div>
         </div>
       </div>
    </div>
   <foot></foot>
  </div>
</template>

<script>
  import foot from '../homepage/foot.vue'
  export default {
    name: 'index',
    components: {
      foot
    }
  }
</script>

<style scoped lang="stylus">
  .container
    display: flex
    flex-direction: column
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: #f5f5f5
    .header
      height: 1rem
      line-height: 1rem
      text-align: center
      font-size: .32rem
      background: #2fd6b4
      color: #fff
    .banner
      position: relative;
      width: 100%
      overflow: hidden
      height: 0
      padding-bottom: 46.7%
      margin-bottom: .2rem
      text-align: center
      .img
        width: 100%
      .icon
        position: absolute
        top: 2.78rem
        left: 3rem
        font-size: .3rem
        color: #fefefe
    .list
      flex: 1
      .list-h
        width: 100%
        height: 2.06rem
        display: flex;
        margin-bottom: .2rem
        background: #fff
        .lt
          width: 33.3%
          display: flex
          flex-direction: column
          justify-content: center
          align-items: center
          .lt-img
            width: .75rem
            height: .75rem
            margin-bottom: .24rem
          .letter
            font-size: .3rem
            color: #000
      .list-f
        height: 3.6rem
        background: #fff
        .lis
          height: 1.2rem
          display: flex
          padding-left: .2rem
          justify-content: space-between
          align-items: center
          .lis-tit
            display: flex
            align-items: center
            .lis-img
              width: .79rem
              height: .79rem
              margin-right: .2rem
            .lis-let
              font-size: .27rem
              color: #000
          .lis-pot 
            font-size: .2rem
            color: #000
            margin-right: .38rem




</style>
