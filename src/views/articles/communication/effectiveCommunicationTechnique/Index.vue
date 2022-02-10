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
import myMarkdown from './有效人际沟通的技巧.md';
import Sidebar from '../Sidebar'
export default {
  components: {
    myMarkdown, Sidebar,
  },
}
</script>
