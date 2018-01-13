<template>
  <div class="main">
    <div class="header">
    <div class="header-title">
      <router-link to="/homepage">
    <img src="../resources/sy.png" alt="" class="header-img">
    </router-link>
  </div>
  <h2 class="main-h">七分饱</h2>
  <p class="main-p">每餐七分饱，健康长寿活到老</p>
  </div>
  </div>
</template>
<script>
  export default {
    name: 'index',
    created () {
      var this_ = this
      setTimeout(function () {
        this_.$router.push('/homepage')
      }, 3000)
    }
  }
</script>
<style scoped lang="stylus">
  .header 
    width: 100%;
  .header-title
    margin-top:2.9rem;
    text-align: center;
    .header-img
      width: 2.28rem;
      height: 2.28rem;
      border-radius: 0.3rem;
  .main-h
    text-align: center;
    font-size: 0.6rem;
    font-weight: 900;
    margin:0.24rem 0 0.48rem;
    color: #2fd6b4;
  .main-p
    text-align: center;
    font-size: 0.38rem;
    font-weight: 900;
    color: #2fd6b4;
</style>