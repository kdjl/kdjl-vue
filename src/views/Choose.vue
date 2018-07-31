<template>
    <div class="all">
        <div class="content">
            <div class="center">
                <div class="top">
                    <img src="../../public/images/choose/sex_top.jpg">
                </div>
                <div class="user-img clearfix">
                    <div class="fl">
                        <img src="../../public/images/choose/r01.jpg">
                    </div>
                    <div class="users fl">
                        <div class="sex-item clearfix">
                            <div @click="active(1)" :style="activeItem === 1 ? 'backgroundImage: url(images/choose/role_hover.jpg)' : ''" class="sex sex01 fl" data=“0” img="21.gif"></div>
                            <div @click="active(2)" :style="activeItem === 2 ? 'background-position-x: -117px;backgroundImage: url(images/choose/role_hover.jpg)' : ''" class="sex sex02 fl" data=“0” img="23.gif"></div>
                            <div @click="active(3)" :style="activeItem === 3 ? 'background-position-x: -234px;backgroundImage: url(images/choose/role_hover.jpg)' : ''" class="sex sex03 fl" data=“0” img="25.gif"></div>
                            <div @click="active(4)" :style="activeItem === 4 ? 'background-position-x: -351px;backgroundImage: url(images/choose/role_hover.jpg)' : ''" class="sex sex04 fl" data=“1” img="22.gif"></div>
                            <div @click="active(5)" :style="activeItem === 5 ? 'background-position-x: -468px;backgroundImage: url(images/choose/role_hover.jpg)' : ''" class="sex sex05 fl" data=“1” img="24.gif"></div>
                            <div @click="active(6)" :style="activeItem === 6 ? 'background-position-x: -585px;backgroundImage: url(images/choose/role_hover.jpg)' : ''" class="sex sex06 fl" data=“1” img="26.gif"></div>
                        </div>
                    </div>
                    <div class="fl">
                        <img src="../../public/images/choose/r02.jpg">
                    </div>
                </div>
                <div class="bottom clearfix">
                    <div class="fl">
                        <img src="../../public/images/choose/r03.jpg">
                    </div>
                    <div class="fl">
                        <img src="../../public/images/choose/r05.jpg">
                    </div>
                    <div class="fl">
                        <img src="../../public/images/choose/r04.jpg">
                    </div>
                    <form id="register">
                        <div class="form-inline top-10">
                            <label>昵称:</label>
                            <input id="name" type="text" v-model="name">
                        </div>
                        <div class="form-inline">
                            <img @click="ok" id="submit" src="../../public/images/choose/okbtn.jpg">
                        </div>
                    </form>
                </div>
            </div>
            <div v-show="choosePet" id="choose-pet" class="choose-pet">
                <div class="pet-top">
                    <img src="../../public/images/choose/zc06.gif">
                    <div class="pet-bg"></div>
                    <img @click="exit" id="return" src="../../public/images/choose/zc08.gif">
                </div>
                <div class="pet-content clearfix">
                    <img src="../../public/images/choose/zc16.jpg">
                    <img @click="petClick" class="pet-click" src="../../public/images/choose/zc17.jpg">
                    <img src="../../public/images/choose/zc18.jpg">
                    <img @click="petClick" class="pet-click" src="../../public/images/choose/zc19.jpg">
                    <img src="../../public/images/choose/zc20.jpg">
                    <img @click="petClick" class="pet-click" src="../../public/images/choose/zc21.jpg">
                    <img src="../../public/images/choose/zc22.jpg">
                    <img @click="petClick" class="pet-click" src="../../public/images/choose/zc23.jpg">
                    <img src="../../public/images/choose/zc24.jpg">
                    <img @click="petClick" class="pet-click" src="../../public/images/choose/zc25.jpg">
                    <img src="../../public/images/choose/zc26.jpg">
                </div>
                <div class="pet-bottom">
                    <img src="../../public/images/choose/zc09.gif">
                    <div class="pet-bg"></div>
                    <img src="../../public/images/choose/zc10.gif">
                </div>
            </div>
            <div v-show="choosePet" @click="exit" id="mask" class="mask"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Choose",
        data() {
            return {
                name: '',
                activeItem: '',
                choosePet: false,
            }
        },
        methods: {
            active: function (index) {
                this.activeItem = index
            },
            ok: function () {
                this.choosePet = true
            },
            exit: function () {
                this.choosePet = false
            },
            petClick: function () {
                this.$router.push({path: '/main'})
            }
        }
    }
</script>

<style scoped>
    .all {
        background: #c6eaf6 url("../../public/images/choose/sex_bg.gif") repeat-x;
        height: 100vh;
        min-height: 600px;
    }

    .content {
        background: url("../../public/images/choose/sex_bg.jpg") no-repeat center;
        min-width: 100%;
        height: 600px;
        position: relative;
    }

    .sex-item {
        width: 707px;
        background: url("../../public/images/choose/role.jpg") no-repeat;
    }

    .sex-item > .sex {
        width: 117px;
        cursor: pointer;
    }

    .sex-item > * {
        height: 382px;
    }

    .sex-item > *:hover {
        background: url("../../public/images/choose/role_hover.jpg") no-repeat;
    }

    .sex02:hover {
        background-position-x: -117px;
    }

    .sex03:hover {
        background-position-x: -234px;
    }

    .sex04:hover {
        background-position-x: -351px;
    }

    .sex05:hover {
        background-position-x: -468px;
    }

    .sex06:hover {
        background-position-x: -585px;
    }

    .center {
        width: 970px;
        margin: 0 auto;
    }

    .center > * {
        position: relative;
        left: -20px;
    }

    .top {
        height: 145px;
    }

    .user-img > * {
        height: 381px;
    }

    #register {
        position: absolute;
        left: 35%;
    }

    #register label {
        color: #5b9e25;
    }

    #register input {
        border-radius: 5px;
        width: 120px;
        border: 0;
        padding-left: 10px;
        background-color: #edff91;
        color: #368308;
    }

    .top-10 {
        position: relative;
        top: -26px;
    }

    #submit {
        cursor: pointer;
    }

    .choose-pet {
        position: absolute;
        top: 30%;
        left: 30%;
        z-index: 2;
    }

    .choose-pet > * > *{
        float: left;
    }

    .choose-pet > .pet-top > .pet-bg {
        background: url('../../public/images/choose/zc07.gif');
        width: 355px;
        height: 47px;
    }

    .choose-pet > .pet-bottom > .pet-bg {
        background: url('../../public/images/choose/zc27.jpg');
        width: 504px;
        height: 25px;
    }

    .pet-click {
        cursor: pointer;
        box-sizing: border-box;
        width: 92px;
        height: 224px;
    }

    .pet-click:hover {
        border: 1px solid #fff;
        border-radius: 5px;
    }

    .mask {
        top: 0;
        position: absolute;
        width: 100%;
        height: 100vh;
        background-color: #000;
        opacity: .3;
    }

    .form-inline {
        display: inline-block;
    }

    #return {
        cursor: pointer;
    }

    .users {
        width: 706px;
    }
</style>