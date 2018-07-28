import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const TITLE = '口袋精灵-'

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = TITLE + to.meta.title
    }
    next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
