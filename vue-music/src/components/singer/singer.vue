<template>
  <div class="singer" ref="singer">
    这是歌手页面
  </div>
</template>
<script type="text/ecmascript-6">
import {getSingerList} from 'api/singer'
import {ERR_OK} from 'api/config'
export default {
  data () {
    return {
      singerList: []
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
          // this.singerList = res.data.slider
          // console.log(this.recommends)
        }
      })
    },
  }
}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
