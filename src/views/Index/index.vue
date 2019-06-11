<template>
  <div class="page-home">
    我是首页
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    axios.post('https://localhost:8080/query',{
      extensions: {query: {id: "21207e9ddb1de777adeaca7a2fb38030"}},
      operationName: "",
      query: "",
      variables: {first: 20, after: "", order: "POPULAR"}
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
