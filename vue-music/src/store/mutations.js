import * as types from './mutation-types'

const mutations = {
    SET_SINGER(state, param) {
        state.singer = param
    },
    [types.SET_PLAYING_STATE](state, flag) {
        state.playing = flag
      },
      [types.SET_FULL_SCREEN](state, flag) {
        state.fullScreen = flag
      },
      [types.SET_PLAYLIST](state, list) {
        state.playlist = list
      },
}
export default  mutations