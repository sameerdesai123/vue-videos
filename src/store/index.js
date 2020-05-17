import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../service/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos: []
  },
  mutations: {
    setVideos (state, videos) {
      state.videos = videos
    }
  },
  actions: {
    async loadVideos ({ commit }) {
      const res = await Api().get('/videos')
      commit('setVideos', res.data)
    }
  },
  modules: {
  }
})
