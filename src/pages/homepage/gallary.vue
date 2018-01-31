<template>
  <div class="gallary animated slideInDown">
   <div class="search">
     <div class="header">
       <div class="header-z">
         <i class="iconfont header-seach" @click="handleInput">&#xe603;</i>
         <input class="import" placeholder="输入你要搜索的内容" ref="inp" >
       </div> 
       <div @click="handleGallaryClose" class="cancel iconfont">&#xe613;</div>
     </div>
   </div>
  <div class="collect" v-show= "!showList">
    <div class="hot">
      <h2 class="hot-title">热门搜素</h2>
      <ul class="hot-list">
        <li class="list-t">减肥</li>
        <li class="list-t">吃什么能降血脂</li>
        <li class="list-t">减肥</li>
        <li class="list-t">减肥</li>
      </ul> 
    </div>  
  </div>

  <div class="nav-img" v-show="showList">
    <ul>
      <router-link  v-for="(item, index) in essayed"
           :key="index" class="nav-li" tag="li" :to="'/article/' + item.eid" >
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
    name: 'gallary',
    data () {
      return {
        list: [{'name': '减肥', 'spell': 'jianfei'}, {'name': '吃什么能降血脂', 'spell': 'chishemenengjiangxuezhi'}, {'name': '多运动', 'spell': 'duoyund'}],
        showList: false,
        essayed: []
      }
    },
    methods: {
      handleGallaryClose () {
        this.$emit('close')
      },
      handleInput (e) {
        console.log(this.$refs.inp.value)
        axios.post('/index/essay/essay_search', {
          keyword: this.$refs.inp.value})
          .then(this.handleGetListSucc.bind(this))
          .catch(this.handleGetListErr.bind(this))
        this.$refs.inp.value = ''
      },
      handleGetListSucc (res) {
        res = res ? res.data : null
        if (res) {
          res.essay && (this.essayed = res.essay)
          this.showList = true
        }
      },
      handleGetListErr () {
        alert('么有您要的内容')
      },
      handleClear (e) {
        this.list = []
      }
    }
  }
</script>

<style scoped lang="stylus">
  .gallary
    position:absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #87a6c0
    display: flex
    flex-direction: column
    opacity: 1
    z-index: 2
    .search
      height: 1.1rem
      padding: .25rem .2rem 0
      display: flex
      align-items: center
      .header
        display: flex
        justify-content: space-between;
        align-items: center
        width: 100%
        border-radius: 10px
        background: #fff
        .header-z
          display: flex
          height: .6rem
          align-items: center
          .header-seach
            width: .38rem
            height: .38rem
            font-size: .38rem
            margin: 0 .2rem
            color: #999
          .import
            border: none
            background: #fff
        .cancel
          margin-right: 0.12rem
          font-size: .38rem
          color: #000
    .search-list
        .search-item 
          margin-bottom: .2rem
    .collect
      .hot
        .hot-title
          font-size: .3rem
          color: #222627
          margin-bottom: .2rem
        .hot-list
          display: flex
          flex-wrap: wrap
          .list-t
            height: .6rem
            line-height: .6rem
            text-align: center
            border-radius: .2rem
            margin: 0 .2rem .2rem 0
            background: #fff
            font-size: .3rem
            color: #000
    .nav-img
      position: absolute
      top: 2rem
      left: 0
      right: 0
      bottom: 0
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
