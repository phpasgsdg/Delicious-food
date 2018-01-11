<template>
  <div class="hompage">
    <index-header></index-header>
	<slider :sliders="sliders"></slider>
  <list></list>
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
        sliders: []
      }
    },
    methods: {
      getIndexData () {
        axios.get('../../static/index.json')
          .then(this.handleDataSucc.bind(this))
          .catch(this.handleDataError.bind(this))
      },
      handleDataSucc (res) {
        res = res ? res.data : null
        if (res && res.ret && res.data) {
          res.data.slider && (this.sliders = res.data.slider)
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