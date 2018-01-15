<template>
  <div class="container">
    <login-header></login-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import LoginHeader from 'base/header/header'

  export default {
    name: 'login',
    components: {
      LoginHeader
    }
  }
</script>

<style scoped lang="stylus">
@import '../../assets/stylus/common/varibles.styl'
  .container
    display: flex
    flex-direction: column
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #8ffbe5
    background: linear-gradient(top, #8ffbe5, #2fd6b5)
</style>