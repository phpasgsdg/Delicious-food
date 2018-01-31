<template>
  <div class="reading">
    <div class="read">
      <div class="header-l read-icn iconfont" @click="handleRead">&#xe622;</div>
      <div class="header-l">收藏</div>
    </div>
    <div class="nav-img">
    <ul>
      <router-link  v-for="(item, index) in essay"
           :key="index" class="nav-li" tag="li" :to="'/article/' + item.eid">
        <h3 class="nav-h3">{{item.title}}</h3>
        <img class="icon" :src="item.pic"  alt="">
        <p class="nav-p">{{item.auth}} <br><span class="nav-spn">{{item.addtime}}</span></p>
      </router-link>
    </ul>
   </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'index-collect',
    data () {
      return {
        essay: []
      }
    },
    methods: {
      handleGetUserSucc (res) {
        this.isLogin = res.data.personage.islogin
        if (this.isLogin) {
          this.getCollect()
        }
      },
      handleGetUserErr () {
        console.log('用户未登录')
      },
      getCollect () {
        axios.post('/index/essay/shoucang')
         .then(this.handleGetSignInfoSucc.bind(this))
         .catch(this.handleGetSignInfoErr.bind(this))
      },
      handleGetSignInfoSucc (res) {
        console.log(res)
        res = res ? res.data : null
        if (res) {
          res.essay && (this.essay = res.essay)
        }
      },
      handleGetSignInfoErr () {
        console.log('获取数据失败')
      },
      handleRead () {
        this.$router.push('/seach')
      }
    },
    created () {
      axios.post('/index/index/myinfo')
        .then(this.handleGetUserSucc.bind(this))
        .catch(this.handleGetUserErr.bind(this))
    }
  }
</script>
<style scoped lang="stylus">
    .read
      display: flex
      align-items: center
      height: 1rem
      width: 100%
      background: #eee
      .header-l
        width: 40%
        font-size: .36rem
        font-weight: 900
        color: #000
      .read-icn
        padding-left: .2rem
    .nav-img
      display: flex
      flex-direction: column
      position: absolute
      top: 1rem
      right: 0
      bottom: 0
      left: 0
      background: #fff
      padding: .1rem
      .nav-li
        width: 100%
        height: 3rem
        margin-top: .3rem
        background: #eee
        border-radius: 0.2rem
        .nav-h3
          font-size: 0.26rem
          color: #000
          font-weight: 900
          padding: .4rem 0 .4rem .2rem
        .nav-p
          font-size: .2rem
          color: #000
          text-align: right
          margin-right: .2rem
          .nav-spn
            font-size: .2rem
            color: #000
        .icon
          margin-left: .5rem
          height: 1.5rem
          width: 3rem
</style>