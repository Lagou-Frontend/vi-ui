<template>
  <header class="header">
    <div class="content">
      <a href=""><img class="logo" src="../assets/vi-ui-logo-42-67.png" alt="logo"></a>
    </div>
  </header>
</template>
<script>
  export default {
    name: 'main-header',
    data () {
      return {}
    }
  }
</script>

<style scoped lang="less">
.header {
  width:100%;
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
  box-shadow: 0 1px 3px #ccc;
  z-index: 100;
}
.content {
  width: 90%;
  margin: 0 auto;
  box-sizing: border-box;
  height: 60px;
  padding: 9px 0;
}

</style>

