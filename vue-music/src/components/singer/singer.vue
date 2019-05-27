<template>
  <div class="singer" ref="singer">
     <listview :data="singerList" @select="select"></listview>
     <router-view></router-view>

  </div>
</template>
<script type="text/ecmascript-6">
  import {getSingerList} from 'api/singer'
  import Listview from 'base/listview'
  import {ERR_OK} from 'api/config'
  import Singer from 'common/js/singer'


  const HOT_SINGER_LEN = 10
  const HOT_NAME = '热门'
export default {
  components: {
    Listview
  },
  data () {
    return {
      singerList: []
    }
  },
  created () {
    this._getSingerList()
  },
  methods: {
  //  点击当前行路由跳转
  select(singer) {
    console.log(singer)
    this.$router.push({path: `/singer/${singer.id}`})
  },
    _getSingerList () {
      this.singerLists = []
      getSingerList().then((res) => {
        if (res.code === ERR_OK) {
          console.log(res)
          this.singerList = this._normalizeSinger(res.data.list)
          console.log(this._normalizeSinger(res.data.list))
        }
      })
    },
  _normalizeSinger(list) {
      let map = {
        hot:{
          title: HOT_NAME,
          items: []
        }
      }
      list.forEach((item, index) => {
        if(index < HOT_SINGER_LEN) {
          map.hot.items.push(new Singer({
                name: item.Fsinger_name,
                id: item.Fsinger_mid
          }))
        }
        const key = item.Findex
        if(!map[key]) {
          map[key] = {
              title: key,
              items: []
          }
          map[key].items.push(new Singer(
            {name: item.Fsinger_name,
            id: item.Fsinger_mid}
          ))
        }
      })
      // 为了得到有序列表，我们需要处理 map
      let ret = []
      let hot = []
      for (let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(ret)
  }
  }
}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
