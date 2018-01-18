<template>
  <div class="register-container">
    <logo></logo>

    <div class="register-area">
      <div class="left-area iconfont">
        &#xe611;
      </div>
      <input class="right-area" type="text" placeholder="请输入您的用户名" v-model="username" @change="handleUserChange" key="1">
    </div>
    <div class="register-area">
      <div class="left-area iconfont">
        &#xe620;
      </div>
      <input class="right-area" type="password" placeholder="请填写密码5-17位" v-model="password" @change="handlePwdChange" key="2">
    </div>
    <div class="register-area">
      <div class="left-area iconfont">
        &#xe613;
      </div>
      <input class="right-area" type="password" placeholder="请填写密码" v-model="verifyPwd" @change="handleVerifyPwdChange" key="3">
    </div>

    <div class="register-btn" @click="handleRegister">注册</div>
  </div>
</template>

<script>
  import Logo from 'base/logo/logo'
  import axios from 'axios'

  export default {
    name: 'register-main',
    components: {
      Logo
    },
    data () {
      return {
        userFlag: false,
        pwdFlag: false,
        username: '',
        password: '',
        verifyPwd: ''
      }
    },
    methods: {
      handleUserChange () {
        const reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/
        if (reg.test(this.username)) {
          console.log('合法')
          this.userFlag = true
        } else {
          alert('用户名不合法')
        }
      },
      handlePwdChange () {
        const reg = /^[a-zA-Z0-9_]{5,17}$/
        if (reg.test(this.password)) {
          console.log('合法')
        } else {
          alert('密码不合法')
        }
      },
      handleVerifyPwdChange () {
        if (this.verifyPwd === this.password) {
          console.log('合法')
          this.pwdFlag = true
        } else {
          alert('两次密码不一致')
        }
      },
      handleRegister () {
        if (this.userFlag && this.pwdFlag) {
          axios.post('/api/register.json', {username: this.username, password: this.password})
            .then(this.handleRegisterSucc.bind(this))
            .catch(this.handleRegisterErr.bind(this))
        } else {
          alert('请填写正确的用户名密码')
        }
      },
      handleRegisterSucc (res) {
        console.log(res)
        if (res.data.isRegister) {
          this.$router.push('/login')
        } else {
          alert('用户名重复')
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/stylus/common/varibles.styl'
  .register-container
    position: relative
    box-sizing: border-box
    height: 7.56rem
    width: 6.58rem
    margin: 0 auto
    padding: 1.8rem .3rem 0
    background: #fff
    border-radius: .1rem
    box-shadow: 0 0 .3rem #999
    .register-area
      display: flex
      height: .8rem
      line-height: .8rem
      margin-bottom: .3rem
      .left-area
        box-sizing: border-box
        width: .8rem
        line-height: .8rem
        text-align: center
        font-size: .4rem
        border: .01rem solid #999
        border-radius: .1rem 0 0 .1rem 
        background: $bgColor
        color: #fff
      .right-area
        flex: 1
        position: relative
        box-sizing: border-box
        border: none
        line-height: .75rem
        padding-left: .16rem
        border: .01rem solid #999
        border-radius: 0 .1rem .1rem 0
  .register-btn
    box-sizing: border-box
    height: .8rem
    line-height: .8rem
    text-align: center
    margin-bottom: .3rem
    font-size: .28rem
    border: .01rem solid #019d7d
    border-radius: .1rem
    color: #fff
    background: $bgColor
</style>