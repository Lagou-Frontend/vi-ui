<template>
  <div class="vi-radio-group"
    role="radiogroup"
  >
    <slot></slot>
  </div>
</template>
<script>

import Emitter from '@/mixins/emitter'

export default {
  name: 'ViRadioGroup',
  componentName: 'ViRadioGroup',
  props: {
    value: {},
    disabled: Boolean
  },
  mixins: [Emitter],
  created() {
    this.$on('handleChange', value => {
      this.$emit('change', value)
    })
  },
  mounted() {
    // 当radioGroup没有默认选项时，第一个可以选中Tab导航
    const radios = this.$el.querySelectorAll('[type=radio]')
    const firstLabel = this.$el.querySelectorAll('[role=radio]')[0]
    if (![].some.call(radios, radio => radio.checked) && firstLabel) {
      firstLabel.tabIndex = 0
    }
  },
  watch: {
      value(value) {
        this.dispatch('ViFormItem', 'vi.form.change', [this.value]);
      }
    }
}
</script>