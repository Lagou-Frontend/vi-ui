<template>
  <div id="app">
    <main-header></main-header>
    <div class="page-container">
      <side-nav class="side-nav"></side-nav>
      <router-view class="main-content"></router-view>
    </div>
      <!-- <vi-radio v-model="radio" label="男"></vi-radio>
      <vi-radio  v-model="radio" label="女"></vi-radio> -->
    <main-footer></main-footer>
  </div>
</template>

<script>
import mainHeader from './components/mainHeader.vue'
import sideNav from './components/sideNav.vue'
import mainFooter from './components/mainFooter.vue'
import './assets/less/index.less'


export default {
  name: 'App',
  components: {
    mainHeader,
    sideNav,
    mainFooter
  },
  data () {
    return {
      // radio: '男'
    }
  }
}
</script>

<style lang="less">
html,
body {
  font-size: 14px;
}
blockquote {
  margin-left: 0;
  padding-left: 10px;
  border-left: 6px solid red;
}
#app {
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  .page-container {
    // padding-top: 3em;
    // display: flex;
    width: 96%;
    margin: 80px auto 0;
    // box-shadow: 1px 1px 5px #eee, -1px -1px 5px #eee;
  }
  .side-nav {
    position: fixed;
    top: 60px;
    bottom: 0;
    // flex: 2 0 200px;
    width: 200px;
    overflow: scroll;
  }
  .main-content {
    margin-left: 250px;
    // flex: 5 0 400px;
  }
}
</style>
