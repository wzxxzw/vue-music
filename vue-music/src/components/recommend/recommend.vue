<template>
  <div class="recommend" ref="recommend">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for = "(item, index) in recommends" :key="index">
          <a :href="item.linkUrl"><img :src="item.picUrl" alt="" width="100%" heigh="100%"></a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script type="text/ecmascript-6">
import {getRecommend, getDiscList} from 'api/recommend'
import {ERR_OK} from 'api/config'

export default {
  data () {
    return {
      recommends: [],
      discList: []
    }
  },
  created () {
    this._getRecommend()
  },
  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
          console.log(this.recommends)
        }
      })
    }
  },
  components: {
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      overflow: hidden
    .mint-swipe
      height: 166px
</style>
