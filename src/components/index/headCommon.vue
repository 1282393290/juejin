<template>
  <header class="headCommon">
    <div class="headCommonInner">
      <div class="logo">
        <a href="/">
          <img src="https://b-gold-cdn.xitu.io/v3/static/img/simplify-logo.3e3c253.svg" alt="">
        </a>
      </div>
      <nav class="main-nav">
        <ul class="nav-list">
          <li class="main-nav-list">
            <div class="show-menu" @click="isOk=!isOk">
              <span>{{pageNum}}</span>
              <i class="iconfont icon-triangle-down"></i>
            </div>
            <div class="hide-down" v-show="isOk">
              <ul>
                <router-link v-for="(item, index) in pageList" :key="index" :to="item.url" tag="li" class="link-item" @click="pageNum=item.pageNum">{{item.pageNum}}</router-link>
              </ul>
            </div>
          </li>
          <li class="nav-item search">
            <input type="text" value="搜索更新啦，沙雕">
          </li>
          <li class="nav-item submit">
            <!-- <span class="login">登录</span> -->
            <HeadIslogin>
              <template v-slot:unlog>
                <span class="login" @click="start(false,false,true)">登录</span>
                <span class="reg" @click="start(true,true,true)">注册</span>
                <Login />
                <Reg />
              </template>
              <template v-slot:islog>
                <span>祭天</span>
              </template>
            </HeadIslogin>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
import HeadIslogin from './headIslogin'
import Login from '../common/login'
import Reg from '../common/reg'
import { mapState,mapMutations } from 'vuex'
export default {
  data() {
    return {
      isOk: false,
      pageNum: '首页',
      pageList: [
        {url:'/',pageNum:'首页'},
        {url:'/books',pageNum:'小册'},
        {url:'/events',pageNum:'活动'}
      ]
    }
  },
  computed: {
    ...mapState(['loginState','hasloginCount','close'])
  },
  components: {
    HeadIslogin,
    Login,
    Reg
  },
  methods: {
    ...mapMutations(['showLogReg']),
    start () {
      this.showLogReg(arguments)
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/common/mixins.less';

.headCommon {
  position: relative;
  .border-bottom;
  height: 5rem;
  .headCommonInner {
    width: 96%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    .logo {
      margin-left: .67rem;
      a {
        display: inline-block;
        min-width: 3.75rem;
      }
    }
    .main-nav {
      height: 100%;
      .nav-list {
        display: flex;
        padding: 0;
        margin: 0;
        height: 100%;
        align-items: center;
        .main-nav-list {
          position: relative;
          display: flex;
          align-items: center;
          color: #007fff;
          font-size: 1.33rem;
          justify-content: center;
          padding: 0;
          height: 100%;
          width: 5.66rem;
          .iconfont {
            font-size: 2rem;
          }
          .hide-down {
            position: absolute;
            left: 0;
            top: 5rem;
            width: 5.66rem;
            box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
            border: 1px solid rgba(177,180,185,.45);
            border-radius: 4px;
            .link-item {
              padding: 0 1.5rem;
              height: 4rem;
              line-height: 4rem;
              color: #71777c;
            }
          }
        }
      }
      .search {
        padding-right: 1.2rem;
        input {
          width: 11rem;
          padding: .6rem 0;
          text-indent: .6rem;
          border: none;
          outline: none;
          font-size: 1.1rem;
          color: #b1b1b1;
          border: 1px solid hsla(0,0%,59.2%,.2);
          background-color: rgba(227,231,236,.2);
          border-radius: 2px;
        }
      }
      .submit {
        padding-left: 1rem;
        color: #007fff;
        font-size: 1.33rem;
        el-button {
          font-size: 1.33rem;
        }
      }
    }
  }
}
</style>

