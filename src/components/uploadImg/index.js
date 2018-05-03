import uploadImg from './uploadimg'

const upLoad = {
  install: function (Vue) {
    Vue.component('uploadImg', uploadImg)
  }
}

export default upLoad
