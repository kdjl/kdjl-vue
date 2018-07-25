<template>
    <div class="backpack">
        <div class="content">
            <div class="title">
                <ul>
                    <li>图标</li>
                    <li>物品名称</li>
                    <li>类型</li>
                    <li>数量</li>
                </ul>
            </div>
            <div class="item">
                <ul @click="active('abc' + n)" :class="{active: activeItem === 'abc' + n}" v-for="n in 100">
                    <li><img src="../../public/images/backpack/1.gif" alt=""></li>
                    <li>{{backpacks.name}}</li>
                    <li>{{backpacks.type}}</li>
                    <li>{{backpacks.number}}</li>
                </ul>
            </div>
        </div>
        <div class="btn-group">
            <kd-button @click="make" text="使用"></kd-button>
            <kd-button text="丢弃"></kd-button>
            <kd-button text="批量使用"></kd-button>
            <kd-button text="放入仓库"></kd-button>
        </div>
        <div class="exit" @click="$emit('backpack-exit')"></div>
    </div>
</template>

<script>
    import button from './button'
    export default {
        name: "backpack",
        props: ['backpacks'],
        data() {
            return {
                activeItem: '',
            }
        },
        methods: {
            active: function (e) {
                this.activeItem = e
            },
            make: function () {
                this.$emit('console', this.activeItem)
            }
        },
        components: {
            'kd-button': button
        }
    }
</script>

<style scoped lang="scss">
    .backpack {
        background: url("../../public/images/backpack/pack.gif") no-repeat;
        width: 370px;
        height: 410px;
        .exit {
            position: absolute;
            top: 7px;
            right: 25px;
            height: 20px;
            width: 20px;
            cursor: pointer;
        }
    }

    .content {
        margin: 47px auto 0;
        width: 300px;
        .title ul {
            color: #794f11;
            font-weight: bold;
        }
        img {
            width: 20px;
        }
    }

    ul {
        display: flex;
        justify-content: space-around;
    }

    .item {
        overflow: auto;
        width: 316px;
        height: 284px;
        margin-top: 9px;
        > ul {
            align-items: center;
            border-bottom: 1px dashed #c49b50;
            color: #855817;
            &:hover {
                background-color: #f0e3b6;
                border-radius: 10px;
            }
        }
        .active {
            background-color: #f0e3b6;
            border-radius: 10px;
        }
    }
    
    .btn-group {
        display: flex;
        justify-content: space-around;
        margin: 16px auto 0;
        width: 300px;
        .btn {
            background-color: #eee0ab;
            width: 52px;
            text-align: center;
            border: 1px solid #e2b741;
            border-radius: 20px;
            cursor: pointer;
        }
    }
</style>