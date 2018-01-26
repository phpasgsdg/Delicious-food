<template>
  <div class="login-container">
    <logo></logo>

    <div class="login-area">
      <div class="left-area iconfont">
        &#xe611;
      </div>
      <input class="right-area" type="text" placeholder="请输入手机号码" v-model="cellNumber">
    </div>
    <div class="login-area">
      <div class="left-area iconfont">
        &#xe6a1;
      </div>
      <input class="right-area" type="password" placeholder="请输入您的密码" v-model="authCode">
      <span class="auth-code" @click="handleSendPassword">发送密码</span>
    </div>

    <div class="login-btn">登录</div>
  </div>
</template>

<script>
  import Logo from 'base/logo/logo'

  export default {
    name: 'login-main',
    components: {
      Logo
    },
    data () {
      return {
        flag: false,
        cellNumber: '',
        authCode: ''
      }
    },
    methods: {
      handleSendPassword () {
        const reg = /^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/
        if (reg.test(this.cellNumber)) {
          console.log('本来应该发axios请求的，但是因为没有第三方授权，就没写')
        }
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
    box-shadow: 0 0 .3rem #999
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
</style>
