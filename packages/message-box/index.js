import messageBox from './src/message-box.vue'

messageBox.install = Vue => {
  Vue.component(messageBox.name, messageBox)
}

export default messageBox
