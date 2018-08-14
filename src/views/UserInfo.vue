<template>
    <div class="all">
        <div class="left fl">
            <div class="user-name">
                玩家名称：<span class="name" v-if="userInfo != null">{{userInfo.name}}</span>
            </div>
            <div class="user-img">
                <img v-if="userInfo != null" :src="getUserImg()" width="170px">
            </div>
        </div>
        <div class="right fl">
            <div class="title">
                <div @click="userShow" class="prop btn" :class="{'prop-click': user}"></div>
                <div @click="friendShow" class="friend btn" :class="{'friend-click': friend}"></div>
            </div>
            <div v-if="userInfo != null" v-show="user" class="user-info">
                <ul>
                    <li>玩家昵称：{{userInfo.name}}</li>
                    <li>宠物数量：{{userInfo.petNum}}</li>
                    <li>元宝：{{userInfo.gold}}</li>
                    <li>水晶：{{userInfo.crystal}}</li>
                    <li>金币：{{userInfo.gold}}</li>
                    <li>VIP等级：0</li>
                    <li>VIP积分：0</li>
                    <li>威望：{{userInfo.prestige}}</li>
                    <li>双倍经验剩余时间：{{userInfo.multipleTime ? userInfo.multipleTime : 0}} 秒</li>
                    <li>双倍经验倍数：{{userInfo.expMultiple}}</li>
                    <li>自动战斗次数： {{userInfo.teamAuto}}</li>
                    <li>是否允许别人挑战自己： {{userInfo.challenge ? "允许" : "不允许"}}</li>
                    <li>组队自动战斗次数：{{userInfo.teamAuto}} 次</li>
                    <li>婚姻:{{userInfo.marriage ? "已婚" : "未婚"}}</li>
                    <li>当月VIP反馈积分：0(月底清零)</li>
                    <li>上月VIP反馈积分：0</li>
                </ul>
            </div>
            <div v-show="friend" class="friend-info">
                <div class="friend-all item">
                    <div class="title">好友列表:</div>
                    <div class="list">
                        您还未添加任何好友
                    </div>
                    <div class="play-name">
                        玩家名称：<input type="text">
                    </div>
                    <div class="btn-group">
                        <div class="add">
                            <kd-button text="添加"></kd-button>
                        </div>
                        <div class="remove">
                            <kd-button text="删除"></kd-button>
                        </div>
                    </div>
                </div>
                <div class="black-all item">
                    <div class="title">黑名单列表(能屏蔽黑名单玩家聊天):</div>
                    <div class="list">
                        您还未添加任何黑名单
                    </div>
                    <div class="play-name">
                        玩家名称：
                        <input type="text">
                    </div>
                    <div class="btn-group">
                        <div class="add">
                            <kd-button text="添加"></kd-button>
                        </div>
                        <div class="remove">
                            <kd-button text="删除"></kd-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import button from '../components/button'
    export default {
        name: "UserInfo",
        data() {
            return {
                userInfo: null,
                user: true,
                friend: false,
            }
        },
        created: function () {
            this.getUserInfo()
        },
        methods: {
            userShow: function () {
                this.user = true
                this.friend = false
            },
            friendShow: function () {
                this.user = false
                this.friend = true
            },
            getUserInfo: function () {
                let that = this
                this.axios.get("/userInfo/userInfo")
                    .then(res => {
                        if (res.data.status === 200) {
                            that.userInfo = res.data.data
                        } else {
                            alert(res.data.msg)
                        }
                    })
            },
            getUserImg: function () {
                return require('../../public/images/users/' + this.userInfo.imgLogo)
            },
        },
        components: {
            'kd-button': button
        }
    }
</script>

<style scoped>
    .left {
        background: url('../../public/images/users/left.jpg');
        width: 290px;
        height: 319px;
    }

    .left > .user-img {
        margin-top: 20px;
        margin-left: 55px;
    }

    .left > .user-name {
        margin-top: 22px;
        margin-left: 35px;
        font-weight: bold;
    }

    .right {
        background: url('../../public/images/users/right.jpg');
        width: 467px;
        height: 319px;
        padding-left: 27px;
    }

    .right > .title {
        background: url('../../public/images/users/ms_menu_bar.jpg');
        width: 180px;
        height: 30px;
    }

    .right > .title > .btn {
        width: 89px;
        height: 30px;
        float: left;
        cursor: pointer;
    }

    .prop-click {
        background: url('../../public/images/users/ms_menu_bar.jpg') 0 -30px;
    }

    .friend-click {
        background: url('../../public/images/users/ms_menu_bar.jpg') -90px -30px;
    }

    .user-info li {
        float: left;
        width: 220px;
        font-size: 13px;
        line-height: 30px;
    }

    .friend-info > .item {
        margin-right: 20px;
        width: 210px;
        float: left;
    }

    .friend-info > .item > .title {
        margin-top: 10px;
        margin-bottom: 5px;
    }

    .friend-info > .item > .play-name {
        margin: 10px 0;
    }

    .friend-info > .item > .play-name > input {
        border: 1px solid #999;
        border-radius: 3px;
        padding-left: 5px;
    }

    .friend-info > .item > .list {
        height: 175px;
        border: 1px solid #999;
        background-color: #fff;
        border-radius: 5px;
    }

    .friend-info .btn-group {
        margin-left: 55px;
    }

    .friend-info .btn-group > * {
        float: left;
        margin-left: 5px;
        cursor: pointer;
    }
</style>