<template>
  <div class="headIslogin">
    <slot :name="loginState ? 'islog' : 'unlog'"></slot>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      
    }
  },
  computed: {
    ...mapState(['loginState'])
  }
}
</script>

<style lang="less">
.headIslogin {
  .login {
    &::after {
      content: "·";
      margin: 0 .4rem;
      font-weight: bold;
    }
  }
  .el-button+.reg {
    margin: 0;
  }
}
.el-message-box__wrapper{
  .el-message-box {
    width: 26.5rem;
    padding: 2rem;
    box-sizing: border-box;
    .el-message-box__header {
      padding: 0;
      margin: 0 0 2rem;
      .el-message-box__title {
        font-weight: bold;
      }
      button {
        top: 0;
        right: 0;
      }
    }
    .el-message-box__content {
      .el-message-box__message {
        margin-bottom: .5rem;
        overflow: hidden;
        p {
          font-size: 1.167rem;
          margin-bottom: .8rem;
          input {
            padding: 10px;
            width: 100%;
            border: 1px solid #e9e9e9;
            border-radius: 2px;
            outline: none;
            box-sizing: border-box;
          }
        }
      }
    }
  }
}
</style>


