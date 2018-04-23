# Button 按钮

## 基础用法
<div class="demo-block">
  <p>
    <vi-button>默认按钮</vi-button>
    <vi-button type="primary">主要按钮</vi-button>
    <vi-button type="success">成功按钮</vi-button>
    <vi-button type="info">信息按钮</vi-button>
    <vi-button type="warning">警告按钮</vi-button>
    <vi-button type="danger">危险按钮</vi-button>
  </p> 

  <p>
  <vi-button plain>朴素按钮</vi-button>
  <vi-button type="primary" plain>主要按钮</vi-button>
  <vi-button type="success" plain>成功按钮</vi-button>
  <vi-button type="info" plain>信息按钮</vi-button>
  <vi-button type="warning" plain>警告按钮</vi-button>
  <vi-button type="danger" plain>危险按钮</vi-button> 
</p>

  <p>
  <vi-button round>圆角按钮round</vi-button>
  <vi-button type="primary" round>主要按钮</vi-button>
  <vi-button type="success" round>成功按钮</vi-button>
  <vi-button type="info" round>信息按钮</vi-button>
  <vi-button type="warning" round>警告按钮</vi-button>
  <vi-button type="danger" round>危险按钮</vi-button>
</p>

  <p>
  <vi-button circle icon="vi-icon-male"></vi-button>
  <vi-button type="primary" circle icon="vi-icon-female"></vi-button>
  <vi-button type="success" circle icon="vi-icon-baidu"></vi-button>
  <vi-button type="info" circle icon="vi-icon-qq"></vi-button>
  <vi-button type="warning" circle icon="vi-icon-edit"></vi-button>
  <vi-button type="danger" circle icon="vi-icon-email"></vi-button>
</p>

</div>

::: demo
```html
<div class="demo-block">
  <p>
    <vi-button>默认按钮</vi-button>
    <vi-button type="primary">主要按钮</vi-button>
    <vi-button type="success">成功按钮</vi-button>
    <vi-button type="info">信息按钮</vi-button>
    <vi-button type="warning">警告按钮</vi-button>
    <vi-button type="danger">危险按钮</vi-button>
  </p> 

  <p>
  <vi-button plain>朴素按钮</vi-button>
  <vi-button type="primary" plain>主要按钮</vi-button>
  <vi-button type="success" plain>成功按钮</vi-button>
  <vi-button type="info" plain>信息按钮</vi-button>
  <vi-button type="warning" plain>警告按钮</vi-button>
  <vi-button type="danger" plain>危险按钮</vi-button> 
</p>

  <p>
  <vi-button round>圆角按钮</vi-button>
  <vi-button type="primary" round>主要按钮</vi-button>
  <vi-button type="success" round>成功按钮</vi-button>
  <vi-button type="info" round>信息按钮</vi-button>
  <vi-button type="warning" round>警告按钮</vi-button>
  <vi-button type="danger" round>危险按钮</vi-button>
</p>

</div>
```
:::

## 禁用状态
<div class="demo-block">
<p>
  <vi-button disabled>默认按钮</vi-button>
  <vi-button type="primary" disabled>主要按钮</vi-button>
  <vi-button type="success" disabled>成功按钮</vi-button>
  <vi-button type="info" disabled>信息按钮</vi-button>
  <vi-button type="warning" disabled>警告按钮</vi-button>
  <vi-button type="danger" disabled>危险按钮</vi-button>
</p>

<p>
  <vi-button plain disabled>朴素按钮</vi-button>
  <vi-button type="primary" plain disabled>主要按钮</vi-button>
  <vi-button type="success" plain disabled>成功按钮</vi-button>
  <vi-button type="info" plain disabled>信息按钮</vi-button>
  <vi-button type="warning" plain disabled>警告按钮</vi-button>
  <vi-button type="danger" plain disabled>危险按钮</vi-button>
</p>
</div>

::: demo
```html
<p>
  <vi-button disabled>默认按钮</vi-button>
  <vi-button type="primary" disabled>主要按钮</vi-button>
  <vi-button type="success" disabled>成功按钮</vi-button>
  <vi-button type="info" disabled>信息按钮</vi-button>
  <vi-button type="warning" disabled>警告按钮</vi-button>
  <vi-button type="danger" disabled>危险按钮</vi-button>
</p>

<p>
  <vi-button plain disabled>朴素按钮</vi-button>
  <vi-button type="primary" plain disabled>主要按钮</vi-button>
  <vi-button type="success" plain disabled>成功按钮</vi-button>
  <vi-button type="info" plain disabled>信息按钮</vi-button>
  <vi-button type="warning" plain disabled>警告按钮</vi-button>
  <vi-button type="danger" plain disabled>危险按钮</vi-button>
</p>
```
:::


## 文字按钮

<div class="demo-block">
  <vi-button type="text" >文字按钮</vi-button>
  <vi-button type="text" disabled>文字按钮</vi-button>
</div>

:::demo
```html
<p>
  <vi-button type="text" >文字按钮</vi-button>
  <vi-button type="text" disabled>文字按钮</vi-button>
</p>
```
:::


## 图标按钮

<div class="demo-block">
<vi-button type="primary" icon="vi-icon-edit"></vi-button>
<vi-button type="primary" >发送 <i class="vi-icon-email"></i></vi-button>
</div>

:::demo
```html
<vi-button type="primary" icon="vi-icon-edit"></vi-button>
<vi-button type="primary" >发送 <i class="vi-icon-email"></i></vi-button>
```
:::

## 加载中

<div class="demo-block">
<vi-button type="primary" loading></vi-button>
</div>


:::demo
```html
<vi-button type="primary" loading></vi-button>
```
:::


## 不同尺寸

<div class="demo-block">
  <vi-button>默认按钮</vi-button>
  <vi-button size="medium">中等按钮</vi-button>
  <vi-button size="small">小型按钮</vi-button>
  <vi-button size="mini">超小按钮</vi-button>
</div>

:::demo
```html
  <vi-button>默认按钮</vi-button>
  <vi-button size="medium">中等按钮</vi-button>
  <vi-button size="small">小型按钮</vi-button>
  <vi-button size="mini">超小按钮</vi-button>
```
:::


## 按钮组

<vi-button-group>
  <vi-button type="primary" icon="vi-icon-edit"></vi-button>
  <vi-button type="primary" icon="vi-icon-qq"></vi-button>
  <vi-button type="primary" icon="vi-icon-wechat"></vi-button>
</vi-button-group>

:::demo
```html
<vi-button-group>
  <vi-button type="primary" icon="vi-icon-edit"></vi-button>
  <vi-button type="primary" icon="vi-icon-qq"></vi-button>
  <vi-button type="primary" icon="vi-icon-wechat"></vi-button>
</vi-button-group>
```
:::