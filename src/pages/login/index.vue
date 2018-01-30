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

</style>