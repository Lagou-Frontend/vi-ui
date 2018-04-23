<template>
  <div class="vi-tabs"
    :class="[
      type ? `vi-tabs--${type}` : '',
      tabPosition ? `vi-tabs--${tabPosition}` : ''
    ]">
    <template v-if="tabPosition === 'bottom'">
      <div class="vi-tabs__content">
        <slot></slot>
      </div>
      <div class="vi-tabs__header"
        :class="[
        tabPosition ? `is-${tabPosition}` : ''
      ]">
        <tab-nav ref="nav"
          :current-name="currentName"
          :editable="editable"
          :type="type"
          :panes="panes"
          :tab-click="handleTabClick"
          :tab-remove="handleTabRemove"></tab-nav>
      </div>
    </template>
    <template v-else>
      <div class="vi-tabs__header"
        :class="[
        tabPosition ? `is-${tabPosition}` : ''
      ]">
        <tab-nav ref="nav"
          :current-name="currentName"
          :editable="editable"
          :type="type"
          :panes="panes"
          :tab-click="handleTabClick"
          :tab-remove="handleTabRemove"></tab-nav>
      </div>
      <div class="vi-tabs__content">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
import TabNav from './tab-nav.vue'

export default {
  name: 'ViTabs',

  components: {
    TabNav
  },

  provide() {
    return {
      rootTabs: this
    }
  },
  props: {
    type: String,
    activeName: String,
    closeable: Boolean,
    addable: Boolean,
    value: {},
    editable: Boolean,
    tabPosition: {
      type: String,
      default: 'top'
    }
  },

      data() {
      return {
        currentName: this.value || this.activeName,
        panes: []
      }
    },

    created() {
      if (!this.currentName) {
        this.setCurrentName('0')
      }
    },

    watch: {
      activeName(value) {
        this.setCurrentName(value)
      },
      value(value) {
        this.setCurrentName(value)
      },
      currentName(value) {
        if (this.$refs.nav) {
          // this.$nextTick(() => {
          //   this.$refs.nav.scrollToActiveTab()
          // })
        }
      }
    },

    methods: {
      handleTabClick(tab, tabName, e) {
        if (tab.disabled) {
          return
        }

        this.setCurrentName(tabName)
        this.$emit('tab-click', tab, e)
      },
      handleTabRemove(pane, e) {
        if (pane.disabled) {
          return
        }

        e.stopPropagation()
        this.$emit('edit', pane.name, 'remove')
        this.$emit('tab-remove', pane.name)
      },
      handleTabAdd() {
        this.$emit('edit', null, 'add')
        this.$emit('tab-add')
      },
      setCurrentName(value) {
        this.currentName = value
        this.$emit('input', value)
      },
      addPanes(item) {
        let index = this.$slots.default
          .filter(item => {
            return (
              item.elm.nodeType === 1 &&
              /\bvi-tab-pane\b/.test(item.elm.className)
            )
          })
          .indexOf(item.$vnode)

        this.panes.splice(index, 0, item)
      },
      removePanes(item) {
        const panes = this.panes
        const index = panes.indexOf(item)
        if (index > -1) {
          panes.splice(index, 1)
        }
      }
    }
}
</script>