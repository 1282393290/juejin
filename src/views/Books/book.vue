<template>
<div>

    <ul class="nav-list-left">
      <router-link tag="li" to="/">全部</router-link>
      <router-link tag="li" to="/">前端</router-link>
      <router-link tag="li" to="/">后端</router-link>
      <router-link tag="li" to="/">移动</router-link>
      <router-link tag="li" to="/">开发</router-link>
      <router-link tag="li" to="/">通用</router-link>
    </ul>
    <ul class="boos-list">
       <router-link tag="li" to="/">
          <div class="book-img">
            <img src="">
          </div>
          <div class="book-info">
            
          </div>
       </router-link>
       <router-link tag="li" to="/">
            dfdfdfsd
       </router-link>
    </ul>
  </div>
</template>
<script>
export default {
 
}
</script>
<style lang="less" scoped>

      .nav-list-left{
        display: flex;
        width: 100%;
        height: 3.833rem;
        align-items: center;
        li{
          position: relative;
          padding: 0 0.95rem;
          line-height: 1;
          text-align: center;
        }
      }
      .boos-list{
       
        width: 100%;
        max-width: 700px;
        box-shadow: 0 1px 3px 0 rgba(4,5,13,.23);
        li{
          padding: 25px;
          box-sizing: border-box;
          background-color: #fff;
          position: relative;
          padding: 25px;
          border-bottom: 1px solid #e6e8e8;
        }
      }
 
</style>
