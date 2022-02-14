<template>
  <div class="sidebar">
    <el-menu :router="true" default-active="$route.path" class="el-menu-vertical-demo"
      background-color="#fff" text-color="#000" active-text-color="#ffd04b" v-for="(item,key) in ">
      <el-submenu index="1">
        <template slot="title">
          <i>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-chat"></use>
            </svg>
          </i>
          <span> &nbsp; 自我意识</span>
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import icon from '../api/icon.js' //to show icon
export default {
  data(){
    return {
      menuItems:[
        {
          "title":"自我意识",
          "index":"",
        },
        {
          "title":"什么是魅力？",
          "index":"",
        },
        {
          "title":"建立信心",
          "index":"",
        },
        {

        }

      ]
    }
  },
  methods: {
    navigate(no){
      switch (no){
        case 2:this.$router.push('/eq');break;
        default:break;
      }
    },
  }
}
</script>

<style scoped>
.el-menu{
  text-align: left;
}
</style>