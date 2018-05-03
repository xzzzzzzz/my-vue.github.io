import store from '../vuex/store'

/**
*   Toast公共方法
*/
export function toast (str, icon) {
  store.dispatch('showToast', true)
  if (icon === 'success') {
    store.dispatch('showSuccess', true)
    store.dispatch('showFail', false)
  } else {
    store.dispatch('showSuccess', false)
    store.dispatch('showFail', true)
  }
  store.dispatch('toastMsg', str)
  setTimeout(() => {
    store.dispatch('showToast', false)
  }, 1500)
}

/**
 * dialog公共方法
 */

export function alert (str) {
  store.dispatch('setShowAlert', true)
  store.dispatch('setAlertMsg', str)
  setTimeout(() => {
    store.dispatch('setShowAlert', false)
  }, 1500)
}
