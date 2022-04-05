<template>
  <el-container>
    <el-main>
      <p>{{result}}</p>
      
      <el-link href="/eq">进入情商页面</el-link>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data(){
    return { 
      result:"说点什么？"
    }
  }
}
</script>