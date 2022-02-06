<template>
  <div>
    <el-container>
      <el-header><Header/></el-header>
      <el-container>
        <el-aside><Sidebar/></el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import Header from './layout/Header.vue'
import Sidebar from './layout/Sidebar.vue'
export default {
  name: 'App',
  components: {
    Header,
    Sidebar
  }
}
</script>

<style>
html, body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.el-header, .el-footer {
    background-color: #A7FFEB;
    color: #A7FFEB;
    text-align: center;
    line-height: 60px;
  }

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
</style>
