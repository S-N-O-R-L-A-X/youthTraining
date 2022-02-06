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

.el-header {
    background-color: #A7FFEB;
    color: red;
    text-align: center;
    line-height: 200px;
    height:400px;
  }

.el-aside {
  background-color: #D3DCE6;
  text-align: center;
  line-height: 200px;
}

.icon {
    width: 1.5em; 
    height: 1.5em;
    /* vertical-align: -0.15em; */
    fill: currentColor;
    overflow: hidden;
}
</style>
