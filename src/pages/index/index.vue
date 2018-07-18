<template>
  <div class="index">
    <banner></banner>
    <article-list class="index-article-list"></article-list>
    <el-footer></el-footer>
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
  components: { Banner, ArticleList },
  methods: {
    getArticle () {
      this.$http.get('/api/getArticle').then(res => {
        this.inpContent = res.data.data
      })
    },
    getValue () {
      // axios.get('/', {params: ''})
      this.$http.get('/api/getValue', {
        params: {id: 1}
      }).then((res) => {
        console.log('res', res)
        // this.inpContent = res.data[0].name
      })
    },
    setValue () {
      // axios.post('/', {})
      this.$http.post('/api/setValue', {
        id: 1, name: this.inpContent
      }).then((res) => {
        console.log('res', res)
      })
    }
  }
}
</script>
