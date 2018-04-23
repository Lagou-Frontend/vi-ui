<article class="page-checkbox">

# Checkbox 多选框

## 基础用法

<div class="demo-block">
<vi-checkbox v-model="checkbox.c1">备选项</vi-checkbox>
<vi-checkbox v-model="checkbox.c2" checked>备选项</vi-checkbox>
<vi-checkbox v-model="checkbox.c3" true-label="xtrue" false-label="xfalse">备选项</vi-checkbox>
</div>

::: demo
```html
<vi-checkbox v-model="checkbox.c1">备选项</vi-checkbox>
<vi-checkbox v-model="checkbox.c2" checked>备选项</vi-checkbox>
<vi-checkbox v-model="checkbox.c3" true-label="xtrue" false-label="xfalse">备选项</vi-checkbox>
<script>
export default {
  data() {
    return {
      checkbox: {
        c1: '',
        c2: '',
        c3: ''
      }
    }
  }
}
</script>
```
:::

## 禁用状态

<div class="demo-block">
<vi-checkbox v-model="checkbox.c4" disabled>备选项</vi-checkbox>
</div>

::: demo
```html
<vi-checkbox v-model="checkbox.c4" disabled>备选项</vi-checkbox>
<script>
export default {
  data() {
    return {
      checkbox: {
        c4: ''
      }
    }
  }
}
</script>
```
:::

## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项

<div class="demo-block">
 <vi-checkbox-group v-model="checkbox.checkList">
    <vi-checkbox label="复选框 A"></vi-checkbox>
    <vi-checkbox label="复选框 B"></vi-checkbox>
    <vi-checkbox label="复选框 C"></vi-checkbox>
    <vi-checkbox label="禁用" disabled></vi-checkbox>
    <vi-checkbox label="选中且禁用" disabled></vi-checkbox>
  </vi-checkbox-group>
</div>

::: demo
```html
 <vi-checkbox-group v-model="checkbox.checkList">
    <vi-checkbox label="复选框 A"></vi-checkbox>
    <vi-checkbox label="复选框 B"></vi-checkbox>
    <vi-checkbox label="复选框 C"></vi-checkbox>
    <vi-checkbox label="禁用" disabled></vi-checkbox>
    <vi-checkbox label="选中且禁用" disabled></vi-checkbox>
  </vi-checkbox-group>
<script>
export default {
  data() {
    return {
      checkbox: {
        checkList: ['选中且禁用','复选框 A']
      }
    }
  }
}
</script>
```
:::

## 可选项目数量的限制 (todo)

## Checkbox Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
label | 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效） | string / number / boolean | --- | ---
true-label | 选中时的值 | string / number | --- | ---
false-label | 没有选中时的值 | string / number | --- | ---
disabled | 是否禁用 | boolean | --- | ---
name | 原生 name 属性 | string | --- | ---
checked | 当前是否勾选 | --- | --- | ---

## Checkbox Events

事件名称 | 说明 | 回调参数
--- | --- | --- 
change | 当绑定值变化时触发的事件 | 更新后的值 


## Checkbox-group Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
disabled | 是否禁用 | boolean | --- | false
min | 可被勾选的 checkbox 的最小数量 | number | --- | ---
max | 可被勾选的 checkbox 的最大数量 | number | --- | ---


## Checkbox-group Events

事件名称 | 说明 | 回调参数
--- | --- | --- 
change | 当绑定值变化时触发的事件 | 更新后的值 
</article>