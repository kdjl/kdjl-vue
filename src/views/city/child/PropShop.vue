<template>
    <div class="all">
        <div class="logo"></div>
        <div class="main-content">
            <div class="head">
                <div class="title">
                    <div @click="propShopClick" class="prop-shop item">
                        <div v-show="propShop"></div>
                    </div>
                    <div @click="prestigeClick" class="prestige item">
                        <div v-show="prestige"></div>
                    </div>
                </div>
                <div class="gold-text">
                    <img src="../../../../public/images/exchange/icon.jpg" alt="">
                    金币:6000000000
                </div>
            </div>
            <div class="context">
                <div class="content-l">
                    <img class="title" src="../../../../public/images/prop/shop03.jpg" alt="">
                    <div class="block">
                        <ul>
                            <li>图标</li>
                            <li>物品名称</li>
                            <li>价格</li>
                            <li>类型</li>
                        </ul>
                        <prop-item :sid-mapper="sidMapper" :width="270" :left="-19" :props="propShops"></prop-item>
                    </div>
                    <div class="btn-group">
                        <div>
                            数量:<input type="number">
                            <kd-button text="购买"></kd-button>
                            <kd-button text="卖出"></kd-button>
                        </div>
                    </div>
                </div>
                <div class="content-r">
                    <img class="title" src="../../../../public/images/prop/shop04.jpg" alt="">
                    <div class="block">
                        <ul>
                            <li>图标</li>
                            <li>物品名称</li>
                            <li>类型</li>
                            <li>数量</li>
                        </ul>
                        <prop-item :sid-mapper="bsidMapper" :width="270" :left="300" :props="backpacks"></prop-item>
                    </div>
                    <div class="btn-group">
                        <div>
                            背包空间:33/120
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import button from '../../../components/button'
    import propItem from '../../../components/base/propItem'

    export default {
        name: "PropShop",
        data() {
            return {
                backpacks: null,
                propShop: true,
                propShops: null,
                prestige: false,
                sidMapper: null,
                bsidMapper: null,
            }
        },
        watch: {
            propShops: function (newValue, oldValue) {
                this.sidMapper = this.setEquipInfo(newValue)
            },
            backpacks: function (newValue, oldValue) {
                this.bsidMapper = this.setEquipInfo(newValue)
            }
        },
        created: function () {
            this.getPropShops()
            this.getBackpacks()
        },
        methods: {
            propShopClick: function () {
                this.propShop = true
                this.prestige = false
            },
            prestigeClick: function () {
                this.propShop = false
                this.prestige = true
            },
            getPropShops: function () {
                this.axios.get('/shop/getShop?type=5')
                    .then(res => {
                        if (res.data.status === 200) {
                            this.propShops = res.data.data
                        }
                    })
            },
            getBackpacks: function () {
                this.axios.get('/backpack/backpackInfoList')
                    .then(res => {
                        if (res.data.status === 200) {
                            this.backpacks = res.data.data
                        }
                    })
            },
            setEquipInfo: function (newValue) {
                // 获取所有装备的套装id
                let sids = newValue.map(v => {
                    if (v.equips[0] !== undefined) {
                        return v.equips[0].suit.id
                    }
                });
                let sidMapper = {}
                sids.forEach(v => {
                    // 初始化sidMapper中的每一项
                    if (v !== undefined) {
                        sidMapper[v] = sidMapper[v] ? sidMapper[v] : {}
                    }
                    // 遍历获取套装最大值
                    newValue.forEach(n => {
                        if (n.equips[0] !== undefined && n.equips[0].suitAttrs[0].sid === v) {
                            // 后端已完成排序取装备属性的最后一项即为套装最大值
                            sidMapper[v].max = n.equips[0].suitAttrs[n.equips[0].suitAttrs.length - 1].equipNum
                        }
                    })
                    // 设置数量
                    if (v !== undefined) {
                        sidMapper[v].num === undefined ? sidMapper[v].num = 1 : sidMapper[v].num += 1
                    }
                })
                return sidMapper
            }
        },
        components: {
            'kd-button': button,
            'prop-item': propItem,
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../../public/shop";

    .logo {
        background: url("../../../../public/images/prop/left.jpg");
        width: 138px;
        height: 319px;
    }

    .main-content {
        background: url("../../../../public/images/prop/right.jpg");
        width: 650px;
        height: 319px;
    }

    .head {
        .title {
            background: url("../../../../public/images/prop/choosebox.jpg");
            width: 179px;
            height: 29px;
            .prop-shop > div{
                background: url("../../../../public/images/prop/1.png");
            }
            .prestige > div{
                background: url("../../../../public/images/prop/2.png") 1px;
            }
        }
    }

    .head .gold-text {
        margin-left: 60px;
    }
</style>