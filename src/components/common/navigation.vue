<template>
  <nav class="navigation">
    <ul class="nav-list">
        <li v-for="(item,index) in navList" :key="index">
          <router-link to="/">{{item.title}}</router-link>
        </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        {title:"推荐"},
        {title:"推荐"},
        {title:"推荐"},
        {title:"推荐"},
        {title:"推荐"},
        {title:"推荐"},
        {title:"推荐"},
        {title:"推荐"},
        {title:"推荐"}
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.router-link-active {
    color: inherit;
}
.nav-list {
    width: auto;
    overflow-x: auto;
    max-width: 960px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    line-height: 1;
    height: 3.833rem;
    li {
      padding-left: 2rem;
      height: 100%;
      align-items: center;
      display: flex;
      flex-shrink: 0;
      font-size: 1.16rem;
      color: #71777c;
    }
}
</style>

