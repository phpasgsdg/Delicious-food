<template>
  <div class="foot border-top">
    <div class="fmain">
	    <div class="foot-title">
	      <img class="foot-img" src="../resources/f_03.png" alt="">
	      <div class="foot-letter">推荐</div>       
	    </div>
	    <div class="foot-title">
	      <img class="foot-img" src="../resources/f_05.png" alt="">
	      <div class="foot-letter">营养查询</div>       
	    </div>
	    <div class="foot-title">
	      <img class="foot-img" src="../resources/f_07.png" alt="">
	      <div class="foot-letter">我的</div>       
	    </div>
	</div>
  </div>
</template>

<script>
  export default {}
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
	  .foot-img
	    width: 0.54rem
	    height: .54rem
	    margin-bottom: .1rem
	  .foot-letter
	    font-size: .22rem

</style>
