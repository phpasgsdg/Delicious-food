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
   <div class="collect" @click="handlecollect">收藏</div>
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
      handleGetUserSucc (res) {
        this.isLogin = res.data.personage.islogin
      },
      handleGetUserErr () {
        console.log('用户未登录')
      },
      dandledClick () {
        this.$router.push('/homepage')
      },
      handlecollect () {
        if (this.isLogin) {
          axios.post('index/essay/collect', {eid: this.$route.params.sightId})
            .then(this.handleCollSucc.bind(this))
            .catch(this.handleCllError.bind(this))
        } else {
          alert('请先登录再收藏')
        }
      },
      handleCollSucc (res) {
        if (res.data.status) {
          alert(res.data.msg)
        } else if (res.data.status === 0) {
          alert(res.data.msg)
        }
      },
      handleCllError () {
        alert('请求错误')
      }
    },
    activated () {
      this.getIndexData()
    },
    created () {
      axios.post('/index/index/myinfo')
        .then(this.handleGetUserSucc.bind(this))
        .catch(this.handleGetUserErr.bind(this))
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
    .collect
      position: fixed
      bottom: .2rem
      right: .2rem
      width: 1rem
      height: 1rem
      line-height: 1rem
      text-align: center
      font-size: .4rem
      background: pink
      border-radius: .5rem
      color: #000
</style>