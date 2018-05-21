# 快速上手

```js
// main.js
import Vue from 'vue';
import VIUI from 'vi-ui';
import 'vi-ui/lib/theme-default/index.css';
import App from './App.vue';
Vue.use(VIUI);

new Vue({
  el: '#app',
  render: h => h(App)
})
```

以上代码便完成了 vi-ui 的引入。需要注意的是，样式文件需要单独引入。