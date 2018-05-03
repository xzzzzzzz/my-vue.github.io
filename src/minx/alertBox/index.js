import Vue from 'vue'
import alertBox from './alert-msg' // 引入模板
let MessageBox = Vue.extend(alertBox) // 创建vue构造器
let Instance = {} // 定义插件对象

Instance.install = function (Vue, options) {
  if (document.getElementsByClassName('alertBox').length) {

  }
  let Tlp = new MessageBox() // 实例化vue实例
  // 此处使用$mount来手动开启编译。用$el来访问元素，并插入到body中
  Tlp.vm = Tlp.$mount()
  document.body.appendChild(Tlp.vm.$el)

  Vue.prototype.$instance = { // 在Vue的原型上添加实例方法，以全局调用
    show (options) { // 控制toast显示的方法
      if (typeof options === 'string') { // 对参数进行判断
        Tlp.text = options // 传入props
      } else if (typeof options === 'object') {
        Object.assign(Tlp, options) // 合并参数与实例
      }
      Tlp.show = true // 显示toast
    },
    hide () { // 控制toast隐藏的方法
      Tlp.show = false
    }
  }
}

export default Instance
