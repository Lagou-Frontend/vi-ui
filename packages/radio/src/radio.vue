<template>
  <label
    class="vi-radio"
    :class="[
    {'is-disabled': disabled},
    {'is-focus': focus},
    {'is-checked': model === label}
    ]"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="disabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = label"
  >
    <span 
      class="vi-radio__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }"
      >
      <span class="vi-radio__inner"></span>
      <input
        class="vi-radio__original"
        :value="label"
        type="radio"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
        :name="name"
        :disabled="isDisabled"
        tabindex="-1"
      >
      <span class="vi-radio__label">
        <slot></slot>
        <template v-if="!$slots.default">{{label}}</template>
      </span>
    </span>
  
  
  
  </label>
</template>
<script>
  import Emitter from '../../../src/mixins/emitter'

  export default {
    name: 'ViRadio',
    componentName: 'ViRadio',
    mixins: [Emitter],
    props: {
      value: {},
      label: {},
      disabled: Boolean,
      name: String
    },
    data () {
      return {
        focus: false
      }
    },
    created () {
      window.test = this
    },
    computed: {
      isGroup () {
        let parent = this.$parent
        while (parent) {
          if(parent.$options.componentName !== 'ViRadioGroup') {
            parent = parent.$parent
          } else {
            this._radioGroup = parent
            return true
          }
        }
        return false
      },
      model: {
        get() {
          return this.isGroup ? this._radioGroup.value : this.value
        },
        set(val) {
          if(this.isGroup) {
            this.dispatch('ViRadioGroup', 'input', [val])
          } else {
            this.$emit('input', val)
          }
        }
      },
      isDisabled () {
        return this.isGroup 
          ? this._radioGroup.disabled || this.disabled 
          : this.disabled
      },
      tabIndex() {
        return !this.isDisabled 
          ? (this.isGroup 
            ? this.model === this.label ? 0 : -1
            : 0)
          : -1
      }
    },
    methods: {
      handleChange() {
        this.$nextTick(() => {
          this.$emit('change', this.model)
          this.isGroup && this.dispatch('ViRadioGroup', 'handleChange', this.model)
        })
      }
    }
  }
</script>