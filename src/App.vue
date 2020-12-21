<template>
  <div id="app">
    <keep-alive exclude="Details">
      <router-view></router-view>
    </keep-alive>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import mainTabbar from 'components/content/mainTabbar.vue'

export default {
  name: 'App',
  components: {
    mainTabbar,
  }
}
</script>

<style>
  @import url(./assets/css/base.css);
</style>
