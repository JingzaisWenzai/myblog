<template>
  <div class="articles">
    <article-list></article-list>
  </div>
</template>

<script>
import ArticleList from '@/components/article-list'
export default {
  name: 'articles',
  data () {
    return {
      articles: []
    }
  },
  components: {
    ArticleList
  }
}
</script>
