<template>
    <div class="all">
        <div class="user-left">
            <div class="top">
                <div class="user-info">
                    <div class="username">永恒之恋</div>
                    <div>
                        宝贝:
                        <span class="petname">火波姆</span>
                    </div>
                    <div>
                        宝贝数量:
                        <span class="num">130</span>
                    </div>
                    <div>
                        vip:
                        <span class="vip">0</span>
                    </div>
                    <div>
                        性别:
                        <span class="sex">帅哥</span>
                    </div>
                    <div>
                        金币:
                        <span class="price">9999999999</span>
                    </div>
                    <div>
                        胜率:
                        <span class="win">100%</span>
                    </div>
                    <div>
                        元宝:
                        <span class="ingot">10000</span>
                    </div>
                    <div>
                        水晶:
                        <span>10000</span>
                    </div>
                </div>
                <div class="user-img"></div>
            </div>
            <div class="bottom">
                <div class="pet-img-list">
                    <img src="../../public/images/PetPhoto/k176.gif" alt="">
                    <img src="../../public/images/pets/nopet.jpg" alt="">
                    <img src="../../public/images/pets/nopet.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="pet-right">
            <div class="title">
                <div @click="petShow" id="pet-btn">
                    <img v-show="pet" src="../../public/images/pets/choosed_1.jpg" alt="">
                </div>
                <div @click="attrShow" id="attr-btn">
                    <img v-show="attr" src="../../public/images/pets/choosed_2.jpg" alt="">
                </div>
                <div @click="skillShow" id="skill-btn" class="skill-click">
                    <img v-show="skill" src="../../public/images/pets/choosed_3.jpg" alt="">
                </div>
            </div>
            <div v-show="pet" class="pet">
                <div class="pet-content">
                    <div class="item">
                        <div>身体</div>
                        <div class="crown"></div>
                        <div>头部</div>
                        <div class="crown"></div>
                        <div>项链</div>
                    </div>
                    <div class="item">
                        <div>武器</div>
                        <div>手镯</div>
                    </div>
                    <div class="item">
                        <div>脚部</div>
                        <div>戒指</div>
                    </div>
                    <div class="item">
                        <div>翅膀</div>
                        <div>宝石</div>
                        <div>道具</div>
                    </div>
                </div>
                <img id="line" src="../../public/images/pets/line.jpg" alt="">
                <div class="pet-info">
                    <div>等级：
                        <span class="rank">100</span>
                    </div>
                    <div>五行：
                        <span class="five">神</span>
                    </div>
                    <div>生命：
                        <span class="hp">26760</span>
                    </div>
                    <div>魔法：
                        <span class="mp">5320</span>
                    </div>
                    <div>攻击：
                        <span class="attack">7040</span>
                    </div>
                    <div>防御：
                        <span class="defense">4280</span>
                    </div>
                    <div>命中：
                        <span class="hit">8040</span>
                    </div>
                    <div>闪避：
                        <span class="dodge">4280</span>
                    </div>
                    <div>速度：
                        <span class="speed">11300</span>
                    </div>
                    <div>成长：
                        <span class="grown">10</span>
                    </div>
                </div>
                <div class="pet-img">
                    <img src="../../public/images/PetPhoto/z176.gif" alt="">
                </div>
            </div>
            <div v-show="attr" class="attr">
                <div class="attr-left">
                    <div class="img"></div>
                    <img src="../../public/images/pets/z166.gif" alt="" class="pet">
                    <div class="prop-list clearfix">
                        <div>等级：
                            <span class="rank">100</span>
                        </div>
                        <div>五行：
                            <span class="five">神</span>
                        </div>
                        <div>生命：
                            <span class="hp">26760</span>
                        </div>
                        <div>魔法：
                            <span class="mp">5320</span>
                        </div>
                        <div>攻击：
                            <span class="attack">7040</span>
                        </div>
                        <div>防御：
                            <span class="defense">4280</span>
                        </div>
                        <div>命中：
                            <span class="hit">8040</span>
                        </div>
                        <div>闪避：
                            <span class="dodge">4280</span>
                        </div>
                        <div>速度：
                            <span class="speed">11300</span>
                        </div>
                        <div>成长：
                            <span class="grown">10</span>
                        </div>
                        <div>
                            当前经验：
                            <span class="curr-exp">10000</span>
                        </div>
                        <div>
                            升级经验：
                            <span class="exp">99999999</span>
                        </div>
                    </div>
                </div>
                <div class="line"></div>
                <div class="other-list">
                    <div>金抗：
                        <span class="metal">0</span>
                    </div>
                    <div>木抗：
                        <span class="wood">0</span>
                    </div>
                    <div>水抗：
                        <span class="water">0</span>
                    </div>
                    <div>火抗：
                        <span class="fire">0</span>
                    </div>
                    <div>土抗：
                        <span class="earth">0</span>
                    </div>
                    <div>减晕率：
                        <span class="yun">0%</span>
                    </div>
                    <div>减睡率：
                        <span class="shui">0%</span>
                    </div>
                    <div>减毒率：
                        <span class="du">0%</span>
                    </div>
                    <div>减虚率：
                        <span class="xu">0%</span>
                    </div>
                    <div>减缓率：
                        <span class="huan">0%</span>
                    </div>
                    <div>减防率：
                        <span class="fang">0%</span>
                    </div>
                    <div>减抗率：
                        <span class="kang">0%</span>
                    </div>
                    <div>
                        进化次数：
                        <span class="evolution-num">0</span>
                    </div>
                </div>
            </div>
            <div v-show="skill" class="skill">
                <div class="skill-l">
                    <img src="../../public/images/PetPhoto/z176.gif" alt="">
                </div>
                <img src="../../public/images/pets/line.jpg" alt="">
                <div class="skill-list">
                    <div class="skill-item">
                        <span class="type red">[攻击]</span>
                        <span class="name">大闹天宫[1]</span>
                        <span class="add">升级</span>
                    </div>
                    <div class="skill-item">
                        <span class="type green">[增益]</span>
                        <span class="name">翻云覆雨[10]</span>
                        <span class="add">升级</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PetInfo",
        data() {
            return {
                pet: true,
                attr: false,
                skill: false,
            }
        },
        methods: {
            petShow: function () {
                this.attr = false
                this.skill = false
                this.pet = true
            },
            attrShow: function () {
                this.attr = true
                this.skill = false
                this.pet = false
            },
            skillShow: function () {
                this.attr = false
                this.skill = true
                this.pet = false
            }
        }
    }
</script>

<style scoped lang="scss">
    .all {
        display: flex;
    }

    .user-left {
        background: url("../../public/images/pets/left.jpg");
        width: 291px;
        height: 319px;
        .top {
            display: flex;
            .user-info {
                margin-left: 20px;
                margin-top: 10px;
                line-height: 1.7;
            }
            .user-img {
                background: url("../../public/images/pets/person_5.gif");
                width: 120px;
                height: 177px;
                margin-top: 10px;
                margin-left: 20px;
            }
        }
        .pet-img-list {
            margin-top: 35px;
            margin-left: 16px;
            > * {
                margin: 0 8px;
            }
        }
    }

    .pet-right {
        background: url("../../public/images/pets/right.jpg");
        width: 497px;
        height: 319px;
        .title {
            background: url("../../public/images/pets/choosebox.png");
            width: 263px;
            height: 27px;
            margin-left: 28px;
            margin-top: 2px;
            display: flex;
            > * {
                cursor: pointer;
                height: 27px;
                width: 87px;
            }
            #skill-btn > img{
                width: 89px;
            }
        }
        >.pet.hidden {
           display: none;
        }
        .pet {
            display: flex;
            position: relative;
            .pet-content {
                background: url("../../public/images/pets/equip.jpg");
                width: 324px;
                height: 238px;
                margin-left: 28px;
                margin-top: 20px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .item {
                    width: 100%;
                    height: 46px;
                    display: flex;
                    justify-content: space-between;
                    > * {
                        width: 46px;
                        height: 46px;
                        text-align: center;
                        line-height: 46px;
                        cursor: pointer;
                    }
                    .crown {
                        background: url("../../public/images/pets/zbsx.gif") no-repeat;
                    }
                }
            }
            .pet-img {
                position: absolute;
                top: 54px;
                left: 82px;
                > img {
                    height: 150px;
                }
            }
            #line {
                margin-top: 10px;
                margin-left: 20px;
            }
            .pet-info {
                margin-top: 10px;
                margin-left: 10px;
                line-height: 25px;
            }
        }
        .attr {
            display: flex;
            position: relative;
            .attr-left {
                width: 380px;
                > .img {
                    margin-top: 20px;
                    margin-left: 120px;
                    background: url(../../public/images/pets/hexagram.jpg);
                    width: 174px;
                    height: 192px;
                }
                > .pet {
                    height: 190px;
                    position: absolute;
                    top: 5px;
                    left: 82px;
                }
                > .prop-list {
                    margin-left: 40px;
                    > * {
                        float: left;
                        width: 110px;
                        line-height: 15px;
                    }
                }
            }
            .line {
                background: url(../../public/images/pets/line.jpg);
                width: 1px;
                height: 265px;
                margin-top: 10px;
                margin-left: 0;
            }
            .other-list {
                margin-left: 10px;
                margin-top: 20px;
                line-height: 20px;
            }
        }
        .skill {
            position: relative;
            display: flex;
            .skill-l {
                background: url("../../public/images/pets/hexagram.jpg");
                width: 174px;
                height: 192px;
                margin-top: 34px;
                margin-left: 95px;
                > img {
                    margin-left: -40px;
                }
            }
            > img {
                margin-left: 66px;
                margin-top: 7px;
            }
            .skill-list {
                margin-top: 20px;
                margin-left: 10px;
                line-height: 20px;
                > .skill-item {
                    width: 140px;
                    display: flex;
                    justify-content: space-between;
                }
            }
            .type {
                font-weight: bold;
            }
            .add {
                cursor: pointer;
                color: blue;
            }
            .red {
                color: red;
            }
            .green {
                color: green;
            }
        }
    }
</style>