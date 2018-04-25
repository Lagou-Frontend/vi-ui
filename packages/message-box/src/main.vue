<template>
  <transition name="msgbox-fade">
    <div class="vi-message-box__wrapper"
      tabindex="-1"
      v-show="visible"
      @click.self="handleWrapperClick"
      role="dialog"
      aria-modal="true"
      :aria-label="title || 'dialog'">
      <div class="vi-message-box"
        :class="[customClass]">
        <div class="vi-message-box__header"
          v-if="title !== null">
          <div class="vi-message-box__title">
            <span>{{ title }}</span>
          </div>

          <button type="button"
            class="vi-message-box__headerbtn"
            aria-label="Close"
            v-if="showClose"
            @click="handleAction('cancel')"
            @keydown.enter="handleAction('cancel')">
            <i class="vi-message-box__close el-icon-close"></i>
          </button>
        </div>

        <div class="vi-message-box__content">
          <div class="vi-message-box__message"
            v-if="message !== ''">
            <slot>
              <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
              <p v-else
                v-html="message"></p>
            </slot>
          </div>

          <div class="vi-message-box__btns">
            <el-button :loading="cancelButtonLoading"
              :class="[ cancelButtonClasses ]"
              v-if="showCancelButton"
              :round="roundButton"
              size="small"
              @click.native="handleAction('cancel')"
              @keydown.enter="handleAction('cancel')">
              {{ cancelButtonText || t('el.messagebox.cancel') }}
            </el-button>
            <el-button :loading="confirmButtonLoading"
              ref="confirm"
              :class="[ confirmButtonClasses ]"
              v-show="showConfirmButton"
              :round="roundButton"
              size="small"
              @click.native="handleAction('confirm')"
              @keydown.enter="handleAction('confirm')">
              {{ confirmButtonText || t('el.messagebox.confirm') }}
            </el-button>
          </div>

        </div>

      </div>
    </div>
  </transition>
</template>
<script>
import ViButton from '../../button'

const typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
}

export default {
  name: 'message-box',
  props: {
    modal: {
      default: true
    },
    lockScroll: {
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      default: true
    },
    closeOnPressEscape: {
      default: true
    },
    closeOnHashChange: {
      default: true
    },
    center: {
      default: false,
      type: Boolean
    },
    roundButton: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      uid: 1,
      title: undefined,
      message: '',
      type: '',
      customClass: '',
      showInput: false,
      inputValue: null,
      inputPlaceholder: '',
      inputType: 'text',
      inputPattern: null,
      inputValidator: null,
      inputErrorMessage: '',
      showConfirmButton: true,
      showCancelButton: false,
      action: '',
      confirmButtonText: '',
      cancelButtonText: '',
      confirmButtonLoading: false,
      cancelButtonLoading: false,
      confirmButtonClass: '',
      confirmButtonDisabled: false,
      cancelButtonClass: '',
      editorErrorMessage: null,
      callback: null,
      dangerouslyUseHTMLString: false,
      focusAfterClosed: null,
      isOnComposition: false
    }
  },
  computed: {
    typeClass() {
      return this.type && typeMap[this.type]
        ? `el-icon-${typeMap[this.type]}`
        : ''
    },
    confirmButtonClasses() {
      return `el-button--primary ${this.confirmButtonClass}`
    },
    cancelButtonClasses() {
      return `${this.cancelButtonClass}`
    }
  },
  watch: {
    
  },
  components: {
    ViButton
  },
  methods: {
    getSafeClose() {},
    doClose() {
      // if(!this.visible) {
      //   return;
      // }
    },

  }
}
</script>
