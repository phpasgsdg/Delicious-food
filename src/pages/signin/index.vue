<template>
  <div class='container'>
    <router-link to='/seach' class='header' tag='div'>
      <img src='../../../static/imgs/back.png' alt='回退' class='back'>
    </router-link>
    <div class='main'>
      <div class='title'>
        签到
      </div>
      <div class='signin'>
        <div class='sign-state' v-for='(item, index) in signArr' :key='index'>
          <h2 class='sign-days'>{{item.title}}</h2>
          <img :src='item.imgUrl' alt="" class='signin-img'>
          <div class='active' v-show='item.state'></div>
          <img src="../../../static/imgs/singin2.png" alt='' class='signined-img' v-show='item.state'>
        </div>
      </div>
      <div class='click-signin' @click='handleClickSignin'>
        点击签到
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'signin',
    data () {
      return {
        isLogin: false,
        signin: false,
        signArr: [{
          title: '',
          state: false,
          imgUrl: ''
        }]
      }
    },
    methods: {
      handleGetUserSucc (res) {
        this.isLogin = res.data.personage.islogin
      },
      handleGetUserErr () {
        console.log('用户未登录')
      },
      handleGetSignInfoSucc (res) {
        this.signArr = res.data
      },
      handleGetSignInfoErr () {
        console.log('获取数据失败')
      },
      handleClickSignin () {
        if (this.isLogin) {
          axios.get('/index/user/dosign')
            .then(this.handleSigninSucc.bind(this))
            .catch(this.handleSigninErr.bind(this))
        } else {
          alert('请先登录再签到')
        }
      },
      handleSigninSucc (res) {
        if (res.data.state) {
          alert(res.data.msg)
          axios.get('/index/user/signday')
            .then(this.handleGetSignInfoSucc.bind(this))
            .catch(this.handleGetSignInfoErr.bind(this))
        } else {
          alert(res.data.msg)
        }
      },
      handleSigninErr () {
        console.log('签到失败')
      }
    },
    created () {
      axios.post('/index/index/myinfo')
        .then(this.handleGetUserSucc.bind(this))
        .catch(this.handleGetUserErr.bind(this))
      axios.get('/index/user/signday')
        .then(this.handleGetSignInfoSucc.bind(this))
        .catch(this.handleGetSignInfoErr.bind(this))
    }
  }
</script>
<style scoped lang="stylus">
  .container
    position: absolute
    top: .44rem
    left: 0
    right: 0
    bottom: 0
  .back
    height: .42rem
    margin: .18rem 0 .18rem .3rem
  .main
    position: absolute
    top: 2.96rem
    left: .46rem
    right: .46rem
    bottom: 2.4rem
    background: #fff
    border-radius: .1rem
    box-shadow: 0 0 .3rem #00876b
    .title
      height: 1.8rem
      width: 1.8rem
      background: #2fd6b5
      border: .06rem solid #fff
      border-radius: 100%
      box-shadow: 0 0 .3rem #00876b
      position: absolute
      top: -.96rem
      left: 50%
      transform: translateX(-50%)
      line-height: 1.92rem
      text-align: center
      font-size: .32rem
      color: #fff
    .signin
      position: absolute
      top: .88rem
      height: 4.22rem
      width: 100%
      .sign-state
        position: relative
        float: left
        height: 1.92rem
        width: 1.66rem
        border-radius: .1rem
        box-shadow: 0 0 .3rem #00876b
        margin: .4rem .26rem 0
  .sign-days
    position:relative
    z-index: 1
    font-size: .28rem
    text-align: center
    padding-top: .36rem
  .signin-img
    width: 1.07rem
    position: absolute
    top: .82rem
    left: .18rem
  .signined-img
    width: 100%
    position: absolute
    top: .2rem
  .click-signin
    width: 1.66rem
    line-height: .6rem
    text-align: center
    margin: 6.2rem auto 0
    font-size: .28rem
    color: #fff
    background: #2fd6b4
    border-radius: .05rem
  .active
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    opacity: .6
    background: #eee
    
</style>