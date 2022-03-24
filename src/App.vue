<template>
  <router-view></router-view>
  <!-- <div>
    <el-container v-show="!$route.meta.keepAlive">
      <el-header><Header/></el-header>
        <router-view></router-view>
    </el-container>
    <router-view v-show="$route.meta.keepAlive"></router-view>
  </div> -->
</template>

<script>

// import Header from './layout/Header.vue'
// import Sidebar from './layout/Sidebar.vue'
export default {
  name: 'App',
  components: {
    // Header,
    // Sidebar
  },
}
</script>

<style>

</style>
