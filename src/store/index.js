import Vue from 'vue'
import Vuex from 'vuex'

import VideoList from '../data/videoList'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos: VideoList
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
