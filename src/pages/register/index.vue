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