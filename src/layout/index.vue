<template>
  <div id="app">
    <el-container v-show="!$route.meta.keepAlive">
      <el-header><Header/></el-header>
      <el-container>
        <el-aside v-show="showSidebar()===1"><Sidebar/></el-aside>
        <el-aside v-show="showSidebar()===2"><Sidebar2/></el-aside>
        <el-aside v-show="showSidebar()===3"><SidebarEQ/></el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer><Footer/></el-footer>
    </el-container>

    <router-view v-show="$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>

import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import Sidebar2 from './Sidebar2.vue'
import SidebarEQ from './Sidebar_EQ.vue'
import Footer from './Footer.vue'
export default {
  name: 'App',
  components: {
    Header, Sidebar, Sidebar2, Footer, SidebarEQ
  },
  created(){
    this.showSidebar();
  },
  methods:{
    showSidebar(){
      const path=this.$route.path
      if(path.indexOf('/communication')>=0)
        return 2;
      else if(path.indexOf('/eq')>=0)
        return 3;
      return 1;
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  height: 100%;
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  /* margin-top: 60px; */
}

.el-header {
  background-color: #A7FFEB;
  color: red;
  text-align: center;
  line-height: 200px;
  height:400px;
}

.el-container  {
  min-height: 100%;
}

.inner-container {
  height: 100%;
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
  /* min-height: 40rem; */
}

p{
  text-indent: 2em;
  text-align: left;
}


</style>
