<template>
  <div class="container">
    <el-timeline>
      <el-timeline-item v-for="id in verIds" :key="'version-'+id"
                        :timestamp="versions[id].date" :type="id===verCur?'primary':''" placement="top">
        <el-card style="padding: 20px;font-size: 14px;line-height: 25px;">
          <b>版本：</b><el-tag :type="versions[id].type">{{id}}</el-tag><br/>
          <span v-html="versions[id].desc"/>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import versions from './version.json'
import sysInfo from '@/../package.json'

export default {
  name: "version-info",
  data(){
    return{
      verIds: Object.keys(versions).filter(i=>{return i!=='versionCur'}), // 获取所有的版本id
      versions: versions,
      verCur: sysInfo.version,
    }
  }
}
</script>

<style scoped>
/*.container {*/
/*  column-count: 4;*/
/*}*/
/*.cell{*/
/*  break-inside: avoid;*/
/*  box-sizing: border-box;*/
/*  padding: 10px;*/
/*  min-width: 360px;*/
/*}*/
</style>
