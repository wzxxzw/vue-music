export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playlist = state => state.playlist

export const currentSong = (state) => {
    return state.playlist[state.currentIndex] || {}
  }