<template>
  <div class="login-container">
    <logo></logo>
    <div class="login-area">
      <div class="left-area iconfont">
        &#xe611;
      </div>
      <input class="right-area" type="text" placeholder="请输入您的用户名" v-model="username">
    </div>
    <div class="login-area">
      <div class="left-area iconfont">
        &#xe6d3;
      </div>
      <input class="right-area" type="password" placeholder="请输入您的密码" v-model="password">
    </div>
    <login-choose></login-choose>
    <div class="login-btn" @click="handleClickLogin">登录</div>
    <login-link></login-link>
    <router-link to="/login/phone" class="login-pattern-link">快速登陆</router-link>
  </div>
</template>

<script>
  import LoginChoose from './loginchoose'
  import LoginLink from './loginlink'
  import Logo from 'base/logo/logo'
  import axios from 'axios'
  export default {
    name: 'pwdLogin',
    components: {
      Logo,
      LoginChoose,
      LoginLink
    },
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      getLoginMessage () {
        axios.post('/index/user/login', {
          username: this.username,
          password: this.password
        })
        .then(this.handleGetMessageSucc.bind(this))
        .catch(this.handleGetMessageErr.bind(this))
      },
      handleGetMessageSucc (res) {
        const isLogin = res.data.isLogin
        if (isLogin && res.data.status === 1) {
          window.localStorage.usernameinfo = JSON.stringify(res.data.status)
          this.$router.push('/homepage')
        }
      },
      handleGetMessageErr () {
        console.log('err')
      },
      handleClickLogin () {
        this.getLoginMessage()
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/stylus/common/varibles.styl'
  .login-container
    position: relative
    box-sizing: border-box
    height: 7.56rem
    width: 6.58rem
    margin: 0 auto
    padding: 1.8rem .3rem 0
    background: #fff
    border-radius: .1rem
    box-shadow: 0 0 .3rem #00876b
    .login-area
      display: flex
      height: .8rem
      line-height: .8rem
      margin-bottom: .3rem
      .left-area
        box-sizing: border-box
        width: .8rem
        line-height: .8rem
        text-align: center
        font-size: .4rem
        border: .01rem solid #999
        border-radius: .1rem 0 0 .1rem 
        background: $bgColor
        color: #fff
      .right-area
        flex: 1
        position: relative
        box-sizing: border-box
        border: none
        line-height: .75rem
        padding-left: .16rem
        border: .01rem solid #999
        border-radius: 0 .1rem .1rem 0
  .login-btn
    box-sizing: border-box
    height: .8rem
    line-height: .8rem
    text-align: center
    margin-bottom: .3rem
    font-size: .28rem
    border: .01rem solid #019d7d
    border-radius: .1rem
    color: #fff
    background: $bgColor
  .login-pattern-link
    position: absolute
    bottom: .2rem
    left: 50%
    line-height: .4rem
    font-size: .28rem
    color: $fontColor
    transform: transLateX(-50%)
</style>