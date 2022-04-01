<template>
  <div id="app">
    <el-container v-show="!$route.meta.keepAlive">
      <el-header style="height:12%"><Header/></el-header>
      <el-container class="middleBox">
        <div class="sideBox">
          <el-aside v-show="showSidebar()===1" width="100%"><Sidebar/></el-aside>
          <el-aside v-show="showSidebar()===2" width="100%"><SidebarListen/></el-aside>
          <el-aside v-show="showSidebar()===3" width="100%"><SidebarEQ/></el-aside>

          <!-- <el-aside v-show="showSidebar()===4" width="100%"><SidebarCommunication/></el-aside> -->
        </div>
        
          
        <div class="mainBox">
          <router-view></router-view>
        </div>
          
        <div class="clear"></div>
        
      </el-container>
      <el-footer><Footer/></el-footer>
      
      <div class="clear"></div>

    </el-container>

    <router-view v-show="$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>

import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import SidebarListen from './SidebarListen.vue'
import SidebarEQ from './Sidebar_EQ.vue'
import Footer from './Footer.vue'
import SidebarCommunication from './SidebarCommunication'
export default {
  name: 'App',
  components: {
    Header, Sidebar, SidebarListen, Footer, SidebarEQ, SidebarCommunication
  },
  created(){
    this.showSidebar();
  },
  methods:{
    showSidebar(){
      const path=this.$route.path;
      if(path.indexOf('/communication')>=0||path.indexOf('/listen')>=0)
        return 2;
      else if(path.indexOf('/eq')>=0)
        return 3;
      else if(path.indexOf('/exam')>=0)
        return 4;
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
  /* min-height:117px; */
}

.clear {
  clear: both;
}


.middleBox {
  background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
}

.sideBox {
  position: relative;
  left:11%;
  width:20%;
  background-color: #fff;
  /* height:100%; */
}

.el-aside {
  text-align: center;
  line-height: 200px;
}

.mainBox {
  position: relative;
  left:11%;
  width:58%;
  background-color:#F8F8F8;
  padding:5px 1em 5px 1em;
}

.icon {
    width: 1.5em; 
    height: 1.5em;
    /* vertical-align: -0.15em; */
    fill: currentColor;
    overflow: hidden;
}

p{
  text-indent: 2em;
  text-align: left;
}

h1 {
  font-size: 2em;
}

ul,li {
  text-align: left;
}
</style>
