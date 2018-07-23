<template>
  <div id="app">
    <i-layout>
      <i-header class="blog-header">
        <i-icon></i-icon>
        <i-menu theme="dark" @on-select="selectChange" :active-name="'index'" mode="horizontal">
         <i-submenu :name="menu.action || ''" v-for="menu in menus" :key="menu.action" v-if="menu.sub&&menu.sub.length">
            <template slot="title">{{menu.title}}</template>
              <i-menu-item v-for="item in menu.sub"
                           :key="item.action"
                           :name="item.action || ''">{{item.title}}</i-menu-item>
          </i-submenu>
          <i-menu-item :name="menu.action || ''" v-else>{{menu.title}}</i-menu-item>
        </i-menu>
      </i-header>
      <i-content>
        <router-view></router-view>
      </i-content>
    </i-layout>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      menus: [
        {title: '首页', action: 'index'},
        {title: '最新', action: 'newest'},
        {title: '文章', action: 'articles', sub: [{title: 'CSS', action: 'css'}, {title: 'JS', action: 'js'}, {title: 'VUE', action: 'vue'}]},
        {title: '关于', action: 'about'}
      ]
    }
  },
  created () {
  },
  methods: {
    selectChange (routename) {
      this.$router.push({
        name: routename
      })
    }
  }
}
</script>

<style lang="less" src="assets/less/site.less"></style>
