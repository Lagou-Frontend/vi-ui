# Tabs 标签

tab切换内容区内容

## 基础用法
<div class="demo-block">
<vi-tabs v-model="tabsPage.activeName" @tab-click="tabsHandleClick1">
  <vi-tab-pane label="用户管理" name="first">用户管理</vi-tab-pane>
  <vi-tab-pane label="配置管理" name="second">配置管理</vi-tab-pane>
  <vi-tab-pane label="角色管理" name="third">角色管理</vi-tab-pane>
  <vi-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</vi-tab-pane>
</vi-tabs>
</div>

::: demo
```html
<vi-tabs v-model="tabsPage.activeName" @tab-click="tabsHandleClick1">
  <vi-tab-pane label="用户管理" name="first">用户管理</vi-tab-pane>
  <vi-tab-pane label="配置管理" name="second">配置管理</vi-tab-pane>
  <vi-tab-pane label="角色管理" name="third">角色管理</vi-tab-pane>
  <vi-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</vi-tab-pane>
</vi-tabs>
```
:::

## 位置

<div class="demo-block">
<vi-radio-group v-model="tabsPage.tabPosition" style="margin-bottom: 30px;">
    <vi-radio label="top">top</vi-radio>
    <vi-radio label="right">right</vi-radio>
    <vi-radio label="bottom">bottom</vi-radio>
    <vi-radio label="left">left</vi-radio>
</vi-radio-group>

<vi-tabs v-model="tabsPage.activeName2" @tab-click="tabsHandleClick1" :tab-position="tabsPage.tabPosition">
  <vi-tab-pane label="用户管理" name="first">用户管理</vi-tab-pane>
  <vi-tab-pane label="配置管理" name="second">配置管理</vi-tab-pane>
  <vi-tab-pane label="角色管理" name="third">角色管理</vi-tab-pane>
  <vi-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</vi-tab-pane>
</vi-tabs>
</div>

::: demo
```html
<div class="demo-block">
<vi-radio-group v-model="tabsPage.tabPosition" style="margin-bottom: 30px;">
    <vi-radio label="top">top</vi-radio>
    <vi-radio label="right">right</vi-radio>
    <vi-radio label="bottom">bottom</vi-radio>
    <vi-radio label="left">left</vi-radio>
</vi-radio-group>

<vi-tabs v-model="tabsPage.activeName2" @tab-click="tabsHandleClick1" :tab-position="tabsPage.tabPosition">
  <vi-tab-pane label="用户管理" name="first">用户管理</vi-tab-pane>
  <vi-tab-pane label="配置管理" name="second">配置管理</vi-tab-pane>
  <vi-tab-pane label="角色管理" name="third">角色管理</vi-tab-pane>
  <vi-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</vi-tab-pane>
</vi-tabs>
</div>
```
:::

## Tabs Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
value | 绑定值，选中选项卡的 name | string | --- | 第一个选项卡的 name
tab-position | 选项卡所在位置 | string | top/right/bottom/left | top


## ToDo
* 优化nav-bar active动效
