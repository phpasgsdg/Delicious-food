<template>
  <div class="list" ref="scroller">
    <div class="list-title" >
      <div class="list-z border-rightbottom" >
        <img class="icon" src="../resources/list_03.png"  alt="">
        <div class="letter">推荐</div>   
      </div>
      <div class="list-z border-rightbottom">
        <img class="icon" src="../resources/list_05.png" alt="">
        <div class="letter">饮食禁忌</div>   
      </div>
      <div class="list-z border-rightbottom">
        <img class="icon" src="../resources/list_07.png" alt="">
        <div class="letter">健脑益智</div>   
      </div>
      <div class="list-z border-rightbottom">
        <img class="icon" src="../resources/list_13.png" alt="">
        <div class="letter">防癌</div>   
      </div>
      <div class="list-z border-rightbottom">
        <img class="icon" src="../resources/list_15.png" alt="">
        <div class="letter">助睡眠</div>   
      </div>
      <div class="list-z border-rightbottom">
        <img class="icon" src="../resources/list_17.png" alt="">
        <div class="letter">补血养肾</div>   
      </div>
      <div class="list-z border-rightbottom">
        <img class="icon" src="../resources/list_21.png" alt="">
        <div class="letter">健康养胃</div>   
      </div>
      <div class="list-z border-rightbottom">
        <img class="icon" src="../resources/list_22.png" alt="">
        <div class="letter">美容减肥</div>   
      </div>
      <div class="list-z border-rightbottom">
        <img class="icon" src="../resources/list_23.png" alt="">
        <div class="letter">降血糖血脂</div>   
      </div>
      <div class="list-z border-rightbottom">
        <img class="icon" src="../resources/list_27.png" alt="">
        <div class="letter">防霾</div>   
      </div>
     <div class="list-z border-rightbottom">
        <img class="icon" src="../resources/list_29.png" alt="">
        <div class="letter">提高免疫力</div>   
      </div>
       <div class="list-z border-rightbottom">
        <img class="icon" src="../resources/list_29.png" alt="">
        <div class="letter">提高免疫力</div>   
      </div>
       <div class="list-z border-rightbottom">
        <img class="icon" src="../resources/list_29.png" alt="">
        <div class="letter">提高免疫力</div>   
      </div>
       <div class="list-z border-rightbottom">
        <img class="icon" src="../resources/list_29.png" alt="">
        <div class="letter">提高免疫力</div>   
      </div>
       <div class="list-z border-rightbottom">
        <img class="icon" src="../resources/list_29.png" alt="">
        <div class="letter">提高免疫力</div>   
      </div>

    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'lists',
    props: {
      lists: Array
    },
    methods: {
      createScroller () {
        this.scroller = new BScroll(this.$refs.scroller, {
          probeType: 2
        })
      }
    },
    mounted () {
      this.createScroller()
    }
  }
</script>

<style scoped lang="stylus">
  .list
    flex: 1
    overflow: hidden
    margin-bottom: .2rem
    background: #fff
    .list-title
      display: flex
      flex-wrap: wrap
	  .list-z
	    width: 33.3%
	    height: 1.79rem
	    display: flex
	    flex-direction: column
	    justify-content: center
	    align-items: center
	    &::before
	      border-right: 1px solid #999
	    &::after
	      border-bottom: 1px solid #999
	    .icon
	      width: .9rem
	      height:0.6rem
	      margin-bottom: .2rem
		  .letter
		    font-size: .28rem
		    color: #333333

</style>