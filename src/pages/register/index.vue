<template>
  <div class="container">
    <register-header></register-header>
    <register-body></register-body>
  </div>
</template>

<script>
  import RegisterHeader from 'base/header/header'
  import RegisterBody from './register'
  export default {
    name: 'login',
    components: {
      RegisterHeader,
      RegisterBody
    }
  }
</script>

<style scoped lang="stylus">
</style>