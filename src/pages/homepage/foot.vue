<template>
  <div class="foot border-top">
    <div class="fmain">
	    <div class="foot-title" >
        <router-link to="/homepage">
	      <div class="foot-img fot iconfont">&#xe63d;</div>
	      <div class="foot-letter">主页</div>
        </router-link>     
	    </div>
      <div class="foot-title" >
        <router-link class="footlat" to="/inquire">
        <img class="foot-img" src='http://www.blackmed.cn/public/static/imgs/f_05.png'alt="">
        <div class="foot-letter">营养查询</div>
        </router-link>       
      </div>
      <div class="foot-title" >
      <router-link to="/seach">
        <img class="foot-img" src='http://www.blackmed.cn/public/static/imgs/f_07.png' alt="">
        <div class="foot-letter">我的</div> 
      </router-link>      
      </div>
	</div>
  </div>
</template>

<script>
  export default {
    name: 'foot'
  }
</script>

<style scoped lang="stylus">
  .foot
    height: 1.1rem
    background: #fbfbfb
    &::before
      border-top: 1px solid #000
    .fmain
      display: flex
    .foot-title
      width: 33.3%
      height: 1.1rem
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      .footlat
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
	    .foot-img
	      width: 0.54rem
	      height: .54rem
	      margin-bottom: .1rem
      .fot
        font-size: .54rem
        color: #333333
	    .foot-letter
        color: #333333
	      ont-size: .22rem
</style>
