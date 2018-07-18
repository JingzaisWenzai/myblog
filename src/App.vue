<template>
  <div id="app">
    <el-container>
      <el-header class="blog-header">
        <el-menu :default-active="$route.path" router mode="horizontal"
        text-color="#f9f9f9" active-text-color="rgb(255, 208, 75)">
         <el-submenu :index="menu.action || ''" v-for="menu in menus" :key="menu.action" v-if="menu.sub&&menu.sub.length">
            <template slot="title">{{menu.title}}</template>
            <el-menu-item :index="item.action || ''"
                          v-for="item in menu.sub"
                          :key="item.action">{{item.title}}</el-menu-item>
          </el-submenu>
          <el-menu-item :index="menu.action || ''" v-else>{{menu.title}}</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      menus: [
        {title: '首页', action: '/'},
        {title: '最新', action: '/newest'},
        {title: '文章', action: '/articles', sub: [{title: 'CSS', action: 'css'}, {title: 'JS', action: 'js'}, {title: 'VUE', action: 'vue'}]},
        {title: '关于', action: '/about'}
      ]
    }
  },
  created () {
  }
}
</script>

<style lang="less" src="assets/less/site.less"></style>
