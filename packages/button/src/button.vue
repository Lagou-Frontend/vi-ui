<template>
  <button class="vi-button"
    @click="handleClick"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'vi-button--' + type : '',
      size ? 'vi-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]">
    <i class="vi-icon-spinner" v-if="loading"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: 'ViButton',

  props: {
    size: String, // medium / small / mini
    type: {
      type: String, // primary / success / warning / danger / info / text
      default: 'default'
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    loading: Boolean,
    disabled: Boolean,
    icon: String,
    autofocus: Boolean,
    nativeType: String // button / submit / reset
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

