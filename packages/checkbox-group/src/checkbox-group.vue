<template>
  <div class="vi-checkbox-group"
    role="group"
    aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
import Emitter from '@/mixins/emitter'
export default {
  name: 'ViCheckboxGroup',
  componentName: 'ViCheckboxGroup',
  mixins: [Emitter],

  props: {
    value: {},
    disabled: Boolean,
    min: Number,
    max: Number
  },
  watch: {
      value(value) {
        this.dispatch('ViFormItem', 'vi.form.change', [value])
      }
    }
}
</script>