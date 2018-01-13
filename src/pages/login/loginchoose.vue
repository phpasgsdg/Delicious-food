<template>
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
</template>

<script>
  export default {
    name: 'loginChoose'
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/stylus/common/varibles.styl'
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
</style>