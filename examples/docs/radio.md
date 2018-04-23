<article class="page-radio">

# Radio 单选框

## 基础用法

<div class="demo-block">
  <vi-radio v-model="radio1" label="男"></vi-radio>
  <vi-radio v-model="radio1" label="女"></vi-radio>
</div>
<script>

</script>

::: demo
```html

  <vi-radio v-model="radio1" label="男"></vi-radio>
  <vi-radio v-model="radio1" label="女"></vi-radio>
  <script>
  export default {
    data () {
      return {
        radio: '男'
      };
    }
  }
</script>
```
:::

## 禁用状态

<div class="demo-block">
  <vi-radio v-model="radio2" label="男" disabled></vi-radio>
  <vi-radio v-model="radio2" label="女"></vi-radio>
</div>

::: demo
```html

   <vi-radio v-model="radio2" label="男" disabled></vi-radio>
  <vi-radio v-model="radio2" label="女"></vi-radio>
  <script>
  export default {
    data () {
      return {
        radio2: ''
      };
    }
  }
</script>
```
:::

## 单选框组

<div class="demo-block">
  <vi-radio-group v-model="radio3">
    <vi-radio :label="3">备选项</vi-radio>
    <vi-radio :label="6">备选项</vi-radio>
    <vi-radio :label="9">备选项</vi-radio>
  </vi-radio-group>
</div>


::: demo
```html

  <vi-radio-group v-model="radio3">
    <vi-radio :label="3">备选项1</vi-radio>
    <vi-radio :label="6">备选项2</vi-radio>
    <vi-radio :label="9">备选项3</vi-radio>
  </vi-radio-group>
  <script>
  export default {
    data () {
      return {
        radio3: ''
      };
    }
  }
</script>
```
:::

## Radio Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
label | Radio 的 value | string / number / boolean | --- | ---
disabled | 是否禁用 | boolean | --- | false
name | 原生 name 属性 | string | --- | ---

## Radio Events

事件名称 | 说明 | 回调参数
--- | --- | --- 
change | 绑定值变化时触发的事件 | 选中的 Radio label 值

## Radio-group Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
disabled | 是否禁用 | boolean | --- | false

## Radio-group Events

事件名称 | 说明 | 回调参数
--- | --- | --- 
change | 绑定值变化时触发的事件 | 选中的 Radio label 值







</article>