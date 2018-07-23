<template>
  <div class="index">
    <banner></banner>
    <article-list class="index-article-list"></article-list>
    <i-footer></i-footer>
  </div>
</template>

<script type="text/javascript">
import Banner from './banner'
import ArticleList from '@/components/article-list'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  created () {
  },
  components: { Banner, ArticleList },
  methods: {
  }
}
</script>
