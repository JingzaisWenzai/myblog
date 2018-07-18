<template>
  <el-row class="articles-list">
    <el-col :xs="24" :sm="8" :md="8" :lg="6" :xl="4" v-for="article in articles" :key="article.id">
      <el-card :body-style="{ padding: '0px' }">
        <figure class="preview">
          <img src="../../assets/image/timthumb.jpg" class="image">
        </figure>
        <div class="content">
          <h2 class="title">{{article.title}}</h2>
          <div class="article-info clearfix">
            <span class="time">2018-07-05</span>
            <span><i class="el-icon-view"></i>{{article.view}}</span>
            <span><i class="el-icon-edit"></i>{{article.leaveMessage}}</span>
            <span><i class="el-icon-star-off"></i>{{article.collection}}</span>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script type="text/javascript">
export default {
  name: 'article-list',
  data () {
    return {
      articles: [
        {
          id: 2,
          title: 'VUE入门',
          url: '../assets/image/hamburger.png',
          date: new Date(),
          view: 1455,
          leaveMessage: 23,
          collection: 56
        }
      ]
    }
  },
  methods: {
    getArticles () {
    }
  }
}
</script>
