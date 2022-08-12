import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getItem('TOUTIAO_USER')
  },
  getters: {},
  mutations: {
    SET_USER(state, user) {
      state.user = user

      setItem('TOUTIAO_USER', user)
    }
  },
  actions: {},
  modules: {}
})
