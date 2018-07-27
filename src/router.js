import Vue from 'vue'
import Router from 'vue-router'
import CenterCity from './views/city/CenterCity'
import TwoCity from './views/city/TwoCity'
import PetInfo from './views/PetInfo'
import UserInfo from './views/UserInfo'
import Explore from './views/Explore'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', component: CenterCity, meta: {title: '中心城镇'}},
        {path: '/twoCity', component: TwoCity, meta: {title: '副城镇'}},
        {path: '/petInfo', component: PetInfo, meta: {title: '宠物资料'}},
        {path: '/userInfo', component: UserInfo, meta: {title: '个人信息'}},
        {path: '/explore', component: Explore, meta: {title: '野外探险'}},
    ]
})
