<template>
  <div class="navbar">
    <hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

    <div class="right-menu">
      <el-link class="menu-link" @click="$router.push({name:'SysLogs'})">操作日志</el-link>
      <el-tooltip :content="`切换 ${envInfo[env].to} 环境`">
        <el-link class="menu-link" icon="el-icon-sort" :href="envInfo[envInfo[env].to].url">
          <el-tag effect="dark" :type="envInfo[env].type">{{ envInfo[env].title }}</el-tag>
        </el-link>
      </el-tooltip>
      <el-dropdown class="menu-link">
        <el-link href="https://info.bilibili.co/pages/viewpage.action?pageId=285088210" target="_blank" :underline="false">
          使用文档<i class="el-icon-arrow-down"/>
        </el-link>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <el-link href="https://info.bilibili.co/pages/viewpage.action?pageId=337896851" target="_blank" :underline="false">1. gRPC接口使用指南</el-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-link href="https://info.bilibili.co/pages/viewpage.action?pageId=329433624" target="_blank" :underline="false">2. API文档使用指南</el-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-link href="https://info.bilibili.co/pages/viewpage.action?pageId=285088210" target="_blank" :underline="false">3. API任务列表使用指南</el-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-link @click="$router.push({name:'SysVersions'})" :underline="false">... 更多</el-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-link class="menu-link">欢迎，{{ $store.state.user.username }}</el-link>
      <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif" class="user-avatar">

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  data() {
    return {
      envInfo: {
        uat: { title: 'UAT 环境', type: 'primary', url: 'http://uat-polymer.bilibili.co/', to: 'prod' },
        prod: { title: ' Prod 环境', type: 'success', url: 'https://polymer.bilibili.co/', to: 'uat' },
        other: { title: '未知环境', type: 'danger', url: '', to: 'uat' }
      }
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'device',
      'env'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style lang="scss" scoped>

.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    .menu-link {
      display: inline-block;
      vertical-align: top;
      padding: 0 15px;
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

    .user-avatar {
      cursor: pointer;
      width: 40px;
      height: 40px;
      margin: 5px 10px 5px 10px;
      border-radius: 10px;
    }
  }
}
</style>
