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

        <el-menu-item-group>
          <!-- <template slot="title"></template> -->
          <el-menu-item index="/about">什么是魅力</el-menu-item>
          <el-menu-item index="1-2">建立信心</el-menu-item>
          <el-menu-item index="1-3">建立职场信心</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- <el-menu-item index="2" @click="navigate(2)"> -->
      <el-menu-item index="/eq">
        <i class="el-icon-menu"></i>
        <span slot="title">情商</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">团队合作
          自律 | 自我管理 
自我控制 
诚信和认真 
保密 
个人改变管理 
识别和管理情绪 
好奇心 
创新技能 

自我激励 
设定个人目标 
时间管理 
尽量减少分心和浪费时间 
避免拖延 
工作与生活的平衡 

什么是同理心？ 
移情的类型 
了解他人 
什么是同情？ 
跨文化交际技巧 
跨文化意识 

情商中的社交技巧 
网络技能 
有效网络的重要提示 
建立融洽关系 
机智与外交 
如何有礼貌 
礼貌与诚实
"
        </span>
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