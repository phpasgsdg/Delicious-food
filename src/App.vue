<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style scoped lang="stylus">
  #app
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
