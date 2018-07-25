<template>
    <div class="task">
        <div class="content">
            <div class="info-item">
                <div class="title">任务列表</div>
                <div class="task-item">
                    <ul class="items">
                        <div class="item" v-for="n in 20">
                            <li @click="taskActive('task' + n)" :class="{active: taskActiveItem === 'task' + n}">
                                <img :src="isContainerTaskActives('task' + n) ? sub : add" alt="">测试任务
                            </li>
                            <ul v-show="isContainerTaskActives('task' + n)" class="child">
                                <li @click="taskChild('task' + n + 'child' + a)" :class="{active: taskChildItem === 'task' + n + 'child' + a}" v-for="a in 20">
                                    <img src="../../public/images/task/task_ico_can.jpg" alt="">测试任务
                                </li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
            <div class="text">
                <div class="title">测试任务-口袋的起源</div>
                <div class="task-content">
                    <task-info title="任务描述" text="接受地点:任务使者 <br>
                            接受描述: <br>
                            合成,是提升宠物成长的办法之一,去捕捉宠物合成吧!"></task-info>
                    <task-info title="任务目标" text="击杀 金波姆王 100个"></task-info>
                    <task-info title="任务进度" text="已击杀 金波姆王 (0/100) 未完成"></task-info>
                    <task-info title="任务奖励" text="获得物品：捕捉球大礼包 20个 <br>
                            中练丸 20个 <br>
                            金币 300000 个"></task-info>
                </div>
                <div class="btn-group">
                    <kd-button text="接受"></kd-button>
                    <kd-button disabled="true" text="完成"></kd-button>
                    <kd-button disabled="true" text="放弃"></kd-button>
                </div>
            </div>
        </div>
        <div @click="$emit('task-exit')" class="exit"></div>
    </div>
</template>

<script>
    import taskInfo from './taskInfo'
    import button from './button'
    export default {
        name: "task",
        props: ['exit'],
        data() {
            return {
                taskActiveItem: '',
                taskChildItem: '',
                taskActives: [],
                add: require('../../public/images/task/ico_2.gif'),
                sub: require('../../public/images/task/ico_1.gif')
            }
        },
        methods: {
            taskActive: function (e) {
                this.updateTaskActives(e)
                this.taskActiveItem = e
            },
            taskChild: function (e) {
                this.taskChildItem = e
            },
            updateTaskActives: function (str) {
                let index = this.taskActives.indexOf(str)
                if (index != -1) {
                    this.taskActives.splice(index, 1)
                    return
                }
                this.taskActives.push(str)
            },
            isContainerTaskActives: function (str) {
                console.log(str)
                return this.taskActives.indexOf(str) !== -1
            }
        },
        components: {
            'task-info': taskInfo,
            'kd-button': button
        }
    }
</script>

<style scoped lang="scss">
    .task-content {
        overflow: auto;
        height: 280px;
    }

    .btn-group {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 27px;
        > * {
            margin: 0 5px;
        }
    }

    .exit {
        width: 20px;
        height: 20px;
        cursor: pointer;
        position: absolute;
        top: 6px;
        right: 24px;
    }

    .task {
        background: url("../../public/images/task/task_bg.gif") no-repeat;
        width: 700px;
        height: 430px;
    }

    .content {
        margin: 71px auto 0;
        width: 657px;
        display: flex;
    }

    .info-item {
        width: 230px;
        margin-right: 13px;
        margin-left: 2px;
    }

    .text {
        width: 418px;
    }

    .title {
        height: 27px;
        line-height: 27px;
        text-align: center;
        color: #92774b;
        font-weight: bold;
        font-size: 14px;
    }

    .task-item {
        margin-top: 2px;
        .items {
            height: 306px;
            overflow: auto;
            img {
                margin: 0 10px;
            }
            li {
                padding: 6px 0;
                border-bottom: 1px dashed black;
                font-weight: bold;
                color: #b89d6d;
                font-size: 13px;
                &:hover {
                    background-color: #FFFEE9;
                }
            }
            .child > li {
                padding-left: 20px;
                color: #d55f00;
            }
            .active {
                background-color: #FFFEE9;
            }
        }
    }
</style>