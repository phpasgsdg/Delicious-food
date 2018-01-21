<template>
	<div class="inqire">
	  <div class="header">营养查询</div>
	  <div class="details">
	 	 <div class="details-img">
	  		<img class="imgs" src="http://qifenbao.yungchoyee.top/public/static/imgs/inquire.png" alt="">
	  		<input class="deta-inp" type="text" placeholder="请输入食物名称" v-model="food">
	  		<div class="wid border-bottom">
	  			<h2 class="wid-h">重量（g）</h2>
	  			<input class="wid-inp " placeholder="请输入总量" v-model="weight">
	  		</div>
	  		<div class="delet">
	  			<div class="delet-top iconfont">&#xe76b;</div>
	  			<div class="delet-left" @click="handleDele">归零</div>
	  		</div>
	  		<div class="hits">
	  			<button class="hit" @click="handleSeach">点击查询</button>
	  		</div>
	  		<div class="hit-end" v-show="show" v-model='p'>食物的卡路里：{{p}}</div>
	  	 </div>
	  </div>
	  <foot></foot>
	</div>
</template>
<script>
import axios from 'axios'
import foot from '../homepage/foot.vue'
export default {
  name: 'inquire',
  data () {
    return {
      food: '',
      weight: '',
      show: false,
      p: ''
    }
  },
  methods: {
    handleSeach () {
      axios.post('/index/food/info', {
        food: this.food,
        weight: this.weight
      })
      .then(this.handleGetMessageSucc.bind(this))
      .catch(this.handleGetMessageErr.bind(this))
    },
    handleGetMessageSucc (res) {
      this.p = res.data.cal
      this.show = true
    },
    handleGetMessageErr () {
      console.log('meiyou')
    },
    handleDele () {
      this.food = ''
      this.weight = ''
    }
  },
  components: {
    foot
  }
}
</script>
<style scoped lang="stylus">
  .inqire
    display: flex
    flex-direction: column
    position: absolute
    left: 0
    right: 0
    bottom: 0
    top: 0
    .header
      width: 100%
      height: .9rem
      background: #2fd6b4
      color: #fff
      font-size: .3rem
      line-height: .9rem
      text-align: center
	.details
	  flex: 1
	  padding: .45rem .2rem 0
	  .details-img
	    position: relative
	    width: 7.15rem
	    height: 7.5rem
	    .imgs
	      width: 100%
	      height: 100%
	    .deta-inp
	      position: absolute
	      left: 2.42rem
	      top: 2.5rem
	      width: 2.2rem
	      height: .6rem
	      border: none
	      border-radius: .2rem
	      background: #fff
	      font-size: .3rem
	      color: #999
	      text-align: center
	    .wid
	      width: 2.42rem
	      height: 1.2rem
	      position: absolute
	      top: 3.61rem
	      left: 2.42rem
	      &::before
	        border-bottom: 4px solid #fff
	      .wid-h
	        margin-bottom: 0.26rem
	        font-size: .3rem
	        color: #fff
	        text-align: center
	      .wid-inp
	        width: 2.42rem
	        height: .6rem
	        border: none
	        background: #2fd6b4
	        font-size: .3rem
	        color: #999
	        text-align: center
	    .delet
	      width: .74rem
	      height: .74rem
	      text-align: center
	      position: absolute
	      top: 5rem
	      left: 3.15rem
	      font-size: .3rem
	      color: #fff
	    .hit-end
	      width: 100%
	      height: 1rem
	      font-size: .4rem
	      color: #000
	      line-height: 1rem
	      text-align: center
	      border-radius: .2rem
	      background: #03cfa5
	    .hits
	      width: 2.2rem
	      height: .6rem
	      border-radius: .1rem
	      position: absolute
	      top: 6.17rem
	      left: 2.42rem
	      .hit
	        width: 100%
	        height: 100%
	        font-size: .3rem
	        color: #fff
	        background: #03cfa5
	        border: none
	        border-radius: .2rem


</style>