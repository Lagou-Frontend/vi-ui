# Message 消息提示

## 基础用法

从顶部出现，3 秒后自动消失。
<div class="demo-block">
<vi-button :plain="true" @click="openMsg1">打开消息提示</vi-button>
</div>

::: demo
```html
<vi-button :plain="true" @click="openMsg1">打开消息提示</vi-button>
<script>
export default {
  methods: {
    openMsg1 () {
      this.$message('这是一条消息提示')
    }
  }
}
</script>
```
:::

## 文字居中

<div class="demo-block">
<vi-button :plain="true" @click="openMsg2">center 打开消息提示 </vi-button>
</div>

::: demo
```html
<vi-button :plain="true" @click="openMsg2">center 打开消息提示 </vi-button>
<script>
export default {
  methods: {
    openMsg2 () {
      this.$message({
        message: '居中的文字',
        center: true
      })
    }
  }
}
</script>
```
:::

## 不同状态
<div class="demo-block">
  <vi-button :plain="true" @click="openMsg3">成功</vi-button>
  <vi-button :plain="true" @click="openMsg4">警告</vi-button>
  <vi-button :plain="true" @click="openMsg5">消息</vi-button>
  <vi-button :plain="true" @click="openMsg6">错误</vi-button>
</div>

::: demo
```html
  <vi-button :plain="true" @click="openMsg3">成功</vi-button>
  <vi-button :plain="true" @click="openMsg4">警告</vi-button>
  <vi-button :plain="true" @click="openMsg5">消息</vi-button>
  <vi-button :plain="true" @click="openMsg6">错误</vi-button>
<script>
export default {
  methods: {
    openMsg3 () {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
    ,
    openMsg4 () {
      this.$message({
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      })
    },
    openMsg5 () {
      this.$message({
        message: '这是一条消息提示',
        type: 'info'
      })
    },
    openMsg6 () {
      this.$message.error('错了哦，这是一条错误消息')
    },
  }
}
</script>
```
:::

## 可关闭

<div class="demo-block">
<vi-button :plain="true" @click="openMsg7">消息</vi-button>
</div>

::: demo
```html
<vi-button :plain="true" @click="openMsg7">消息</vi-button>
<script>
export default {
  methods: {
    openMsg7 () {
      this.$message({
        message: '这是一条消息提示',
        showClose: true
      })
    }
  }
}
</script>
```
:::

## Options
参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
message | 消息文字 | string | --- | ---
type | 主题 | string | success/warning/info/error | ---
iconClass | 自定义图标的类名，会覆盖 type | string | --- | ---
customClass | 自定义类名 | string | --- | ---
duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | --- | 3000
showClose | 是否显示关闭按钮 | boolean | --- | false
center | 文字是否居中 | boolean | --- | false
onClose | 关闭时的回调函数, 参数为被关闭的 message 实例 | function | --- | ---


## methods

调用 Message 或 this.$message 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 close 方法。


方法名 | 说明 
close | 关闭当前的 Message 