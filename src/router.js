import Vue from 'vue'
import Router from 'vue-router'
import CenterCity from './views/city/CenterCity'
import TwoCity from './views/city/TwoCity'
import PetInfo from './views/PetInfo'
import UserInfo from './views/UserInfo'
import Explore from './views/Explore'
import Exchange from './views/city/child/Exchange'
import Pasture from './views/city/child/Pasture'
import MysteryShop from './views/city/child/MysteryShop'
import Warehouse from './views/city/child/Warehouse'
import PropShop from './views/city/child/PropShop'
import MapInfo from './views/map/MapInfo'
import Battle from './views/map/Battle'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', component: CenterCity, meta: {title: '中心城镇'}},
        {path: '/twoCity', component: TwoCity, meta: {title: '副城镇'}},
        {path: '/petInfo', component: PetInfo, meta: {title: '宠物资料'}},
        {path: '/userInfo', component: UserInfo, meta: {title: '个人信息'}},
        {path: '/explore', component: Explore, meta: {title: '野外探险'}},
        {path: '/exchange', component: Exchange, meta: {title: '交易所'}},
        {path: '/pasture', component: Pasture, meta: {title: '牧场'}},
        {path: '/mysteryShop', component: MysteryShop, meta: {title: '神秘商店'}},
        {path: '/warehouse', component: Warehouse, meta: {title: '仓库'}},
        {path: '/propShop', component: PropShop, meta: {title: '道具商店'}},
        {path: '/mapInfo/:mapId', component: MapInfo, meta: {title: '地图详情'}},
        {path: '/battle', component: Battle, meta: {title: '战斗画面'}},
    ]
})
