<template>
  <div class="banner">
     <el-carousel height="400px">
      <el-carousel-item v-for="item in banners" :key="item.id" :style="{backgroundImage: 'url(' + item.url + ')'}">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      banners: [
        { id: 1, url: 'static/banner/banner_1.jpg' },
        { id: 2, url: 'static/banner/banner_2.jpeg' },
        { id: 3, url: 'static/banner/banner_3.jpeg' }
      ]
    }
  }
}
</script>
