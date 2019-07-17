<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
    <player></player>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header.vue'
import Tab from 'components/tab/tab.vue'
import Player from 'components/player/player.vue'
export default {
  name: 'App',
  components: {
    MHeader,
    Tab,
    Player
  }
}
</script>

<style scoped lang="stylus">
@import "../src/common/stylus/variable.styl"
#app
  color:$color-theme
</style>
