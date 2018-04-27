<template>
  <form class="vi-form"
    :class="[
    {'vi-form--inline': inline},
    labelPosition ? 'vi-form--label-' + labelPosition : ''
  ]">
    <slot></slot>
  </form>
</template>
<script>
import objectAssign from '../../../src/utils/merge'
import { resolve } from 'url';

export default {
  name: 'ViForm',
  componentName: 'ViForm',

  provide() {
    return {
      viForm: this
    }
  },

  props: {
    model: Object,
    rules: Object,
    labelPosition: String,
    labelWidth: String,
    labelSuffix: {
      type: String,
      default: ''
    },
    inline: Boolean,
    statusIcon: Boolean,
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String,
    disabled: Boolean,
    validateOnRuleChange: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    rules() {
      if (this.validateOnRuleChange) {
        this.validate(() => {})
      }
    }
  },

  data() {
    return {
      fields: []
    }
  },

  created() {
    this.$on('vi.form.addField', field => {
      if (field) {
        this.fields.push(field)
      }
    })

    this.$on('vi.from.removeField', field => {
      if (field.prop) {
        this.fields.splice(this.fields.indexOf(field), 1)
      }
    })
  },

  methods: {
    resetFields() {
      if (!this.model) {
        process.env.NODE_ENV !== 'production' &&
          console.warn(
            '[VI-UI Warn][Form]model is required for resetFields to work.'
          )
        return
      }

      this.fields.forEach(field => {
        field.resetField()
      })
    },

    validate(callback) {
      if (!this.model) {
        console.warn(
          '[VI-UI Warn][Form]model is required for validate to work!'
        )
        return
      }

      let promise
      if (typeof callback !== 'function' && window.Promise) {
        promise = new window.Promise((resolve, reject) => {
          callback = function(valid) {
            valid ? resolve(valid) : reject(valid)
          }
        })
      }

      let valid = true, count = 0, invalidFields = {}
      if (this.fields.length === 0 && callback) {
        callback(true)
      }

      this.fields.forEach(field => {
        field.validate('', (message, field) => {
          if(message) {
            valid = false
          }
          invalidFields = objectAssign({}, invalidFields, field)
          if(typeof callback === 'function' && ++count === this.fields.length) {
            callback(valid, invalidFields)
          }
        })

        if (promise) {
          return promise
        }
      })

    },

    validateField(prop, cb) {
      let field = this.fields.filter(field => field.prop === prop)[0]
      if(!field) {
         throw new Error('must call validateField with valid prop string!')
      }

      field.validate('', cb);
    }
  }
}
</script>