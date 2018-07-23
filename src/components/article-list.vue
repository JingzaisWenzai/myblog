<template>
  <i-row class="articles-list">
    <i-col :xs="24" :sm="8" :md="8" :lg="6" :xl="4" v-for="article in articles" :key="article.id">
      <router-link :to="'/articles/' + article.id + '/article-detail'" :title="article.title">
        <i-card :padding="0" :bordered="false">
          <figure class="preview">
            <img src="../assets/image/timthumb.jpg" class="image">
          </figure>
          <div class="content">
            <h2 class="title">{{article.title}}</h2>
            <div class="article-info clearfix">
              <span class="time">2018-07-04</span>
              <span><i-icon type="ios-eye-outline" size="14"></i-icon>{{article.view}}</span>
              <span><i-icon type="ios-chatbubble-outline" size="14"></i-icon>{{article.leaveMessage}}</span>
              <span><i-icon type="ios-heart-outline" size="14"></i-icon>{{article.collection}}</span>
            </div>
          </div>
        </i-card>
      </router-link>
    </i-col>
  </i-row>
</template>

<script type="text/javascript">
import api from '@/api'
export default {
  name: 'article-list',
  data () {
    return {
      query: {
        offset: 0,
        limit: 2
      },
      articles: [
        {
          id: 1,
          title: '文章该怎么写',
          url: '../assets/image/hamburger.png',
          date: new Date(),
          view: 1255,
          leaveMessage: 16,
          collection: 24
        },
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
  created () {
    // this.getArticles()
  },
  methods: {
    getArticles () {
      api.getArticles(this.query).then(rsp => {
        console.log(rsp)
      }).catch(e => {
        console.error(e.message)
      })
    }
  }
}
</script>
