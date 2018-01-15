<template>
  <div class="container">
    <div class="header">
      <img src="/static/imgs/my.png" class="img-header">
     用户名
    </div>
    <ul class="list">
      <li class="item-list border-top">
        <span class="iconfont icon">&#xe6c5;</span>
        个人主页
      </li>
      <li class="item-list border-top">
        <span class="iconfont icon">&#xe64d;</span>
        我的消息
      </li>
      <li class="item-list border-top">
        <span class="iconfont icon">&#xe63b;</span>
        收藏
      </li>
      <li class="bagcolor"></li>
      <li class="item-list border-top">
        <span class="iconfont icon">&#xe658;</span>
        历史
      </li>
      <li class="item-list border-top">
        <span class="iconfont icon">&#xe63c;</span>
        设置
      </li>
    </ul>
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
    .header
      margin-left: .2rem
      margin-bottom: .6rem
      line-height: 2.24rem
      font-size: .32rem
      color: #666
      .img-header
        width: 1.02rem
        height: 1.02rem
        margin-right: .2rem
        border-radius: 100%
    .list
      flex: 1
      .item-list
        margin-left: .2rem
        line-height: .89rem
        font-size: .26rem
        .icon
          padding-right: .4rem
          color: #999
      .bagcolor
        height: .2rem
        background: #f5f5f5
</style>
