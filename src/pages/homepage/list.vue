  <template>
  <div class="list" ref="scroller">
    <div class="list-title" >
      <div class="list-z border-rightbottom"  
           v-for="(item, index) in lists"
           :key="index">
        <router-link to="/explain">
        <img class="icon" :src="item.imgUrl"  alt="">
        </router-link>
        <div class="letter">{{item.state}}</div>   
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
      height:100%
    .list-title>div:nth-child(3)
      &::before
        border-right: none
    .list-title>div:nth-child(6)
      &::before
        border-right: none
    .list-title>div:nth-child(9)
      &::before
        border-right: none
    .list-title>div:nth-child(10)
      &::after
        border-bottom: none
    .list-title>div:nth-child(11)
      &::after
        border-bottom: none
	  .list-z
	    width: 33.3%
	    height: 25%
	    display: flex
	    flex-direction: column
	    justify-content: center
	    align-items: center
	    &::before
	      border-right: 1px solid #000
	    &::after
	      border-bottom: 1px solid #000
	    .icon
	      width: .9rem
	      height: .86rem
	      margin-bottom: .2rem
		  .letter
		    font-size: .28rem
		    color: #333333
</style>