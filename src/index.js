import VueDragTree from './VueDragTree.vue'
import VueSanitize from "vue-sanitize"

const VueDragTreeComponent = {
  install: function(Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('VueDragTree', VueDragTree)
    Vue.use(VueSanitize)
  }
}

export default VueDragTreeComponent
