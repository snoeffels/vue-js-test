import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      type: Object,
      default: null,
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    unsetUser(state) {
      state.user = null;
    }
  },
  getters: {
    isUserAdmin: state => state.user?.admin

}
})
