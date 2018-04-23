<template>
  <nav class="side-nav">
    <div v-for="(item, index) in navConfig"
      :key="index">
      <level-h :level="1">{{item.desc}}</level-h>
      <ul>
        <!-- <li v-if="item.children[0].path" v-for="(route, index) in item.children" :key="index">
          <router-link :to="route.path">{{route.desc}}</router-link>
        </li>
        <li v-else v-for="(subs, index) in item.children" :key="index">
          <level-h :level="2">{{item.desc}}</level-h>
          <ul>
            <li v-for="(route, index) in subs" :key="index">
              <router-link :to="route.path">{{route.desc}}</router-link>
            </li>
          </ul>
        </li> -->
        <li v-for="(child, index) in item.children"
          :key="index">
          <router-link v-if="child.path"
            :to="child.path">{{child.desc}}</router-link>
          <template v-else>
            <level-h :level="2">{{child.desc}}</level-h>
            <ul>
              <li v-for="(sub, index) in child.children"
                :key="index">
                <router-link v-if="sub.path"
                  :to="sub.path">{{sub.desc}}</router-link>
              </li>
            </ul>
            </template>
        </li>
      </ul>
    </div>
  </nav>
  </template>
<script>
import navConfig from '../config/nav.config.json'
import levelH from './levelH.vue'
export default {
  data() {
    return {
      navConfig
    }
  },
  components: {
    levelH
  }
}
</script>

<style lang="less">

  .side-nav {
    color: #3f536e;
    ul {
      padding-left: 1em;
    }
    li {
      list-style: none;
      a {
        text-decoration: none;
        color: #3f536e;
        &.router-link-exact-active {
          color: #00b38a;
        }
        &:hover {
          color: #00b38a;
        }
      }
    }
  }
</style>



