import ViDialog from './src/dialog.vue'

ViDialog.install = function (Vue) {
  Vue.component(ViDialog.name, ViDialog)
}

export default ViDialog
