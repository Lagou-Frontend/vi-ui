<template>
  <label class="vi-checkbox"
    :class="[
      {'is-disabled': isDisabled},
      {'is-checked': isChecked}
    ]"
    role="checkbox"
    :aria-checked="isChecked"
    :aria-disabled="isDisabled">
    <span class="vi-checkbox__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': isChecked,
        'is-focus': focus
      }">
      <span class="vi-checkbox__inner">
        <input v-if="trueLabel || falseLabel"
          class="vi-checkbox__original"
          type="checkbox"
          :name="name"
          :disabled="isDisabled"
          :true-value="trueLabel"
          :false-value="falseLabel"
          v-model="model"
          @change="handleChange"
          @focus="focus = true"
          @blur="focus = false">
        <input v-else
          class="vi-checkbox__original"
          type="checkbox"
          :name="name"
          :value="label"
          :disabled="isDisabled"
          v-model="model"
          @change="handleChange"
          @focus="focus = true"
          @blur="focus = false">
      </span>

      <span v-if="$slots.default || label"
        class="vi-checkbox__label">
        <slot></slot>
        <template v-if="!$slots.default">{{label}}</template>
      </span>
    </span>
  </label>
</template>
<script>
import Emitter from '../../../src/mixins/emitter'

export default {
  name: 'ViCheckbox',
  componentName: 'ViCheckbox',
  mixins: [Emitter],
  props: {
    value: {},
    label: {},
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number]
  },
  data() {
    return {
      selfModel: false,
      focus: false
    }
  },
  computed: {
    isGroup() {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.componentName !== 'ViCheckboxGroup') {
          parent = parent.$parent
        } else {
          this._checkboxGroup = parent
          return true
        }
      }
      return false
    },
    model: {
      get() {
        return this.isGroup
          ? this.store
          : this.value !== undefined ? this.value : this.selfModel
      },
      set(val) {
        if (this.isGroup) {
          this.dispatch('ViCheckboxGroup', 'input', [val])
        } else {
          this.$emit('input', val)
          this.selfModel = val
        }
      }
    },
    store() {
      return this._checkboxGroup ? this._checkboxGroup.value : this.value
    },
    isChecked() {
      if ({}.toString.call(this.model) === '[object Boolean]') {
        return this.model
      } else if (Array.isArray(this.model)) {
        return this.model.indexOf(this.label) > -1
      } else if (this.model !== null && this.model !== undefined) {
        return this.model === this.trueLabel
      }
    },
    isDisabled() {
      return this.isGroup
        ? this._checkboxGroup.disabled || this.disabled
        : this.disabled
    }
  },
  created() {
    this.checked && this.addToStore()
  },
  methods: {
    addToStore() {
      if(Array.isArray(this.model) && this.model.indexOf(this.label) === -1) {
        this.model.push(this.label)
      } else {
        this.model = this.trueLabel || true
      }
    },
    handleChange(e) {
      let value;
      if(e.target.checked) {
        value = this.trueLabel || true;
      } else {
        value = this.falseLabel || false;
      }

      this.$emit('change', value, e);
      this.$nextTick(() => {
        if(this.isGroup) {
          this.dispatch('ViCheckboxGroup', 'change', [this._checkboxGroup.value]);
        }
      })
    }
  }
}
</script>