<template>
  <el-container>
    <el-aside>
      <Sidebar/>
    </el-aside>
    <el-main>
      <my-markdown></my-markdown>
    </el-main>
  </el-container>
</template>

<script>
import myMarkdown from '@/assets/情商.md';
import Sidebar from './Sidebar'
export default {
  components: {
    myMarkdown, Sidebar,
  },
}
</script>
