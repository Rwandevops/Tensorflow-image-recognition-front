import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: 'login',
    isLogged: false
  },
  getters: {
    getIsLogged: state => {
      return state.isLogged
    },
    getPage: state => {
      return state.page
    }
  },
  mutations: {
    changePage (state, page2Display) {
      state.page = page2Display
    },
    changeLog (state, newlog) {
      state.isLogged = newlog
    }
  },
  actions: {}
})
