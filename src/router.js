import Vue from 'vue'
import Router from 'vue-router'
import CenterCity from './views/CenterCity'
import TwoCity from './views/TwoCity'

Vue.use(Router)

export default new Router({
  routes: [
      {path: '/', component: CenterCity},
      {path: '/twoCity', component: TwoCity}
  ]
})
