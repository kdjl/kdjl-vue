<template>
    <div class="all">
        <div class="logo"></div>
        <div class="main-content">
            <div class="head">
                <div class="title">
                    <div @click="myPetShow" class="my-pet item">
                        <div v-if="myPet"></div>
                    </div>
                    <div @click="trusteeshipShow" class="trusteeship item">
                        <div v-if="trusteeship"></div>
                    </div>
                </div>
            </div>
            <div v-if="myPet" class="context">
                <div class="content-l">
                    <img class="title" src="../../../../public/images/pasture/muchang_09.jpg" alt="">
                    <div class="block">
                        <ul>
                            <li>名称</li>
                            <li>五行</li>
                            <li>等级</li>
                        </ul>
                        <div>
                            <prop-item full-icon="pasture/mc05.gif" @active="active" border="none" :props="pasturePets"></prop-item>
                        </div>
                    </div>
                    <div class="btn-group">
                        <div>
                            牧场宠物数量: 10/30
                            <kd-button @click="switchMainPet" text="主战"></kd-button>
                            <kd-button @click="fosteragePet" text="寄养"></kd-button>
                            <kd-button @click="carryPet" text="携带"></kd-button>
                            <kd-button text="丢弃"></kd-button>
                        </div>
                    </div>
                </div>
                <div class="content-r">
                    <img class="title" src="../../../../public/images/pasture/muchang_11.jpg" alt="">
                    <div class="block">
                        <div v-if="petInfo && activeItem != null" class="showPet">
                            <img height="220" :src="getPetImg(activeItem.pet.img, 'q')" alt="">
                            <div class="pet-info">
                                <div @click="petInfoHidden" class="exit">关闭</div>
                                <div class="pet-name">{{activeItem.pet.name}}</div>
                                <ul>
                                    <li>五行：{{activeItem.pet.fiveEle}}</li>
                                    <li>等级：{{activeItem.grade}}</li>
                                    <li>生命：{{activeItem.hp}}</li>
                                    <li>魔法：{{activeItem.mp}}</li>
                                    <li>攻击：{{activeItem.attack}}</li>
                                    <li>防御：{{activeItem.defense}}</li>
                                    <li>命中：{{activeItem.hit}}</li>
                                    <li>闪避：{{activeItem.dodge}}</li>
                                    <li>成长：{{activeItem.growth}}</li>
                                </ul>
                            </div>
                        </div>
                        <div v-if="!petInfo && userPets != null">
                            <div class="arrow-list">
                                <span v-for="n in userPets" :class="{click: n.id === index}" class="arrow"></span>
                            </div>
                            <div class="pet-list">
                                <img :style="v.main ? '' : 'opacity: 0.7'" @click="arrowShow(v.id)" v-for="v in userPets" :title="'等级:' + v.grade + '成长:'+ v.growth" :src="getPetImg(v.pet.img, 'k')">
                            </div>
                            <div class="explain">
                                <div class="explain-title">说明:</div>
                                <div class="explain-item">1）设置主战宠物后，该宠物可获得装备道具、以及 获得任务经验、道具使用效果等。</div>
                                <div class="explain-item">2）主战宠物无法寄养，请设置其他宠物后再寄养 。</div>
                            </div>
                        </div>
                    </div>
                    <div class="btn-group">
                        <div>
                            <kd-button text="我要加密牧场"></kd-button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="trusteeship" class="context-two">
                <div class="trusteeship-info">
                    <p>
                        托管开启时间为：全天，托管后会扣除玩家托管时间在托管期间勿取回宠物，否则需要再消耗托管时间进行托管(只有放置在牧场且等级到达1级以上的宠物才可以托管)。 新手修炼成长必须大于1成长， 冒险修炼成长必须大于60成长。
                    </p>
                    <div>经验：获得大量的经验，一个经验修炼券可以托管一小时。</div>
                    <div>新手修炼：获得少量成长，一个成长修炼券+550水晶可以托管一小时。</div>
                    <div>冒险修炼：获得中量成长，两个成长修炼券+1400水晶可以托管一小时。</div>
                    <div id="trusteeship">
                        <label>托管宠物:</label>
                        <select name="pet" id="pet">
                            <option value="test">可托管宠物</option>
                            <option value="test">小玄武</option>
                            <option value="test">小玄武</option>
                            <option value="test">小玄武</option>
                            <option value="test">小玄武</option>
                            <option value="test">小玄武</option>
                            <option value="test">小玄武</option>
                            <option value="test">小玄武</option>
                            <option value="test">小玄武</option>
                            <option value="test">小玄武</option>
                            <option value="test">小玄武</option>
                        </select>
                        <label>托管时间:</label>
                        <select name="time" id="time">
                            <option value="test">1小时</option>
                            <option value="test">2小时</option>
                            <option value="test">3小时</option>
                            <option value="test">4小时</option>
                            <option value="test">5小时</option>
                        </select>
                        <label>托管内容:</label>
                        <select name="content" id="content">
                            <option value="test">经验</option>
                            <option value="test">新手修炼</option>
                            <option value="test">冒险修炼</option>
                        </select>
                        <label>已托管宠物:</label>
                        <select name="alr-pet" id="alr-pet">
                            <option value="test">可托管宠物</option>
                            <option value="test">小玄武</option>
                            <option value="test">小玄武</option>
                            <option value="test">小玄武</option>
                            <option value="test">小玄武</option>
                        </select>
                    </div>
                </div>
                <div class="btn-group">
                    <kd-button text="托管"></kd-button>
                    <kd-button text="取回"></kd-button>
                    <kd-button text="详情"></kd-button>
                    <kd-button text="加速"></kd-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import button from '../../../components/button'
    import propItem from '../../../components/base/propItem'
    export default {
        name: "Pasture",
        data() {
            return {
                myPet: true,
                activeItem: null,
                index: 1,
                petInfo: false,
                trusteeship: false,
                userPets: null,
                pasturePets: null,
                pastureProp: [{
                    name: '小玄武',
                    fiveLine: '水',
                    rank: '100'
                }]
            }
        },
        created: function () {
            this.getUserPets()
            this.getPasturePets()
        },
        methods: {
            getPetImg: function (v, prefix) {
                return require('../../../../public/images/PetPhoto/' + prefix + v + ".gif")
            },
            myPetShow: function () {
                this.myPet = true
                this.trusteeship = false
            },
            trusteeshipShow: function () {
                this.myPet = false
                this.trusteeship = true
            },
            active: function (item) {
                this.activeItem = item
                this.petInfo = true
            },
            petInfoHidden: function () {
                this.petInfo = false
            },
            arrowShow: function (index) {
                this.index = index
            },
            getUserPets: function () {
                this.axios.get('/userPet/userPets')
                    .then(res => {
                        if (res.data.status === 200) {
                            this.userPets = res.data.data
                            let that = this
                            this.userPets.forEach(v => {
                                if (v.main) {
                                    that.index = v.id
                                }
                            })
                        }
                    })
            },
            getPasturePets: function () {
                this.axios.get('/userPet/pasturePets')
                    .then(res => {
                        if (res.data.status === 200) {
                            this.pasturePets = res.data.data
                        }
                    })
            },
            fosteragePet: function () {
                this.axios.put('/userPet/fosteragePet?pid=' + this.index)
                    .then(res => {
                        if (res.data.status === 200) {
                            this.pasturePets = res.data.data.pasturePet
                            this.userPets = res.data.data.userPet
                        } else {
                            alert(res.data.msg)
                        }
                    })
            },
            carryPet: function () {
                this.axios.put('/userPet/carryPet?pid=' + this.activeItem.id)
                    .then(res => {
                        if (res.data.status === 200) {
                            this.pasturePets = res.data.data.pasturePet
                            this.userPets = res.data.data.userPet
                            this.petInfo = false
                        }
                    })
            },
            switchMainPet: function () {
                this.axios.get('/userPet/switchMainPet?id=' + this.index)
                    .then(res => {
                        if (res.data.status === 200) {
                            this.getUserPets()
                        }
                    })
            }
        },
        components: {
            'kd-button': button,
            'prop-item': propItem,
        },
    }
</script>

<style scoped lang="scss">
    @import "../../../../public/shop";
    .logo {
        background: url("../../../../public/images/pasture/muchang_03.jpg");
        width: 138px;
        height: 319px;
    }
    .main-content {
        background: url("../../../../public/images/pasture/right.jpg");
        width: 650px;
        height: 319px;
    }
    .head {
        .title {
            background: url("../../../../public/images/pasture/mcchoose.jpg");
            width: 179px;
            height: 29px;
            .my-pet > div{
                background: url("../../../../public/images/pasture/mcchoosed1.jpg") 0 29px;
            }
            .trusteeship > div{
                width: 90px;
                background: url("../../../../public/images/pasture/mcchoosed2.jpg") -88px 29px;
            }
        }
    }
    .context {
        .btn-group {
            > div > * {
                margin-left: 5px;
            }
            button {
                padding: 0 6px;
            }
        }
    }

    .content-r {
        > .block {
            background: url("../../../../public/images/pasture/muchang_16.jpg") no-repeat;
            .showPet {
                background: url("../../../../public/images/pasture/petbg.gif") no-repeat;
                height: 220px;
                background-size: cover;
                > img {
                    float: left;
                }
                > .pet-info {
                    float: left;
                    width: 125px;
                    height: 220px;
                    position: relative;
                    .exit {
                        position: absolute;
                        right: 3px;
                        top: 5px;
                        color: red;
                        cursor: pointer;
                    }
                    .pet-name {
                        color: #fff;
                        text-align: center;
                        margin-top: 16px;
                    }
                    ul {
                        margin-top: 10px;
                        margin-left: 10px;
                        color: #B06A01;
                        line-height: 1.6;
                    }
                }
            }
            .explain {
                color: #bb8221;
                line-height: 1.5;
                > .explain-title {
                    font-weight: bold;
                }
            }
            .pet-list {
                margin-left: 15px;
                > img {
                    margin: 0 5px;
                    cursor: pointer;
                }
            }
            .arrow-list {
                margin-left: 15px;
                width: 90%;
                > .arrow {
                    margin: 0 5px;
                    display: inline-block;
                    width: 67px;
                    height: 56px;
                }
                > .click {
                    background: url("../../../../public/images/pasture/zz.gif") no-repeat center;
                }
            }
        }
    }

    .trusteeship-info {
        width: 620px;
        background-color: #fff;
        border: 1px solid #c48635;
        border-radius: 5px;
        height: 230px;
        margin-top: 20px;
        margin-left: 10px;
        > * {
            padding: 0 10px;
            line-height: 20px;
            font-weight: bold;
        }
        > div {
            color: #bb8221;
        }
        #trusteeship {
            margin-top: 20px;
            color: black;
            > * {
                margin: 0 4px;
            }
        }
    }
    .context-two {
        .btn-group {
            float: right;
            margin-right: 20px;
            margin-top: 7px;
            > * {
                margin: 0 5px;
            }
        }
    }
</style>