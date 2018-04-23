<template>
  <div class="vi-tabs__nav-wrap"
    :class="[
    rootTabs.tabPosition ? `is-${ rootTabs.tabPosition }` : ''
    ]">
    <div class="vi-tabs__item" 
      v-for="(pane, index) in panes"
      :key="index"
      :class="[
        rootTabs.tabPosition ? `is-${ rootTabs.tabPosition }` : '',
        {
          'is-active': pane.active,
          'is-disabled': pane.disabled,
        }
      ]"
      @click="clickTab($event, pane, index)"
    >
      {{pane.label}}
    </div>

  </div>
</template>


<script>
// import TabBar from './tab-bar.vue'
import { addResizeListener, removeResizeListener } from '@/utils/resize-event'
import { noop } from '@/utils/util'

export default {
  name: 'TabNav',
  components: {
    // TabBar
  },

  inject: ['rootTabs'],
  props: {
    panes: Array,
    currentName: String,
    editable: Boolean,
    tabClick: {
      type: Function,
      default: noop
    },
    tabRemove: {
      type: Function,
      default: noop
    },
    type: String
  },

  data() {
    return {
      scrollable: false,
      navOffset: 0,
      isFocus: false,
      focusable: true
    }
  },

  computed: {
    navStyle() {
      const dir =
        ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1 ? 'X' : 'Y'
      return {
        transform: `translate${dir}(-${this.navOffset}px)`
      }
    },
    sizeName() {
      return ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1
        ? 'width'
        : 'height'
    }
  },

  methods: {
    clickTab(e, pane, index) {
      console.log('clickTab')
      let tabName = pane.name || pane.index || index
      pane.index = index
      this.tabClick(pane, tabName, e)
    }
  }
  // ,

  // render(h) {
  //   return (
  //     <div>
  //   )
  // }
}
</script>