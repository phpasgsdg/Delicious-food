<template>
  <div class="explain">
   <div class="header">
     <div class="ico ">
       <router-link to="/homepage">
         <div class="header-l iconfont">&#xe622;</div>
       </router-link>
     </div>
     <div class="ico header-c">列表</div>
     <div class="ico header-r iconfont">&#xe603;</div>
   </div>
   <div class="nav-img">
    <ul>
      <router-link  v-for="(item, index) in essay"
           :key="index" class="nav-li" tag="li" :to="'/article/' + item.eid">
        <h3 class="nav-h3">{{item.title}}</h3>
        <img class="icon" :src="item.pic"  alt="">
        <p class="nav-p">{{item.auth}} <br><span class="nav-spn">{{item.addtime}}</span></p>
      </router-link>
    </ul>
   </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'index-explain',
    data () {
      return {
        essay: []
      }
    },
    watch: {
      essay () {
        this.$nextTick(() => {})
      }
    },
    methods: {
      getIndexData () {
        axios.post('/index/essay/lists', {id: this.$route.params.sightId})
          .then(this.handleDataSucc.bind(this))
          .catch(this.handleDataError.bind(this))
      },
      handleDataSucc (res) {
        res = res ? res.data : null
        if (res) {
          res.essay && (this.essay = res.essay)
        }
      },
      handleDataError () {
        console.log('error')
        console.log(this.$route.params)
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
      justify-content: center
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
    .nav-img
      flex: 1
      background: #fff
      padding: .1rem
      .nav-li
        width: 100%
        height: 3rem
        margin-top: .3rem
        background: #eee
        border-radius: 0.2rem
        .nav-h3
          font-size: 0.26rem
          color: #000
          font-weight: 900
          padding: .4rem 0 .4rem .2rem
        .nav-p
          font-size: .2rem
          color: #000
          text-align: right
          margin-right: .2rem
          .nav-spn
            font-size: .2rem
            color: #000
        .icon
          margin-left: .5rem
          height: 1.5rem
          width: 3rem
</style>