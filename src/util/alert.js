import store from '../store'

/**
 * dialog公共方法
 */

export function alert (str) {
  store.dispatch('onShowAlert', true)
  store.dispatch('onAlertMsg', str)
  setTimeout(() => {
    store.dispatch('onShowAlert', false)
  }, 1500)
}
