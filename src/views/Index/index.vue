<template>
  <div class="page-home">
    <headCommon />
    <Navigation />
  </div>
</template>

<script>
import axios from 'axios'
import headCommon from '@/components/index/headCommon'
import Navigation from '@/components/common/navigation'
export default {
  components: {
    headCommon,
    Navigation
  },
  created () {
    axios.post('http://localhost:8080/query',{
      extensions: {query: {id: "21207e9ddb1de777adeaca7a2fb38030"}},
      operationName: "",
      query: "",
      variables: {first: 20, after: "", order: "POPULAR"}
    },{
      headers: {
        'X-Agent': 'Juejin/Web'
      }
    })
      .then(response => {
        console.log(response)
      })
  }
}
</script>

<style lang='less' scoped>
@import '~@/styles/base.less';
@import '~@/styles/index/index.less';
</style>
