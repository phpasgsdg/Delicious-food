<template>
  <div class="login-container">
    <logo></logo>

    <div class="login-area">
      <div class="left-area iconfont">
        &#xe611;
      </div>
      <input class="right-area" type="text" placeholder="请输入您的用户名" v-model="cellNumber" @change="handleUserChange">
    </div>
    <div class="login-area">
      <div class="left-area iconfont">
        &#xe620;
      </div>
      <input class="right-area" type="text" placeholder="请输入您的验证码" v-model="authCode">
      <span class="auth-code" @click="handleAuthCodeSend">发送验证码</span>
    </div>

    <div class="login-btn" @click="handleLogin">登录</div>

    <router-link to="/login/pwd" class="login-pattern-link">普通登陆</router-link>
  </div>
</template>

<script>
  import Logo from 'base/logo/logo'
  import axios from 'axios'

  export default {
    name: 'login-main',
    components: {
      Logo
    },
    data () {
      return {
        cellFlag: false,
        cellNumber: '',
        authCode: ''
      }
    },
    methods: {
      handleUserChange () {
        const reg = /^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/
        if (reg.test(this.cellNumber)) {
          this.cellFlag = true
        }
      },
      handleAuthCodeSend () {
        if (this.cellFlag) {
          axios.get('/index/user/getCode', {cellNumber: this.cellNumber})
            .then(this.handleGetCodeSucc.bind(this))
            .catch(this.handleGetCodeErr.bind(this))
        }
      },
      handleGetCodeSucc (res) {
        axios.post('/index/user/checkmsg')
          .then(this.handleSendCodeSucc.bind(this))
          .catch(this.handleSendCodeErr.bind(this))
      },
      handleSendCodeSucc (res) {
        if (res.data.status === 1) {
          this.$router.push('/homepage')
        } else {
          alert('请输入正确的验证码')
        }
      },
      handleGetCodeErr () {
        console.log('验证码发送错误')
      },
      handleSendCodeErr () {
        console.log('验证码获取错误')
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
      .auth-code
        box-sizing: border-box
        margin: .1rem 0 0 .1rem
        padding: 0 .1rem
        height: .6rem
        text-align: center
        line-height: .6rem
        color: #fff
        border: .01rem solid #999
        border-radius: .1rem
        background: $bgColor
  .login-btn
    box-sizing: border-box
    height: .8rem
    line-height: .8rem
    text-align: center
    margin-top: .8rem
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