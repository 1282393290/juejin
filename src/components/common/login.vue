<template>
  <div class="component-login" v-show="!loginState && !hasloginCount && close">
    <div class="auth-modal-box">
      <form action="/" class="auth-form">
        <h3>登录</h3>
        <i class="iconfont close-btn icon-del" @click="closeFn"></i>
        <div class="input-group">
          <input type="text" placeholder="请输入手机号或用户名">
          <input type="password" placeholder="请输入密码">
        </div>
        <button class="login-btn">登录</button>
        <div class="prompt-box">
          没有账号？ 
          <span data-v-36a84bce="" class="clickable" @click="setlogin">注册</span>
          <a data-v-36a84bce="" href="/reset-password" class="right clickable">忘记密码</a>
        </div>
        <div class="oauth-box">
          <h4 class="hint">第三方登录:</h4>
          <div class="oauth">
            <a href="" class="oauth-bg"><img src="https://b-gold-cdn.xitu.io/v3/static/img/weibo.fa758eb.svg" alt=""></a>
            <a href="" class="oauth-bg"><img src="https://b-gold-cdn.xitu.io/v3/static/img/wechat.e0ff124.svg" alt=""></a>
            <a href="" class="oauth-bg"><img src="https://b-gold-cdn.xitu.io/v3/static/img/github.547dd8a.svg" alt=""></a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
export default {
  data () {
    return {
      
    }
  },
  computed: {
    ...mapState(['loginState','hasloginCount','close'])
  },
  methods: {
    ...mapMutations(['setHasLogin','setClose']),
    setlogin () {
      this.setHasLogin()
    },
    closeFn () {
      this.setClose()
    }
  }
}
</script>


<style lang="less">
.component-login {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  .auth-modal-box {
    text-align: left;
    width: 26.5rem;
    padding: 2rem;
    box-sizing: border-box;
    background: #fff;
    color: #333;
    .auth-form {
      position: relative;
      h3 {
        font-weight: bold;
        font-size: 1.5rem;
        margin: 0 0 2rem;
      }
      .close-btn {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1rem;
        opacity: .4;
      }
      .input-group {
        margin-bottom: .5rem;
        overflow: hidden;
        input {
          font-size: 1.167rem;
          margin-bottom: .8rem;
          padding: 10px;
          width: 100%;
          border: 1px solid #e9e9e9;
          border-radius: 2px;
          outline: none;
          box-sizing: border-box;
          color: #888;
        }
      }
      .login-btn {
        width: 100%;
        height: 3.334rem;
        color: #fff;
        background-color: #007fff;
        border-radius: 2px;
        outline: none;
        box-sizing: border-box;
        cursor: pointer;
        border: none;
        outline: none;
      }
      .prompt-box {
        margin: 1rem 0 0;
        color: #8b9196;
        font-size: 1.167rem;
        .clickable {
          color: #007fff;
          cursor: pointer;
        }
       .right {
         float: right;
       }
      }
      .oauth-box {
        margin-top: 1.2rem;
        line-height: 1.9rem;
        color: #8b9196;
        font-size: 1.167rem;
        .oauth {
          display: flex;
          align-items: center;
          justify-content: space-around;
          margin-top: 15px;
          .oauth-bg {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background-color: #f4f8fb;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              height: 1.9rem;
            }
          }
        }
      }
    }
  }
}
</style>

