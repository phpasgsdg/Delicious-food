<template>
  <div class="gallary animated slideInDown">
   <div class="search">
     <div class="header">
       <div class="header-z">
         <i class="iconfont header-seach" @click="handleInput">&#xe603;</i>
         <input type="text" class="import"  placeholder="输入你要搜索的内容" ref="inp">
       </div> 
       <div @click="handleGallaryClose" class="cancel iconfont">&#xe613;</div>
     </div>
   </div>
  <div class="collect">
    <div class="history">
      <h2 class="history-title">历史记录<span class="history-clear" @click="handleClear">清除</span></h2>
      <ul class="history-list">
        <li class="list-h" v-for="item of list">{{item}}</li>
      </ul>
    </div>
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
  </div>
</template>

<script>
  export default {
    name: 'gallary',
    data () {
      return {
        list: ['减肥', '吃什么能降血脂', '减肥']
      }
    },
    methods: {
      handleGallaryClose () {
        this.$emit('close')
      },
      handleInput (e) {
        this.list.push(this.$refs.inp.value)
        this.$refs.inp.value = ''
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
    .collect
      flex: 1
      margin: 0 .2rem
      .history
        margin-bottom: .3rem
        .history-title
          font-size: .3rem
          color: #222627
          margin-bottom: .2rem
          .history-clear
            float: right
        .history-list
          display: flex
          flex-wrap: wrap
          .list-h
            height: .6rem
            line-height: .6rem
            text-align: center
            border-radius: .2rem
            margin: 0 .2rem .2rem 0
            background: #fff
            font-size: .3rem
            color: #000
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
</style>
