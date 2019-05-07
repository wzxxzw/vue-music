import Vue from 'vue'
import Router from 'vue-router'
import Search from 'components/search/search'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Recommend from 'components/recommend/recommend'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Recommend
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    }
  ]
})
