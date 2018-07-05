<template>
  <div class="index">
    <el-row>
      <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="4" v-for="article in articles" :key="article.id">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../../assets/image/timthumb.jpg" class="image">
          <div style="padding: 14px;">
            <span>{{article.title}}</span>
            <div class="bottom clearfix">
              <time class="time">2018-07-04</time>
              <span><i class="el-icon-view"></i>{{article.view}}</span>
              <span><i class="el-icon-edit"></i>{{article.leaveMessage}}</span>
              <span><i class="el-icon-star-off"></i>{{article.collection}}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'index',
  data () {
    return {
      articles: [
        {
          id: 1,
          title: '文章该怎么写',
          url: '../../assets/image/hamburger.png',
          date: new Date(),
          view: 1255,
          leaveMessage: 16,
          collection: 24
        }
      ]
    }
  },
  methods: {
    getArticle () {
      this.$http.get('/api/getArticle').then(res => {
        console.log(res)
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
