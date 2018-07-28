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
                <prop-item @active="active" :props="backpacks"></prop-item>
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
    import propItem from './base/propItem'
    export default {
        name: "backpack",
        props: ['backpacks'],
        data() {
            return {
                activeItem: '',
            }
        },
        methods: {
            make: function () {
                this.$emit('console', this.activeItem)
            },
            active: function (item) {
                this.activeItem = item
            }
        },
        components: {
            'kd-button': button,
            'prop-item': propItem,
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
    }
    
    .btn-group {
        display: flex;
        justify-content: space-around;
        margin: 16px auto 0;
        width: 300px;
        .btn {
            padding: 1px 6px;
            width: 52px;
        }
    }
</style>