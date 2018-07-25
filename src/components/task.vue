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
            </div>
        </div>
        <div @click="$emit('task-exit')" class="exit"></div>
    </div>
</template>

<script>
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
        }
    }
</script>

<style scoped lang="scss">
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