import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      token: '' || localStorage.getItem('token')
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {
    login({ commit }, token) {
      localStorage.setItem('token', token)
      commit('setToken', token)
    }
  },
  modules: {
  }
})