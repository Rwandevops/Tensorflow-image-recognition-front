import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: 'home',
    isLogged: false,
    user: { 
      id: '',
      nom: '',
      prenom: '',
      email: '',
      password: '',
      isAdmin: '0'
      } // fin user
  },
  getters: {
    getPage: state => {
      return state.page
    },
    getIsLogged: state => {
      return state.isLogged
    },
    getIsAdmin: state => {
      return state.isAdmin
    },
    getUser: state => {
      return state.user
    },

  },
  mutations: {
    changePage (state, page2Display) {
      state.page = page2Display
    },
    changeLog (state, newlog) {
      state.isLogged = newlog
    },
    changeUser (state, newuser) {
      state.user = newuser
    }
  },
  actions: {}
})
