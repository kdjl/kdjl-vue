<template>
    <div class="main">
        <div>
            <div class="top">
                <div class="left">
                    <div class="items">
                        <div class="item">
                            <img src="../public/images/index/12.png" alt="野外探险">
                        </div>
                        <div class="item">
                            <img src="../public/images/index/9.png" alt="中心城镇">
                        </div>
                        <div class="item">
                            <img src="../public/images/index/3.png" alt="宠物资料">
                        </div>
                        <div class="item">
                            <img src="../public/images/index/6.png" alt="个人信息">
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="content">
                        <router-view></router-view>
                    </div>
                    <div class="icons">
                        <div @click="backpackToggle" title="背包"></div>
                        <div title="消息"></div>
                        <div @click="taskToggle" title="任务"></div>
                        <div title="收藏"></div>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="left">
                    <div class="input-group">
                        <input type="text" placeholder="请输入你想说的话">
                        <img src="../public/images/index/s1.gif" alt="">
                        <img src="../public/images/index/s2.gif" alt="">
                        <img src="../public/images/index/s3.gif" alt="">
                        <img src="../public/images/index/3.gif" alt="">
                        <img src="../public/images/index/friends.gif" alt="好友">
                        <img src="../public/images/index/btn.gif" alt="发送">
                    </div>
                    <console :content="consoleContext" v-show="consoleShow"></console>
                </div>
                <div class="right">
                    <div class="search">
                        <div class="logo"></div>
                        <input type="text" placeholder="请输入要搜索的道具">
                        <img src="../public/images/index/so_btn.gif" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="bg"></div>
        <backpack @console="consoleToggle" @backpack-exit="backpackToggle" :backpacks="backpacks" v-show="backpackShow"></backpack>
        <task @task-exit="taskToggle" v-show="taskShow"></task>
    </div>
</template>

<script>
    import backpack from './components/backpack'
    import console from './components/console'
    import task from './components/task'
    export default {
        name: 'app',
        data() {
            return {
                backpackShow: false,
                taskShow: false,
                consoleShow: false,
                consoleContext: '',
                backpacks: {
                    icon: '../../public/images/backpack/1.gif',
                    name: '治疗药水',
                    type: '增益类',
                    number: '100'
                }
            }
        },
        computed: {

        },
        methods: {
            backpackToggle: function () {
                this.backpackShow = !this.backpackShow
            },
            consoleToggle: function (str) {
                this.consoleContext = str
                this.consoleShow = true
                let that = this
                setTimeout(() => {
                    that.consoleShow = false
                }, 2000)
            },
            taskToggle: function () {
                this.taskShow = !this.taskShow
            }
        },
        components: {
            'backpack': backpack,
            'console': console,
            'task': task
        }
    }
</script>

<style lang="scss">
    @import "../public/normalize.min.css";

    .main {
        display: flex;
        background: url("../public/images/index/bg.gif");
        height: 100vh;
        .bg {
            background: url(../public/images/index/page_r.jpg) no-repeat;
            width: 440px;
            height: 680px;
        }
    }

    .top {
        display: flex;
        .left {
            background: url(../public/images/index/bg_left.jpg) no-repeat;
            width: 197px;
            height: 369px;
            .items {
                position: absolute;
                top: 130px;
                left: 20px;
            }
        }
        .right {
            position: relative;
            background: url(../public/images/index/content.jpg) no-repeat;
            width: 803px;
            height: 369px;
            .content {
                position: absolute;
                top: 35px;
            }
            .icons {
                position: absolute;
                display: flex;
                background: url("../public/images/index/icon.png") no-repeat;
                width: 185px;
                height: 45px;
                right: 0;
                > * {
                    width: 50px;
                    height: 45px;
                    cursor: pointer;
                }
            }
        }
    }

    .bottom {
        display: flex;
        .left {
            position: relative;
            background: url(../public/images/index/chat_bg.jpg) no-repeat;
            width: 709px;
            height: 239px;
            .console {
                position: absolute;
                right: 45px;
                top: 40px;
            }
            .input-group {
                position: absolute;
                bottom: 10px;
                left: 36px;
                display: flex;
                > * {
                    margin: 0 5px;
                }
                > input {
                    background-color: #ffdba1;
                    height: 17px;
                    border-radius: 3px;
                    padding-left: 10px;
                    width: 300px;
                    font-size: 12px;
                }
                > img {
                    cursor: pointer;
                }
            }
        }
        .right {
            position: relative;
            background: url(../public/images/index/tip_bg.jpg) no-repeat;
            width: 290px;
            height: 239px;
            .search {
                display: flex;
                position: absolute;
                top: 15px;
                left: 8px;
                align-items: center;
                .logo {
                    background: url(../public/images/index/so_bg.gif) no-repeat;
                    width: 75px;
                    height: 38px;
                }
                > input {
                    background-color: #ffdba1;
                    height: 17px;
                    border-radius: 3px;
                    padding-left: 10px;
                    font-size: 12px;
                    width: 120px;
                    margin-right: 7px;
                }
                > img {
                    height: 19px;
                    cursor: pointer;
                }
            }
        }
    }

    .task {
        position: absolute;
        left: 27%;
        top: 20%;
    }

    .backpack {
        position: absolute;
        left: 27%;
        top: 20%;
    }

    * {
        font-family: 微软雅黑, serif;
        font-size: 12px;
        box-sizing: content-box;
    }

    .fr {
        float: right;
    }

    .fl {
        float: left;
    }

    .clearfix:after,
    .clearfix:before {
        content: "";
        display: block;
        clear: both;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
    }

    input, button {
        outline: none;
        border: none;
    }
</style>