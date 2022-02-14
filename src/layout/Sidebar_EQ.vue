<template>
  <div class="sidebar">
    <el-menu :router="true" default-active="$route.path" class="el-menu-vertical-demo"
      background-color="#fff" text-color="#000" active-text-color="#ffd04b" v-for="(item,key) in menuItems" :key="key">
      <el-submenu index="1">
        <template slot="title">
          <i>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-chat"></use>
            </svg>
          </i>
          <span> &nbsp; {{item.title}}</span>
        </template>
        <el-menu-item-group v-for="(subitem,key2) in item.children" :key="key2">
          <el-menu-item index="subitem.index">{{subitem.title}}</el-menu-item>
        </el-menu-item-group>
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
          "children":[
            {
              "title":"什么是魅力？",
              "index":"",
            },
            {
              "title":"建立信心",
              "index":"",
            },
            {
              "title":"建立职场信心",
              "index":"",            
            }
          ]
        },
        {
          "title":"自律 | 自我管理",
          "index":"",
          "children":[
            {
              "title":"自我控制",
              "index":"",
            },
            {
              "title":"诚信和认真",
              "index":"",
            },
            {
              "title":"保密",
              "index":"",
            },
            {
              "title":"个人改变管理",
              "index":"",
            },
            {
              "title":"识别和管理情绪",
              "index":"",
            },
            {
              "title":"好奇心",
              "index":"",
            },
            {
              "title":"创新技能",
              "index":"",
            },
          ]
        },
        {
          "title":"自我激励",
          "index":"",
          "children":[
            {
              "title":"设定个人目标",
              "index":"",
            },
            {
              "title":"时间管理",
              "index":"",
            },
            {
              "title":"尽量减少分心和浪费时间",
              "index":"",
            },
            {
              "title":"避免拖延",
              "index":"",
            },
            {
              "title":"工作与生活的平衡",
              "index":"",
            },
          ]
        },
        {
          "title":"什么是同理心？",
          "index":"",
          "children":[
            {
              "title":"移情的类型",
              "index":"",
            },
            {
              "title":"了解他人",
              "index":"",
            },
            {
              "title":"什么是同情？",
              "index":"",
            },
            {
              "title":"跨文化交际技巧",
              "index":"",
            },
            {
              "title":"跨文化意识",
              "index":"",
            },
          ]
        },
        {
          "title":"情商中的社交技巧 ",
          "index":"",
          "children":[
            {
              "title":"网络技能",
              "index":"",
            },
            {
              "title":"有效网络的重要提示",
              "index":"",
            },
            {
              "title":"建立融洽关系",
              "index":"",
            },
            {
              "title":"机智与外交",
              "index":"",
            },
            {
              "title":"如何有礼貌",
              "index":"",
            },
            {
              "title":"礼貌与诚实",
              "index":"",
            },
            
          ]
        },
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