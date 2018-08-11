<template>
    <div class="backpack">
        <div class="content">
            <div class="title">
                <table width="290" style="text-align: center">
                    <tr>
                        <td v-for="v in title">{{v}}</td>
                    </tr>
                </table>
            </div>
            <div class="item">
                <prop-item :width="290" @active="active" :props="backpacks"></prop-item>
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
        props: ['backpacks', 'title'],
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
        .title table {
            color: #794f11;
            font-weight: bold;
        }
        img {
            width: 20px;
        }
    }

    .item {
        overflow: auto;
        width: 312px;
        height: 284px;
        margin-top: 5px;
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