<template>
  <div class="index">
    <div>用户名<input type="text" name="" v-model="login.name"/></div>
    <div>密码<input type="text" name="" v-model="login.password"/></div>
    <button @click="getValue">登录</button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'index',
  data () {
    return {
      login: {
        name: '',
        password: ''
      },
      inpContent: '汪鹏'
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
