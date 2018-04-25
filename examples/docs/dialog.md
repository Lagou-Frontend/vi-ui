# Dialog 对话框

## 基本用法

<div class="demo-block">
<vi-button type="text" @click="dialogPage.dialogVisible1 = true">点击打开 Dialog1</vi-button>
<vi-dialog
  title="提示"
  :visible.sync="dialogPage.dialogVisible1"
  width="30%"
  :before-close="beforeHandleClose1">
  <span>dialog1 这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <vi-button @click="dialogPage.dialogVisible1 = false">取 消</vi-button>
    <vi-button type="primary" @click="dialogPage.dialogVisible1 = false">确 定</vi-button>
  </span>
</vi-dialog>
</div>

> 注意：如果 visible 属性绑定的变量位于 Vuex 的 store 内，那么 .sync 不会正常工作。此时需要去除 .sync 修饰符，同时监听 Dialog 的 open 和 close 事件，在事件回调中执行 Vuex 中对应的 mutation 更新 visible 属性绑定的变量的值。

:::demo
```html
<div class="demo-block">
<vi-button type="text" @click="dialogPage.dialogVisible2 = true">点击打开 Dialog</vi-button>
<vi-dialog
  title="提示"
  :visible.sync="dialogPage.dialogVisible2"
  width="30%"
  :before-close="beforeHandleClose1">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <vi-button @click="dialogPage.dialogVisible2 = false">取 消</vi-button>
    <vi-button type="primary" @click="dialogPage.dialogVisible2 = false">确 定</vi-button>
  </span>
</vi-dialog>
</div>
<script>
export default {
  data() {
    return {
      dialogPage: {
        dialogVisible1: false
      }
    }
  },
  methods: {
    beforeHandleClose1 (hide) {
      alert('before close')
      hide()
    }
  }
}
</script>
```
:::


## 居中布局
标题和底部可水平居中(内容是默认不居中的)
<div class="demo-block">
<vi-button type="text" @click="dialogPage.dialogVisible2 = true">点击打开 dialog2</vi-button>
<vi-dialog
  title="提示"
  center
  :visible.sync="dialogPage.dialogVisible2"
  width="30%"
  :before-close="beforeHandleClose1">
  <span>dialog2 这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <vi-button @click="dialogPage.dialogVisible2 = false">取 消</vi-button>
    <vi-button type="primary" @click="dialogPage.dialogVisible2 = false">确 定</vi-button>
  </span>
</vi-dialog>
</div>

:::demo
```html
<div class="demo-block">
<vi-button type="text" @click="dialogPage.dialogVisible2 = true">点击打开 dialog2</vi-button>
<vi-dialog
  title="提示"
  center
  :visible.sync="dialogPage.dialogVisible2"
  width="30%"
  :before-close="beforeHandleClose1">
  <span>dialog2 这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <vi-button @click="dialogPage.dialogVisible2 = false">取 消</vi-button>
    <vi-button type="primary" @click="dialogPage.dialogVisible2 = false">确 定</vi-button>
  </span>
</vi-dialog>
</div>
<script>
export default {
  data() {
    return {
      dialogPage: {
        dialogVisible2: false
      }
    }
  },
  methods: {
    beforeHandleClose1 (hide) {
      alert('before close')
      hide()
    }
  }
}
</script>
```
:::

## Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
visible | 是否显示 Dialog，支持 .sync 修饰符 | boolean | --- | false
title | Dialog 的标题，也可通过具名 slot （见下表）传入 | string | --- | ---
width | Dialog 的宽度 | string | --- | 50%
fullscreen | 是否为全屏 Dialog | boolean | --- | false
top | Dialog CSS 中的 margin-top 值 | string | --- | 15vh
modal | 是否需要遮罩层 | boolean | --- | true
modal-append-to-body | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上 | boolean | --- | true
append-to-body | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true | boolean | --- | false
lock-scroll | 是否在 Dialog 出现时将 body 滚动锁定 | boolean | --- | true
custom-class | Dialog 的自定义类名 | string | --- | ---
close-on-click-modal | 是否可以通过点击 modal 关闭 Dialog | boolean | --- | true
close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog | boolean | --- | true
show-close | 是否显示关闭按钮 | boolean | --- | true
before-close | 关闭前的回调，会暂停 Dialog 的关闭 | function(done)，done 用于关闭 Dialog | --- | ---
center | 是否对头部和底部采用居中布局 | boolean | --- | false


## Slot

name |	说明
--- | --- 
--- | Dialog 的内容 
title | Dialog 标题区的内容 
footer | Dialog 按钮操作区的内容 

## Events
事件名称 | 说明 | 回调参数
--- | --- | --- 
close | Dialog 关闭的回调 | --- 
open | Dialog 打开的回调 | --- 
