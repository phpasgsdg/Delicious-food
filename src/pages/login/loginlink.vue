<template>
  <div class="another">
    <router-link class="link" to="/login/forget">忘记密码</router-link>
    <router-link class="link" to="/register">立即注册</router-link>
  </div>
</template>

<script>
  export default {
    name: 'loginLink'
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/stylus/common/varibles.styl'
  .another
    display: flex
    justify-content: space-between
    .link
      color: $fontColor
</style>