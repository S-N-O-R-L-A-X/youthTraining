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
import myMarkdown from './交流技能.md';
import Sidebar from '@/layout/Sidebar2'
export default {
  components: {
    myMarkdown, Sidebar,
  },
}
</script>
