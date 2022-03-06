<template>
  <div class="navbar">
    <router-link to="/">
      <img src="../assets/logo2.png" class="logo" />
    </router-link>
    <div class="right-menu">
      
      <!-- <el-link class="menu-link" @click="$router.push({name:'SysLogs'})">操作日志</el-link> -->
      <!-- <el-tooltip :content="`切换 ${envInfo[env].to} 环境`">
        <el-link class="menu-link" icon="el-icon-sort" :href="envInfo[envInfo[env].to].url">
          <el-tag effect="dark" :type="envInfo[env].type">{{ envInfo[env].title }}</el-tag>
        </el-link>
      </el-tooltip> -->
      <el-dropdown class="menu-link">
        <el-link href="https://www.baidu.com" 
        target="_blank" class="link" :underline="false">
          人际技能<i class="el-icon-arrow-down"/>
        </el-link>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="(item,key) in items" :key="key">
              <el-link>{{item.title}}</el-link>
              </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <el-dropdown class="menu-link">
        <el-link href="https://www.baidu.com"
         target="_blank" class="link" :underline="false">
          技能测试<i class="el-icon-arrow-down"/>
        </el-link>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="item in items">
              <el-link>{{item.title}}</el-link>
              </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-link class="link">论坛</el-link>
      <!-- <el-link class="menu-link">欢迎，{{ $store.state.user.username }}</el-link> -->
      <!-- <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif" class="user-avatar"> -->

    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'


export default {
  components: {

  },
  data() {
    return {
      envInfo: {
        uat: { title: 'UAT 环境', type: 'primary', url: 'http://uat-polymer.bilibili.co/', to: 'prod' },
        prod: { title: ' Prod 环境', type: 'success', url: 'https://polymer.bilibili.co/', to: 'uat' },
        other: { title: '未知环境', type: 'danger', url: '', to: 'uat' }
      },
      items:[{title:"人际技能",},{title:"技能测试",},{title:"论坛"}]
    }
  },
  // computed: {
  //   ...mapGetters([
  //     'sidebar',
  //     'device',
  //     'env'
  //   ])
  // },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style lang="scss" scoped>

.navbar {
  height: 100%;
  // overflow: hidden;
  position: relative;
  // border-bottom: 1px solid #d8dce5;
  // box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
  // background-color:#A7FFEB;

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .logo {
      cursor: pointer;
      float:left;
      width: 10%;
      // height: 90%;
      margin: 0px 20px 0px 20px;
      border-radius: 10px;
    }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 80px;

    .link{
      margin-right: 40px;
      margin-left: 40px;  /*设置其水平方向上的外边距，元素之间的距离就会被拉开。*/
      font-size:1.5em;
    }

    .menu-link {
      // display: inline-block;
      // padding: 20px 20px;
      // margin: 0px 20px 0px 20px;
      vertical-align:center;
    }

    &:focus {
      outline: none;
    }

    .menu-drop {
      display: inline-block;
      height: 100%;
      vertical-align: top;
      margin-left: 50px;
      
      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    // .user-avatar {
    //   cursor: pointer;
    //   width: 50px;
    //   height: 50px;
    //   margin: 5px 10px 5px 10px;
    //   border-radius: 10px;
    // }

    
  }
}
</style>
