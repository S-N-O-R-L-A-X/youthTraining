<template>
  <!-- <el-aside> -->
    <el-menu :router="true" default-active="$route.path" class="el-menu-vertical-demo"
      background-color="#fff" text-color="#000" active-text-color="#ffd04b">
      <el-submenu index="/communication">
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
          <el-menu-item index="/communication/whatIsCommunication">什么是沟通？ </el-menu-item>
          <el-menu-item index="/communication/interpersonalCommunicationTechnique">人际沟通技巧 </el-menu-item>
          <el-menu-item index="/communication/effectiveCommunicationTechnique">有效人际沟通的技巧 </el-menu-item>
          <el-menu-item index="1-4">沟通原则 </el-menu-item>
          <el-menu-item index="1-5">有效沟通的障碍 </el-menu-item>
          <el-menu-item index="1-6">避免常见的沟通错误 </el-menu-item>
          <el-menu-item index="1-7">社交技能 </el-menu-item>
          <el-menu-item index="1-8">在线社交 </el-menu-item>
          <el-menu-item index="1-9">给予和接受反馈 </el-menu-item>
          <el-menu-item index="1-10">改善沟通  </el-menu-item>
          <el-menu-item index="1-11">面试技巧 </el-menu-item>
          <el-menu-item index="1-12">电话采访 </el-menu-item>
          <el-menu-item index="1-13">面试技巧 </el-menu-item>
          <el-menu-item index="1-14">商务语言技能 </el-menu-item>
          <el-menu-item index="1-15">推理之梯 </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-ear"></use>
            </svg>
          </i>
          <span> &nbsp; 听力技巧</span>
        </template>

        <el-menu-item-group>
          <!-- <el-menu-item index="2-1">有效聆听的重要提示 </el-menu-item> -->
          <el-menu-item index="2-1">有效聆听的重要提示 </el-menu-item>
          <el-menu-item index="2-2">聆听的 10 条原则 </el-menu-item>
          <el-menu-item index="2-3">有效的听力技巧 </el-menu-item>
          <el-menu-item index="2-4">有效倾听的障碍 </el-menu-item>
          <el-menu-item index="2-5">听力类型 </el-menu-item>
          <el-menu-item index="2-6">积极倾听 </el-menu-item>
          <el-menu-item index="2-7">正念聆听 </el-menu-item>
          <el-menu-item index="2-8">移情聆听 </el-menu-item>
          <el-menu-item index="2-9">听力误解  </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zy_jiaoliu"></use>
            </svg>
          </i>
          <span> &nbsp; 非口头交流</span>
        </template>
        <el-menu-item-group>
          <!-- <template slot="title"></template> -->
          <el-menu-item index="/communication/nonverbalCommunication">非口头交流 </el-menu-item>
          <el-menu-item index="3-1">个人形象 </el-menu-item>
          <el-menu-item index="3-2">身体语言，暗示 </el-menu-item>
          <el-menu-item index="3-3">非语言交流：面部和声音 </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-mouth-full"></use>
            </svg>
          </i>
          <span> &nbsp; 口头交流</span>
        </template>
        <el-menu-item-group>
          <!-- <template slot="title"></template> -->
          <el-menu-item index="/communication/wordCommunication">口头交流 </el-menu-item>
          <el-menu-item index="/">有效的演讲 </el-menu-item>
          <el-menu-item index="4-2">会话技巧 </el-menu-item>
          <el-menu-item index="4-3">发表演讲 </el-menu-item>
          <el-menu-item index="4-4">提问技巧和技巧 </el-menu-item>
          <el-menu-item index="4-5">问题类型 </el-menu-item>
          <el-menu-item index="4-6">反射 </el-menu-item>
          <el-menu-item index="4-7">澄清 </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  
</template>

<script>
import icon from '@/api/icon.js' //to show icon
export default {
  data(){
    return {
      // menuItems:[{}]
    }
  },
  created(){
    console.log(this.$route);
  },
  methods: {
    // navigate(no){
    //   switch (no){
    //     case 2:this.$router.push('/eq');break;
    //     default:break;
    //   }
    // },
  }
}
</script>

<style scoped>
.el-menu{
  text-align: left;
}
</style>