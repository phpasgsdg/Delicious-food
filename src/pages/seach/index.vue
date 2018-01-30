<template>
  <div class="container">
    <div class="header">
      我的 <span class="out" v-show = "show" @click="handleOut">退出</span>
    </div>
    <div class="banner">
      <img src="/static/imgs/bj.png" alt="" class="img">
      <img v-show = "!show" class="per" src="/static/imgs//min.png" alt="">
      <div class="person" v-show = "show">
       <img :src="userImg" alt="" class="person-img">
        <div class="person-title">{{this.username}}</div>
      </div>
       <router-link to="/login">
      <div class="icon iconfont" v-show= "!show">点击登录 &#xe62d;</div>
      </router-link>
    </div>
    <div class="list">
       <div class="list-h">
          <div class="lt" v-for="(item, index) in message"
           :key="index" @click="handlehide">
            <img class="lt-img" :src=" item.imgUrl" alt="">
            <h2 class="letter">{{item.state}}</h2>
          </div>
       </div>
       <div class="list-f">
         <div class="lis border-topbottom" v-for="(item, index) in lately"
           :key="index">
           <div class="lis-tit">
             <img class="lis-img" :src=" item.imgUrl" alt="">
             <div class="lis-let">{{item.state}}</div>
           </div>
           <div class="lis-pot iconfont">&#xe62d;</div>
         </div>
       </div>
    </div>
   <foot></foot>
  </div>
</template>

<script>
  import axios from 'axios'
  import foot from '../homepage/foot.vue'
  export default {
    name: 'index',
    data () {
      return {
        show: false,
        personage: [],
        message: [],
        lately: [],
        userinfo: {},
        userImg: '',
        username: ''
      }
    },
    components: {
      foot
    },
    methods: {
      getMessage () {
        axios.get('/index/index/myinfo')
          .then(this.handleDataSucc.bind(this))
          .catch(this.handleDataError.bind(this))
      },
      handleDataSucc (res) {
        res = res ? res.data : null
        if (res) {
          res.message && (this.message = res.message)
          res.lately && (this.lately = res.lately)
          if (res.personage && res.personage.title) {
            this.show = true
            this.userImg = res.personage.imgUrl
            this.username = res.personage.title
          }
        } else {
          console.log('test1')
        }
      },
      handleDataError () {
        console.log('test')
      },
      handleOut () {
        axios.get('/index/user/logout')
          .then(this.handleLoSucc.bind(this))
          .catch(this.handleLoError.bind(this))
      },
      handleLoSucc (res) {
        res = res ? res.data : null
        if (res.status === 1) {
          this.show = false
        }
      },
      handleLoError () {
        console.log('test')
      },
      handlehide (e) {
        if (e.target.innerHTML === '签到') {
          this.$router.push('/signin')
        }
      }
    },
    activated () {
      this.getMessage()
    },
    created () {
      this.getMessage()
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
      .out
        position: absolute
        right: .2rem
        top: .01rem
        font-size: .3rem
        color: #fff
    .banner
      position: relative;
      width: 100%
      overflow: hidden
      height: 0
      padding-bottom: 46.7%
      margin-bottom: .2rem
      text-align: center
      .per
        z-index: 999
        width: 2.12rem
        height: 2.12rem
        position: absolute
        top: 12%
        left: 36%
      .img
        width: 100%
      .person
        position: absolute
        top: 12%
        left: 36%
        .person-img
          width: 2.12rem
          height: 2.12rem
          border-radius: 1.06rem
          margin-bottom: .24rem
        .person-title
          z-index: 2
          font-size: .3rem
          color: #fefefe
      .icon
        position: absolute
        top: 80%
        left: 41%
        font-size: .3rem
        color: #fff
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
