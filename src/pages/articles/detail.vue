<template>
  <i-row class="article-detail">
    <i-col>
      <div class="article-title-wrap">
        <h1 class="article-title">纪梵希在四个城市贴海报</h1>
        <div class="article-info">
          <span class="article-date">2017-07-05</span>
          <span class="article-view"><i-icon type="ios-eye-outline" size="14"></i-icon>175</span>
          <span class="article-comment"><i-icon type="ios-chatbubble-outline" size="14"></i-icon>15</span>
        </div>
      </div>
      <figure class="article-head-image">
        <img src="http://cosy.codenote.io/wp-content/uploads/2017/09/2017100318310679.jpeg">
      </figure>
      <article class="article-detail-content">
        <p>这是 7 月份成为纪梵希创意总监的  Clare Waight Kellerin 的首秀。Clare 在纪梵希拥有范围极广的创意权，包括男女装成衣、包、鞋、珠宝配饰、童装、墨镜的设计。在这三个月期间，Clare 事无巨细，对包装、店铺陈列和照明、和名流的关系都进行了改革。Campaign 中，全部使用黑白照片，猫成了主角，这一系列被放大贴在纽约和伦敦街头。</p>
      </article>
    </i-col>
  </i-row>
</template>

<script>
import api from '@/api'
export default {
  name: 'article-detail',
  data () {
    return {
      id: this.$route.params.id
    }
  },
  created () {
    // this.getArticleDetail()
  },
  methods: {
    getArticleDetail () {
      api.getArticleDetail(this.id).then(rsp => {
        console.log(rsp)
      }).catch(e => {
        console.error(e.message)
      })
    }
  }
}
</script>
