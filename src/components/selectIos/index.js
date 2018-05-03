
import pdSelectItem from './selectIos.vue'
import pdSelectBox from './selectBox.vue'

const components = [
  pdSelectItem,
  pdSelectBox
]
const selectIos = {
  install: function (Vue) {
    components.map(component => {
      Vue.component(component.name, component)
    })
  }
}

export default selectIos
