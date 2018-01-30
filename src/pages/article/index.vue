<template>
  <div class="explain">
   <div class="header">
     <div class="ico ">
         <div class="header-l iconfont" @click="dandledClick">&#xe622;</div>
     </div>
     <div class="ico header-c">详情</div>
   </div>
   <div class="arct" v-html='content'>
     {{content}}
   </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'index-article',
    data () {
      return {
        content: ''
      }
    },
    watch: {
      content () {
        this.$nextTick(() => {
          const imgElem = document.getElementsByTagName('img')
          for (var i = 0; i < imgElem.length; i++) {
            imgElem[i].style.width = '100%'
          }
        })
      }
    },
    methods: {
      getIndexData () {
        axios.post('/index/essay/info_byeid', {eid: this.$route.params.sightId})
          .then(this.handleDataSucc.bind(this))
          .catch(this.handleDataError.bind(this))
      },
      handleDataSucc (res) {
        console.log(res)
        res = res ? res.data : null
        if (res) {
          res.content && (this.content = res.content)
        }
      },
      handleDataError () {
        console.log(this.$route.params.sightId)
      },
      dandledClick () {
        this.$router.go(-1)
      }
    },
    activated () {
      this.getIndexData()
    }
  }
</script>
<style scoped lang="stylus">
  .explain
    display: flex
    flex-direction: column
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    .header
      display: flex
      align-items: center
      min-height: 1rem
      width: 100%
      background: #2fd6b4
      .ico
        width: 33.3%
        font-size: .4rem
        color: #fff
      .header-l
        margin-left: .2rem
        color: #fff
      .header-c
        text-align: center
      .header-r
        text-align: right
        margin-right: .2rem
    .arct
      flex: 1
      background: #eee
</style>