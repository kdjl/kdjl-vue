import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
let bl = false

axios.defaults.baseURL = "http://127.0.0.1"
axios.defaults.withCredentials = true
axios.interceptors.request.use(res => {
    bl = false
    return res
})
axios.interceptors.response.use(res => {
    if (res.data.status === 200 || res.data.status === 500) {
        return res
    } else {
        if (!bl) {
            alert(res.data.msg)
            bl = true
        }
        if (res.data.status === 300) {
            router.push("/")
        }
        return
    }
}, error => {
    if (!bl) {
        alert("服务器异常")
        bl = true
    }
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
