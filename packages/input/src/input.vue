<template>
  <div :class="[
    type === 'textarea' ? 'vi-textarea' : 'vi-input',
    size ? 'vi-input--' + size : '', 
    {
      'is-disabled': disabled,
    }]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false">
    <template v-if="type=== 'textarea'">
      <textarea class="vi-textarea__inner"
        :disabled="disabled"
        :value="currentValue"
        v-bind="$attrs"
        ref="textarea"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"></textarea>
    </template>
    <template v-else>
      <!-- v-bind="$attrs" 完成了对原生属性的绑定, 但是对于有默认值的属性比如disabled还是需要明确绑定 -->
      <!-- 需要注意的是vm.$attrs包含的是props中没有申明的任何其他属性 -->
      <input class="vi-input__inner"
        :type="type"
        v-bind="$attrs"
        :disabled="disabled"
        :value="currentValue"
        ref="input"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange">
    </template>
  </div>
</template>
<script>
import Emitter from '@/mixins/emitter'
export default {
  name: 'ViInput',
  componentName: 'ViInput',
  mixins: [Emitter],
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: [String, Number],
    validateEvent: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: String, // medium / small / mini
    readonly: Boolean
  },
  data() {
    return {
      currentValue: this.value || '',
      hovering: false,
      focused: false,
      isOnComposition: false
    }
  },
  watch: {
    value(val, oldVal) {
      this.setCurrentValue(val)
    }
  },
  methods: {
    setCurrentValue(val) {
      if (this.currentValue !== val) {
        this.currentValue = val
        if (this.validateEvent) {
          this.dispatch('ViFormItem', 'vi.form.change', [val])
        }
      }
    },
    handleComposition(e) {
      if (e.type === 'compositionend') {
        ;(this.isOnComposition = false), this.handleInput(e)
      } else {
        this.isOnComposition = true
      }
    },
    handleInput(e) {
      if (this.isOnComposition) return
      let value = e.target.value
      this.$emit('input', value)
      this.setCurrentValue(value)
    },
    handleFocus(e) {
      this.focused = true
      this.$emit('focus', e)
    },
    handleBlur(e) {
      this.focused = false
      this.$emit('blur', e)
      if (this.validateEvent) {
        this.dispatch('ViFormItem', 'vi.form.blur', [this.currentValue])
      }
    },
    handleChange(event) {
      this.$emit('change', event.target.value)
    }
  }
}
</script>
