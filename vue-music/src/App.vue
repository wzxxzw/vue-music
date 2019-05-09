<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header.vue'
import Tab from 'components/tab/tab.vue'
export default {
  name: 'App',
  components: {
    MHeader,
    Tab
  }
}
</script>

<style scoped lang="stylus">
@import "../src/common/stylus/variable.styl"
#app
  color:$color-theme
</style>
