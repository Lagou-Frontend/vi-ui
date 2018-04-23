<template>
  <div class="vi-form-item"
    :class="[{
      'vi-form-item--feedback': viForm && viForm.statusIcon,
      'is-error': validateState === 'error',
      'is-validating': validateState === 'validating',
      'is-success': validateState === 'success',
      'is-required': isRequired || required,
      },
      sizeClass ? 'vi-form-item--' + sizeClass : '' 
      ]">
    <label v-if="label || $slots.label"
      :for="labelFor"
      class="vi-form-item__label"
      v-bind:style="labelStyle">
      <slot name="label">{{label + form.labelSuffix}}
        </slot>
    </label>
    <div class="vi-form-item__content"
      v-bind:style="contentStyle">
      <slot></slot>
      <transition name="vi-zoom-in-top">
        <div v-if="validateState === 'error' && showMessage && form.showMessage"
          class="vi-form-item__error"
          :class="{
            'vi-form-item__error--inline': typeof inlineMessage === 'boolean' 
              ? inlineMessage
              : (viForm && viForm.inlineMessage || false )
          }">
          {{validateMessage}}
        </div>
      </transition>
    </div>
  </div>

</template>
<script>
import AsyncValidator from 'async-validator'
import Emitter from '@/mixins/emitter'
import objectAssign from '@/utils/merge'
import { noop, getPropByPath } from '@/utils/util'

export default {
  name: 'ViFormItem',
  componentName: 'ViFormItem',
  mixins: [Emitter],

  provide() {
    return {
      viFormItem: this
    }
  },

  inject: ['viForm'],

  props: {
    label: String,
    labelWidth: String,
    prop: String,
    required: {
      type: Boolean,
      default: undefined
    },
    rules: [Object, Array],
    error: String,
    validateStatus: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: ''
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String
  },
  watch: {
    error: {
      immediate: true,
      handler(value) {
        this.validateMessage = value
        this.validateState = value ? 'error' : ''
      }
    },
    validateStatus(value) {
      this.validateState = value
    }
  },
  computed: {
    form() {
      let parent = this.$parent
      let parentName = parent.$options.componentName
      while (parentName !== 'ViForm') {
        if (parentName === 'VIFormItem') {
          this.isNested = true
        }
        parent = parent.$parent
        if (!parent) {
          break
        }
        parentName = parent.$options.componentName
      }

      if (parentName === 'ViForm') {
        return parent
      }
    },
    labelFor() {
      return this.for || this.prop
    },
    labelStyle() {
      const ret = {}
      if (this.form.labelPosition === 'top') {
        return ret
      }

      const labelWidth = this.labelWidth || this.form.labelWidth
      if (labelWidth) {
        ret.width = labelWidth
      }
      return ret
    },
    contentStyle() {
      const ret = {}
      const label = this.label

      if (this.form.labelPosition === 'top' || this.form.inline) return ret
      if (!label && !this.labelWidth && this.isNested) return ret

      const labelWidth = this.labelWidth || this.form.labelWidth
      if (labelWidth) {
        ret.marginLeft = labelWidth
      }
      return ret
    },
    fieldValue: {
      // 配置cache为false 会使得每次都计算，而不是和默认的当依赖项变化时进行计算
      // 但是用在这好像并没有卵用，fieldValue依赖项 this.form.model、this.prop都是可相应的
      cache: false, // https://github.com/vuejs/vue/issues/1189
      get() {
        const model = this.form.model
        if (!model && !this.prop) {
          return
        }

        let path = this.prop
        if (path.indexOf(':') !== -1) {
          path = path.replace(/:/, '.')
        }

        return getPropByPath(model, path, true).v
      }
    },
    isRequired() {
      let rules = this.getRules()
      let isRequired = false

      if (rules && rules.length) {
        rules.every(rule => {
          if (rule.required) {
            isRequired = true
            return false
          }
          return true
        })
      }
      return isRequired
    },
    _formSize() {
      return this.viForm.size // this.viForm 和 this.form一样吧，所以上面form那个计算属性是冗余的！？
    },
    viFormItemSize() {
      return this.size || this._formSize
    },
    sizeClass() {
      return (this.$VIUI || {}).size || this.viFormItemSize
    }
  },
  data() {
    return {
      validateState: '',
      validateMessage: '',
      validateDisabled: false, // 控制一些场景不需要校验，比如reset时, 为true时会忽略第一次校验
      validator: {},
      isNested: false
    }
  },
  methods: {
    validate(trigger, callback = noop) {
      this.validateDisabled = false
      const rules = this.getFilteredRule(trigger)
      if ((!rules || rules.length === 0) && !this.required) {
        callback()
        return true
      }

      this.validateState = 'validating'

      const descriptor = {}
      if (rules && rules.length > 0) {
        rules.forEach(rule => {
          delete rule.trigger
        })
      }

      descriptor[this.prop] = rules

      const validator = new AsyncValidator(descriptor)
      const model = {}
      model[this.prop] = this.fieldValue
      validator.validate(
        model,
        { firstFields: true },
        (errors, invalidFields) => {
          this.validateState = errors ? 'error' : 'success'
          this.validateMessage = errors ? errors[0].message : ''

          callback(this.validateMessage, invalidFields)
          this.viForm && this.viForm.$emit('validate', this.prop, !errors)
        }
      )
    },
    clearValidate() {
      this.validateState = ''
      this.validateMessage = ''
      this.validateDisabled = false
    },
    resetField() {
      this.validateState = ''
      this.validateMessage = ''

      let model = this.form.model
      let value = this.fieldValue
      let path = this.prop
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.')
      }

      let prop = getPropByPath(model, path, true)

      this.validateDisabled = true
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(this.initialValue)
      } else {
        prop.o[prop.k] = this.initialValue
      }
    },
    getRules() {
      let formRules = this.form.rules
      const selfRules = this.rules
      const requiredRule = !!this.required ? { required: !!this.required } : []

      const prop = getPropByPath(formRules, this.prop || '')
      formRules = formRules ? prop.o[this.prop || ''] || prop.v : []

      return [].concat(selfRules || formRules || []).concat(requiredRule)
    },
    getFilteredRule(trigger) {
      const rules = this.getRules()

      return rules
        .filter(rule => {
          if (!rule.trigger || trigger === '') {
            return true
          }

          if (Array.isArray(rule.trigger)) {
            return rule.trigger.indexOf(trigger) > -1
          } else {
            return rule.trigger === trigger
          }
        })
        .map(rule => objectAssign({}, rule))
    },
    onFieldBlur() {
      this.validate('blur')
    },
    onFieldChange() {
      if (this.validateDisabled) {
        this.validateDisabled = false
        return
      }

      this.validate('change')
    }
  },
  mounted() {
      // console.log('mounted')
      if (this.prop) {
        this.dispatch('ViForm', 'vi.form.addField', [this])

        let initialValue = this.fieldValue

        if (Array.isArray(initialValue)) {
          initialValue = [].concat(initialValue)
        }
        Object.defineProperty(this, 'initialValue', {
          // 这么写有啥子好处么 ？_ ?
          value: initialValue
        })

        let rules = this.getRules()

        if (rules.length || !!this.required) {
          this.$on('vi.form.blur', this.onFieldBlur)
          this.$on('vi.form.change', this.onFieldChange)
        }
      }
    },

    beforeDestroy() {
      this.dispatch('ViForm', 'el.form.removeField', [this])
    }
}
</script>