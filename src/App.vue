<template>
  <div>
    <el-container>
      <el-header><Header/></el-header>
      <el-container>
        <el-aside><Sidebar/></el-aside>
        <el-main>
          <router-view></router-view>
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
  },
  methods:{
    
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
  background-color: #fff;
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

.el-main {
  background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
}
</style>
