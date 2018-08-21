<template>
    <div class="all">
        <div class="logo"></div>
        <div class="main-content">
            <div class="head">
                <div class="title"></div>
            </div>
            <div class="context">
                <div class="content-l">
                    <img class="title" src="../../../../public/images/warehouse/icon03.jpg" alt="">
                    <div class="block">
                        <ul>
                            <li>图标</li>
                            <li>物品名称</li>
                            <li>类型</li>
                            <li>数量</li>
                        </ul>
                        <div class="warehouse-item">
                            <prop-item :left="0" :width="274" :sid-mapper="wSidMapper" @active="wActive" :props="warehouses"></prop-item>
                        </div>
                    </div>
                    <div class="btn-group">
                        <div>
                            <span class="space">仓库空间:15/60</span>
                            <span>数量:<input type="number" v-model="num"></span>
                            <kd-button @click="extraction" text="取出"></kd-button>
                            <kd-button @click="store" text="存放"></kd-button>
                        </div>
                    </div>
                </div>
                <div class="content-r">
                    <img class="title" src="../../../../public/images/warehouse/shop04.jpg" alt="">
                    <div class="block">
                        <ul>
                            <li>图标</li>
                            <li>物品名称</li>
                            <li>价格</li>
                            <li>数量</li>
                        </ul>
                        <div class="backpack-item">
                            <prop-item :left="300" :width="274" :sid-mapper="sidMapper" @active="active" :props="backpacks"></prop-item>
                        </div>
                    </div>
                    <div class="btn-group">
                        <div>
                            <span class="space">背包空间:15/60</span>
                            <kd-button text="我要加密仓库"></kd-button>
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
        name: "Warehouse",
        data() {
            return {
                backpacks: null,
                sidMapper: null,
                wSidMapper: null,
                activeItem: null,
                wActiveItem: null,
                warehouses: null,
                num: 1,
            }
        },
        created() {
            this.getBackpacks()
            this.getWarehouses()
        },
        watch: {
            backpacks: function (newValue, oldValue) {
                this.sidMapper = this.setEquipInfo(newValue)
            },
            warehouses: function (newValue, oldValue) {
                this.wSidMapper = this.setEquipInfo(newValue)
            },
            // 想知道为什么加上这一步吗？我tm也不知道，和wActiveItem明明是一样的对象，
            // 结果每次更新后都成为了undefined我有什么办法
            activeItem(newValue, oldValue) {
                if (newValue === undefined) {
                    this.activeItem = oldValue;
                }
            },
        },
        methods: {
            active: function (item) {
                this.activeItem = item
                this.num = item.num
            },
            wActive: function (item) {
                this.wActiveItem = item
                this.num = item.num
            },
            extraction: function () {
                this.axios.put('/backpack/extraction',{
                    pid: this.wActiveItem.pid,
                    num: this.num
                }).then(res => {
                    if (res.data.status === 200) {
                        this.warehouses = res.data.data.warehouse
                        this.backpacks = res.data.data.backpack
                    }
                })
            },
            store: function () {
                this.axios.put('/backpack/store',{
                    pid: this.activeItem.pid,
                    num: this.num
                }).then(res => {
                    if (res.data.status === 200) {
                        this.warehouses = res.data.data.warehouse
                        this.backpacks = res.data.data.backpack
                    }
                })
            },
            getWarehouses: function () {
                this.axios.get('/backpack/warehouseInfoList')
                    .then(res => {
                        if (res.data.status === 200) {
                            this.warehouses = res.data.data
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
            // checkMaxNum: function () {
            //     if (this.num > this.activeItem.num) {
            //         this.num = this.activeItem.num
            //     }
            // },
            setEquipInfo: function (newValue) {
                if (this.activeItem != null) {
                    this.activeItem = newValue.filter(v => {
                        return v.id === this.activeItem.id
                    })[0]
                    // if (this.activeItem != null) {
                    //     this.checkMaxNum()
                    // }
                }
                let sids = newValue.map(v => {
                    if (v.equips[0] !== undefined) {
                        return v.equips[0].suit.id
                    }
                });
                let sidMapper = {}
                sids.forEach(v => {
                    if (v !== undefined) {
                        sidMapper[v] = sidMapper[v] ? sidMapper[v] : {}
                    }
                    newValue.forEach(n => {
                        if (n.equips[0] !== undefined && n.equips[0].suitAttrs[0].sid === v) {
                            sidMapper[v].max = n.equips[0].suitAttrs[n.equips[0].suitAttrs.length - 1].equipNum
                        }
                    })
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
        background: url("../../../../public/images/warehouse/cangku01.jpg");
        width: 138px;
        height: 319px;
    }

    .main-content {
        background: url("../../../../public/images/warehouse/right.jpg");
        width: 650px;
        height: 319px;
    }

    .head {
        .title {
            background: url("../../../../public/images/warehouse/cangku03.jpg");
            width: 90px;
            height: 29px;
        }
    }

    .content-l > .btn-group{
        > div > .space {
            margin-left: 0;
        }
        input {
            width: 40px;
        }
    }
</style>