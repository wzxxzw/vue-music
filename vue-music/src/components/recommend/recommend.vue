<template>
  <div class="recommend" ref="recommend">
  <scroll 
      class="wrapper"
      :data="discList"
      @pulldown="pulldown">
      <div>
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for = "(item, index) in recommends" :key="index">
              <a :href="item.linkUrl"><img :src="item.picUrl" alt="" width="100%" heigh="100%" class="needsclick"></a>
          </mt-swipe-item>
        </mt-swipe>
        <div class="hot">热门歌单推荐</div>
        <div class="recommend-content">
            <ul>
              <li v-for = "(item, index) in discList" :key="index" class="item">
                  <img v-lazy="item.imgurl" alt="" width="60" height="60" class="img">
                  <div class="text">
                    <h2 class="name">{{item.creator.name}}</h2>
                    <p class="desc">{{item.dissname}}</p></div>
              </li>
            </ul>
        </div>
        <div>
           <loading v-show="!discList.length" class="loading"></loading>
        </div>
      </div>
    </scroll>  
  </div>
</template>

<script type="text/ecmascript-6">
import Loading from 'base/loading'
import Scroll from 'base/scroll'
import BScroll from 'better-scroll'
import {getRecommend, getDiscList} from 'api/recommend'
import {ERR_OK} from 'api/config'

export default {
  components: {
    Scroll,
    Loading
  },
  data () {
    return {
      recommends: [],
      discList: [],
      pulldown: true
    }
  },
  created () {
    this._getRecommend()
    this._getDiscList()
  },
  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
          console.log(this.recommends)
        }
      })
    },
    _getDiscList() {
      getDiscList().then((res) => {
        if (res.code === ERR_OK) {
          this.discList = res.data.list
          console.log(this.discList)
        }
      })
    }
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
    .wrapper
      height: 100%
      overflow: hidden
    .mint-swipe
      height: 152px
    .hot 
      height: 40px
      width: 100%
      line-height: 80px
      text-align :center
      font-size: $font-size-large
      margin-bottom: 20px
    .item
      display: flex
      box-sizing: border-box
      padding: 0 20px 20px 20px
      .img
        padding-right: 20px
      .text
       display: flex
       flex-direction: column
       justify-content: center
       flex: 1
       font-size: $font-size-medium
       line-height: 20px
       .name
         margin-bottom: 10px
         color: $color-text
       .desc
         color: $color-text-d
    .loading
      position: absolute
      top: 200%
      height: 50%
      width:100%
</style>
