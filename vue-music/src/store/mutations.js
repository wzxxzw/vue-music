import * as types from './mutation-types'

const mutations = {
    SET_SINGER(state, param) {
        state.singer = param
    },
    [types.SET_PLAYING_STATE](state, flag) {
        state.playing = flag
      },
      [types.SET_FULL_SCREEN](state, flag) {
        console.log(1)
        state.fullScreen = flag
      },
      [types.SET_CURRENT_INDEX](state, index) {
        state.currentIndex = index
      },
      [types.SET_PLAYLIST](state, list) {
        state.playlist = list
      },
      [types.SET_SEQUENCE_LIST](state, list) {
        state.sequenceList = list
      },
}
export default  mutations