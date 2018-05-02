import Button from '../packages/button/index'
import ButtonGroup from '../packages/button-group/index'

import Input from '../packages/input/index'
import Radio from '../packages/radio/index'
import RadioGroup from '../packages/radio-group/index'
import Checkbox from '../packages/checkbox/index'
import CheckboxGroup from '../packages/checkbox-group/index'
import Form from '../packages/form/index'
import FormItem from '../packages/form-item/index'

import Tabs from '../packages/tabs/index'
import TabPane from '../packages/tab-pane/index'

import Dialog from '../packages/dialog/index'
import Message from '../packages/message/index'

const components = [
  Button,
  ButtonGroup,
  Input,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Dialog
]

const install = function (Vue, opt = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$message = Message
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.0.1',
  install,
  Button,
  ButtonGroup,
  Input,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Dialog,

  Message
}
export {Message}
