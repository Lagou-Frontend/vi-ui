<style>
#allIcons {
  /* display: flex;
  flex-wrap: wrap; */
  overflow: hidden;
}
#allIcons .icon-item {
  /* flex: 1 0 150px; */
  float: left;
  padding: 20px;
}
#allIcons i,  .icon-page i{
  display: inline-block;
  padding: 20px;
  font-size: 40px;
}
</style>

# Icon 图标

## 使用方法

设置类名为 vi-icon-iconName 即可
<div class="icon-page demo-block">
  <p>
    <i class="vi-icon-edit"></i>
    <i class="vi-icon-female"></i>
    <i class="vi-icon-spinner"></i>
    <i class="vi-icon-spinner2"></i>
  </p>
</div >

::: demo
```html
<div class="demo-block">
  <p>
    <i class="vi-icon-edit"></i>
    <i class="vi-icon-female"></i>
    <i class="vi-icon-spinner"></i>
    <i class="vi-icon-spinner2"></i>
  </p>
</div >

```
:::

## 图标集合
<!-- 动态插入所有icon -->
<div id="allIcons"></div> 
<script type="text/javascript">
var iconsInfo = window.iconsInfo;
var prefix = iconsInfo.preferences.fontPref.prefix;
function createIconItem(icon) {
  var className = prefix + icon.properties.name;
  var wrapper = document.createElement('div');
  wrapper.className = 'icon-item'
  var iEle = document.createElement('i');
  iEle.className = className;
  var pEle = document.createElement('p');
  pEle.textContent = className
  wrapper.appendChild(iEle)
  wrapper.appendChild(pEle)
  return wrapper;
}
var timer = setInterval(function() { // 暂时先这么干，以后实现直接生成本文件（或者nodejs直接把内容插入到这里）
  var parent = document.getElementById('allIcons');
  if(parent && parent.children.length <= 0) {
    iconsInfo.icons.forEach(function(icon) {
      parent.append(createIconItem(icon))
    })
  }
}, 1000)
</script>