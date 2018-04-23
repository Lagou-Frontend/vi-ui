<style>
.input-page .vi-input, .input-page .vi-textarea {
  margin-bottom: 1.5em;
}
</style>
<article class="input-page"> 

# Input 输入框


## 基础用法
<div class="demo-block">
  <vi-input placeholder="请输入内容"></vi-input>
  <vi-input maxlength="10" placeholder="请输入内容,最多10个字符"></vi-input>
</div>


::: demo
```html
<vi-input v-model="inputVal" placeholder="请输入内容"></vi-input>
<vi-input v-model="inputVal2" maxlength="10" placeholder="请输入内容"></vi-input>
<script>
export default {
  data() {
    return {
      inputVal: '',
      inputVal2: ''
    }
  }
}
</script>
```
:::

## 禁用状态

<div class="demo-block">
  <vi-input placeholder="请输入内容" disabled></vi-input>
  <vi-input type="textarea" placeholder="请输入内容" disabled></vi-input>
</div>

::: demo
```html
<vi-input v-model="inputVal" placeholder="请输入内容" disabled></vi-input>
<script>
export default {
  data() {
    return {
      inputVal: ''
    }
  }
}
</script>
```
:::

## 可清空 (todo)

## 文本域

<div class="demo-block">
  <vi-input type="textarea" placeholder="请输入内容"></vi-input> 
  <vi-input type="textarea" placeholder="请输入内容" rows="4"></vi-input>
</div>

::: demo
```html
  <vi-input type="textarea" placeholder="请输入内容"></vi-input> 
  <vi-input type="textarea" placeholder="请输入内容" rows="4"></vi-input>
```
:::
## 可自适应文本高度的文本域 (todo)

## 尺寸

<div class="demo-block">
  <vi-input placeholder="请输入内容, default size" ></vi-input> 
  <vi-input placeholder="请输入内容, medium size" size="medium"></vi-input> 
  <vi-input placeholder="请输入内容, small size" size="small"></vi-input> 
  <vi-input placeholder="请输入内容, mini size" size="mini"></vi-input> 

</div>

::: demo
```html
  <vi-input placeholder="请输入内容, default size" ></vi-input> 
  <vi-input placeholder="请输入内容, medium size" size="medium"></vi-input> 
  <vi-input placeholder="请输入内容, small size" size="small"></vi-input> 
  <vi-input placeholder="请输入内容, mini size" size="mini"></vi-input> 
```
:::

## 远程搜索 (todo)

## Input Attributess

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
type | 类型 | string | text / textarea | text
value | 绑定值 | string / number | — | —
maxlength | 原生属性,最大输入长度(IE9+,textarea IE10+) | number | --- | ---
minlength | 原生属性，最小输入长度(IE9+,textarea IE10+) | number | --- | ---
placeholder | 输入框占位文本 | string | --- | ---
disabled | 禁用 | boolean | --- | false
size | 输入框尺寸，只在 type!="textarea" 时有效 | string | medium / small / mini | ---
rows | 输入框行数，只对 type="textarea" 有效 | number | --- | 2
name | 原生属性 | string | --- | ---
readonly | 原生属性，是否只读 | boolean | --- | false


## Input Events
事件名称 | 说明 | 回调参数
--- | --- | --- 
blur | 在 Input 失去焦点时触发 | (event: Event) 
focus | 在 Input 获得焦点时触发 | (event: Event) 
change | 在 Input 值改变时触发 | (value: string | number) 

## Input Methods (todo)



</article>