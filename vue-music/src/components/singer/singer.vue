<template>
  <div class="singer" ref="singer">
     <listview :data="singerLists"></listview>
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
      singerList: [],
      singerLists: []
    }
  },
  created () {
    this._getSingerList()
  },
  methods: {
    _getSingerList () {
      getSingerList().then((res) => {
        if (res.code === ERR_OK) {
          console.log(res)
          this.singerList = res.data.list
          this.singerLists = this._normalizeSinger(this.singerList)
        }
      })
    },
  _normalizeSinger(list) {
      let arr = []
      let map = {
        hot:{
          title: HOT_NAME,
          items: []
        }
      }
      this.singerList.forEach((item, index) => {
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
     return  arr.push(map)
  }
  }
}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
