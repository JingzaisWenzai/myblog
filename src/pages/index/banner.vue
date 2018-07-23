<template>
  <div class="banner">
     <i-carousel v-model="bannerIndex"
                 :height="carouselConfig.height"
                 :loop="carouselConfig.loop"
                 :autoplay="carouselConfig.autoplay"
                 :autoplay-speed="carouselConfig.autoplaySpeed">
      <i-carousel-item v-for="item in banners" :key="item.id" :style="{backgroundImage: 'url(' + item.url + ')'}">
      </i-carousel-item>
    </i-carousel>
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
      ],
      carouselConfig: {
        loop: true,
        autoplay: true,
        height: 400,
        autoplaySpeed: 3000
      },
      bannerIndex: 0
    }
  }
}
</script>
