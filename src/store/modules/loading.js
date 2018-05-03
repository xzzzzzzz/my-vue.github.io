
const state = {
  isLoading: false,
  showAlert: false,
  alertMsg: 'msg'
}

const mutations = {
  updateLoadingState (state, flag) {
    state.isLoading = flag
  },
  setShowAlert (state, str) {
    state.showAlert = str
  },
  setAlertMsg (state, str) {
    state.alertMsg = str
  }
}

const actions = {
  onLoading (context, flag) {
    context.commit('updateLoadingState', flag)
  },
  onShowAlert (context, str) {
    context.commit('setShowAlert', str)
  },
  onAlertMsg (context, str) {
    context.commit('setAlertMsg', str)
  }
}

export default {
  state,
  mutations,
  actions
}
