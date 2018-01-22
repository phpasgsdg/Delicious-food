<template>
  <div class="hompage">
    <index-header></index-header>
	<slider :sliders="sliders"></slider>
  <list :lists="lists"></list>
  <foot></foot>
  </div>
</template>
<script>
  import axios from 'axios'
  import IndexHeader from './header'
  import Slider from './slider'
  import List from './list'
  import Foot from './foot'
  export default {
    name: 'homepage',
    components: {
      IndexHeader,
      Slider,
      List,
      Foot
    },
    data () {
      return {
        sliders: [],
        lists: []
      }
    },
    methods: {
      getIndexData () {
        axios.get('/index/index/main')
          .then(this.handleDataSucc.bind(this))
          .catch(this.handleDataError.bind(this))
      },
      handleDataSucc (res) {
        res = res ? res.data : null
        if (res) {
          res.slider && (this.sliders = res.slider)
          res.lists && (this.lists = res.lists)
        } else {
          this.handleDataError()
        }
      },
      handleDataError () {
        console.log('error')
      }
    },
    created () {
      this.getIndexData()
    }
  }
</script>
<style scoped lang="stylus">
  .hompage
    display: flex
    flex-direction: column
    position: absolute
    left: 0
    right: 0
    bottom: 0
    top: 0
    background: #f5f5f5
</style>