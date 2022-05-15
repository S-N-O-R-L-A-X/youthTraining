<template>
  <div id="app">
    <el-container v-show="!$route.meta.keepAlive">
      <el-header style="height:12%"><Header/></el-header>
      <el-container class="middleBox">        
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
import Footer from './Footer.vue'

export default {
  name: 'App',
  components: {
    Header, Footer,
  },
  methods:{
  }
}
</script>

<style scoped>
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


.mainBox {
  position: relative;
  left:15%;

  width:70%;
  background-color:#F8F8F8;
  padding:5px 1em 5px 1em;
  min-height: 100%;
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

.el-container {
  min-height: 100%;
}
</style>
