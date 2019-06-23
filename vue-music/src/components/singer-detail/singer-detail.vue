<template>
  <transition name="slide">
    <music-list :title="title" :bgImage='bgImage' :songs="songs"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {getSingerDetail} from 'api/singer'
  import {mapGetters} from 'vuex'
  import {ERR_OK} from 'api/config'
  import {createSong} from 'common/js/song'
  import MusicList from 'components/music-list/music-list'
  export default {
    computed: {
      bgImage(){
       return this.singer.avatar
      },
      title(){
        return this.singer.name
      },
      ...mapGetters(['singer'])
    },
    data() {
      return {
        songs: []
      }
    },
    created() {
      this._getSingerDetail()
    },
    methods: {
      //获取歌手详情数据
      _getSingerDetail() {
        if(!this.singer.id) {
          this.$router.push('/singer')
          return
        }
        getSingerDetail(this.singer.id).then((res) =>{
          if (res.code === ERR_OK) {
            this.songs = this._normalSongList(res.data.list)
            console.log(this.songs)
          }
        })
      },
      _normalSongList(list){
        let ret = []
        list.forEach(element => {
          let {musicData} = element
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
          }
        });
        return ret
      }
    },
    components: {
      MusicList
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable.styl"

  .siner-detail
    position : fixed
    z-index: 100
    right: 0
    left: 0
    top: 0
    bottom: 0
    background-color: $color-background 



  .slide-enter-active, .slide-leave-active
    transition: all 0.6s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>