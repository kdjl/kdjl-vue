import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = "http://127.0.0.1"
axios.interceptors.response.use(res => {
    if (res.data.status === 200 || res.data.status === 500) {
        return res
    } else {
        alert(res.data.msg)
        return
    }
}, error => {
    alert("服务器异常")
    return
})

const TITLE = '口袋精灵-'
Vue.prototype.axios = axios

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
