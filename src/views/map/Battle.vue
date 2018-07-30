<template>
    <div class="all">
        <div class="flex">
            <div class="battle-left">
                <div class="user-logo">
                    <div class="top-img">
                        <div class="name">永恒之恋</div>
                    </div>
                    <div class="pet-center clearfix">
                        <div class="pet-img fl">
                            <div class="pet-logo"></div>
                        </div>
                        <div class="bar">
                            <div class="text">
                                <div class="hp-t">80000/100000</div>
                                <div class="mp-t">60000/100000</div>
                                <div class="exp-t">40000/100000</div>
                            </div>
                            <div class="o">
                                <div class="hp-o"></div>
                                <div class="mp-o"></div>
                                <div class="exp-o"></div>
                            </div>
                            <div class="c">
                                <div class="hp"></div>
                                <div class="mp"></div>
                                <div class="exp"></div>
                            </div>
                        </div>
                    </div>
                    <div class="bottom-img">
                        <div class="pet-all">
                            <div class="pet-name">青影龙</div>
                            <div class="pet-grade">100级</div>
                        </div>
                    </div>
                </div>
                <div id="pet-bg-img" :class="attack === 'me' ? 'attack' : 'pet-bg-img'">
                    <img :src="getMe()">
                </div>
            </div>
            <div id="time" class="time">
                {{time}}
            </div>
            <div class="battle-right">
                <div class="user-logo">
                    <div class="top-img">
                        <div class="name">妖精森林</div>
                    </div>
                    <div class="pet-center clearfix">
                        <div class="pet-img fl">
                            <div class="pet-logo"></div>
                        </div>
                        <div class="bar">
                            <div class="text">
                                <div class="hp-t">{{hp}}/100000</div>
                                <div class="mp-t">100000/100000</div>
                                <div class="exp-t">100000/100000</div>
                            </div>
                            <div class="o">
                                <div class="hp-o"></div>
                                <div class="mp-o"></div>
                                <div class="exp-o"></div>
                            </div>
                            <div class="c">
                                <div :style="{width: hp / maxHp * 100 + '%'}" class="hp"></div>
                                <div class="mp"></div>
                                <div class="exp"></div>
                            </div>
                        </div>
                    </div>
                    <div class="bottom-img">
                        <div class="pet-all">
                            <div class="pet-name">圣破天</div>
                            <div class="pet-grade">100级</div>
                        </div>
                    </div>
                </div>
                <div id="e-pet-bg-img" :class="attack === 'other' ? 'attack' : 'e-pet-bg-img'">
                    <img :src="getOther()">
                </div>
            </div>
        </div>
        <div v-show="attack === ''" class="panel">
            <img src="../../../public/../public/images/explore/zdzsk.gif">
            <div class="battle-btn-group">
                <div class="btn" title="自动战斗"></div>
                <div class="btn" title="攻击设置"></div>
                <div @click="manualAttack" class="btn" title="攻击"></div>
                <div class="btn" title="技能"></div>
                <div class="btn" title="辅助"></div>
                <div class="btn" title="捕捉"></div>
                <div class="btn" title="道具"></div>
                <div @click="escape" class="btn" title="逃跑"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Battle",
        created() {
            this.battle()
        },
        data() {
            return {
                time: 10,
                attack: '',
                base: '../../../public/../public/images/pethome/z166.gif',
                hp: 80000,
                maxHp: 100000,
            }
        },
        methods: {
            getMe: function () {
                return this.attack === 'me' ? require('../../../public/../public/images/pethome/g166.gif') : require('../../../public/../public/images/pethome/z166.gif')
            },
            getOther: function () {
                return this.attack === 'other' ? require('../../../public/../public/images/pethome/g198.gif') : require('../../../public/../public/images/pethome/z198.gif')
            },
            escape: function () {
                this.$router.go(-1)
            },
            battle: function () {
                let that = this
                let id = setInterval(() => {
                    if (typeof that.time === "number") {
                        that.time--
                    }
                    if (that.time <= 0) {
                        that.attackAnimation()
                    }
                }, 1000)
            },
            manualAttack: function () {
                if (this.time !== 'PK') {
                    this.attackAnimation()
                }
            },
            attackAnimation: function () {
                let that = this
                that.time = 'PK'
                that.attack = 'me'
                setTimeout(() => {
                    that.attack = 'none'
                }, 3000)
                setTimeout(() => {
                    that.attack = 'other'
                }, 4000)
                setTimeout(() => {
                    that.attack = ''
                    that.time = 10
                }, 7000)
            }
        }
    }
</script>

<style scoped lang="scss">
    .battle-btn-group {
        height: 54px;
        width: 336px;
        top: 3px;
        left: 217px;
        position: absolute;
        > .btn {
            height: 54px;
            width: 42px;
            float: left;
            cursor: pointer;
        }
    }
    
    .all {
        background: url('../../../public/images/maps/1.jpg');
        width: 788px;
        height: 311px;
    }

    .flex {
        display: flex;
        justify-content: space-between;
    }

    .all > .flex > * {
        width: 240px;
    }

    .all > .flex > .battle-right {
        transform: rotateY(180deg);
    }

    .user-logo > .top-img {
        background: url('../../../public/images/explore/zd01.gif');
        width: 147px;
        height: 19px;
    }

    .user-logo > .top-img > .name {
        margin-left: 30px;
        text-align: center;
    }

    .user-logo > .pet-center {
        position: relative;
    }

    .user-logo > .pet-center > .pet-img {
        background: url('../../../public/images/explore/zd02.gif');
        width: 90px;
        height: 47px;
        position: relative;
        z-index: 10;
    }

    .user-logo > .pet-center > .pet-img > .pet-logo {
        position: absolute;
        background: url('../../../public/images/pethome/t166.gif') no-repeat;
        background-size: contain;
        width: 36px;
        height: 36px;
        top: 2px;
        left: 22px;
    }

    .bar {
        position: absolute;
        z-index: 1;
        left: 70px;
    }

    .bar > * {
        width: 165px;
        position: absolute;
        z-index: 4;
    }

    .bar > .o {
        z-index: 3;
    }

    .bar > .text {
        z-index: 5;
        text-align: center;
        line-height: 16px;
    }

    .bar > .o > * {
        background-color: #fff;
        opacity: .2;
    }

    .bar > * > div {
        width: 165px;
        height: 16px;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
    }

    .bar .hp {
        background: url('../../../public/images/explore/xthong01.gif');
        width: 80%;
    }

    .bar .mp {
        background: url('../../../public/images/explore/xtlan01.gif');
        width: 60%;
    }

    .bar .exp {
        background: url('../../../public/images/explore/xthuang01.gif');
        width: 40%;
    }

    .user-logo > .bottom-img {
        background: url('../../../public/images/explore/zd03.gif');
        width: 99px;
        height: 48px;
        position: relative;
    }

    .user-logo > .bottom-img > .pet-all {
        position: absolute;
        top: 16px;
        left: 28px;
    }

    .user-logo > .bottom-img > .pet-all > .pet-name {
        color: #00aaff;
    }

    .user-logo > .bottom-img > .pet-all > .pet-grade {
        color: #91c42f;
    }

    .battle-right .user-logo > .top-img > .name,
    .battle-right .bar > .text,
    .battle-right .user-logo > .bottom-img > .pet-all {
        transform: rotateY(180deg);
    }

    .battle-right .user-logo > .pet-center > .pet-img > .pet-logo {
        background: url('../../../public/images/pethome/t198.gif');
        background-size: contain;
        transform: rotateY(180deg);
    }

    .battle-right .bar .hp {
        width: 100%;
    }

    .battle-right .bar .mp {
        width: 100%;
    }

    .battle-right .bar .exp {
        width: 100%;
    }

    .flex > .time {
        background: url('../../../public/images/explore/db.gif') no-repeat;
        width: 81px;
        height: 79px;
        font-size: 22px;
        text-align: center;
        line-height: 81px;
        color: #6A2F06;
        font-weight: bold;
    }

    .panel {
        position: relative;
        bottom: 67px;
    }

    .attack {
        position: absolute;
        left: 400px;
    }
</style>