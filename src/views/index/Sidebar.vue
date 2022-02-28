<template>
  <!-- <el-aside> -->
    <el-menu default-active="2" class="el-menu-vertical-demo"
      background-color="#fff" text-color="#000" active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-chat"></use>
            </svg>
          </i>
          <span> &nbsp; 沟通技巧</span>
        </template>
        <el-menu-item-group>
          <!-- <template slot="title"></template> -->
          <el-menu-item index="1-1">口头交流</el-menu-item>
          <el-menu-item index="1-2">非语言交流</el-menu-item>
          <el-menu-item index="/listenTechnique">倾听技巧</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">情商</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">团队合作</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">谈判、说服和影响技巧</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">冲突解决和调解</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-setting"></i>
        <span slot="title">解决问题和决策</span>
      </el-menu-item>
    </el-menu>
  <!-- </el-aside> -->
</template>

<script>
import icon from '@/api/icon.js' //to show icon
export default {
  data(){
    return {

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