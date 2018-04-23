import VueRouter from 'vue-router'
import navConfig from '../config/nav.config.json'
// import insetIcons from './helper/insertIcons'

const routes = []

function collectRoute (item) {
  if (item.path) {
    let route = {
      path: item.path,
      name: item.name,
      component: () => import(`../docs/${item.name}.md`)
    }

    // route.activate = function (transition) {
    //   console.log('执行组件' + '的钩子函数:activate')
    //   transition.next()
    // }

    // if (item.name === 'icon') {
    //   // let component = () => import(`../docs/${item.name}.md`)
    //   route.component = () => new Promise((resolve, reject) => {
    //     import(`../docs/${item.name}.md`).then(comp => {
    //       comp.default.updated = insetIcons
    //       console.log(comp)
    //       resolve(comp)
    //     })
    //   })
    // }
    routes.push(route)
  }
}
navConfig.forEach(item => {
  item.children.forEach(child => {
    collectRoute(child)
    if (child.children && child.children.length > 0) {
      child.children.forEach(child => {
        collectRoute(child)
      })
    }
  })
})

export default new VueRouter({
  routes
})
