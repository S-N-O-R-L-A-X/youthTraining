<template>
  <el-container>
    <el-main>
      <h3>问卷结果</h3>
      <p>{{result}}</p>
      
      <el-link href="/eq">进入情商页面</el-link>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data(){
    return { 
      result:"oops，您的问卷结果出现异常！"
    }
  },
  created(){
    this.result=this.$route.params.content;
  }
}
</script>