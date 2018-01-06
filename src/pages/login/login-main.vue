<template>
  <div class="login-container">
    <logo></logo>
    <div class="login-area">
      <div class="left-area iconfont">
        &#xe611;
      </div>
      <input class="right-area" type="text" placeholder="请输入您的用户名">
    </div>
    <div class="login-area">
      <div class="left-area iconfont">
        &#xe6d3;
      </div>
      <input class="right-area" type="password" placeholder="请输入您的密码">
    </div>
    <div class="login-choose">
      <div class="choose-item">
        <input type="checkbox" id="remeber-me" class="state">
        <label for="remeber-me">记住密码?</label>
      </div>
      <div class="choose-item">
        <input type="checkbox" id="auto-login" class="state">
        <label for="auto-login">自动登录</label>
      </div>
    </div>
    <div class="login-btn">登录</div>
    <div class="another">
      <a class="link">忘记密码</a>
      <a class="link">立即注册</a>
    </div>
  </div>
</template>

<script>
  import Logo from './logo'

  export default {
    name: 'login-main',
    components: {
      Logo
    },
    data () {
      return {

      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/stylus/common/varibles.styl'
  .login-container
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
  .login-choose
    display: flex
    justify-content: space-between
    margin-bottom: .3rem
    .choose-item
      display: flex
      align-items: center
      font-size: .28rem
      color: $fontColor
      .state
        margin-right: .1rem
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
  .another
    display: flex
    justify-content: space-between
    .link
      color: $fontColor
</style>