import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import loading from './modules/loading'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  modules: {
    loading
  }
})
export default store
