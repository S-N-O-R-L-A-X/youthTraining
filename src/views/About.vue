<template>
<div>
  <div class="entry-content clearfix ">
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
  <my-markdown></my-markdown>
</div>
</template>

<script>
import myMarkdown from './README.md';

export default {
  components: {
    myMarkdown
  },
  data(){
    return {
        autocjs:null,
    }
  },
  created(){
    this.autocjs=new AutocJs({
        article: '#needtoc',
        isOnlyAnchors: true,
        //selector: 'h1',
        // 不配置 selector 属性，即使用默认选择器
        title: '文章目录',
    });
  }
}
</script>
