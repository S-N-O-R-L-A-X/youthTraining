<template>
  <!-- <div class="entry-content clearfix ">
          <div class='jupe' id='needtoc'>#id选择器名称随意
              {{ post_detail.body|safe }}
              <div class="widget-tag-cloud">
                  <ul>
                      标签：
                      {% for tag1 in post_detail.tags.all %}
                          <li><a href="{% url 'blog:tag' tag1.pk %}"># {{ tag1.name }}</a></li>
                      {% endfor %}
                  </ul>
              </div>
          </div>
  </div>
  <my-markdown></my-markdown> -->
  <!-- <div id="app">
    <el-container>
      <el-header></el-header>
      <el-container class="middleBox">
        <div class="sideBox"></div>
        
      </el-container>
      
    </el-container>

    
  </div> -->
  
      <!-- <div class="sideBox">Aside</div> -->
      <div>
        <Header/>
        <div class="box1">
          <div class="sideBox2">
            <Sidebar/>
          </div>
          
          <div class="mainBox2">
            <my-markdown></my-markdown>
          </div>

          <div class="clear">
          </div>

        </div>
      
      </div>
</template>

<script>
import myMarkdown from './index/青训社区.md';
import Header from '../layout/Header.vue'
import Sidebar from '../layout/Sidebar'

export default {
  components: {
    myMarkdown,Header,Sidebar
  },
  data(){
    return {
        // autocjs:null,
    }
  },
  // created(){
  //   this.autocjs=new AutocJs({
  //       article: '#needtoc',
  //       isOnlyAnchors: true,
  //       //selector: 'h1',
  //       // 不配置 selector 属性，即使用默认选择器
  //       title: '文章目录',
  //   });
  // }
}
</script>

<style scoped>
/* body {
  overflow:hidden;
} */


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  /* margin-top: 60px; */
}

.box1 {
  background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
}


.clear {
  clear: both;
}

.sideBox2 {
  position:relative;
  left:11%;
  width:18%;
  float:left;
}

.mainBox2 {
  position: relative;
  float:left;
  left:11%;
  width:58%;
  height:100%;
  background-color: grey;
}


</style>