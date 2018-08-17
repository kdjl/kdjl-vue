<template>
    <div class="backpack">
        <div class="content">
            <div class="title">
                <table width="300" style="text-align: center">
                    <tr>
                        <td v-for="v in title">{{v}}</td>
                    </tr>
                </table>
            </div>
            <div class="item">
                <prop-item :width="300" @active="active" :props="backpacks"></prop-item>
            </div>
        </div>
        <div class="btn-group">
            <kd-button @click="make" text="使用"></kd-button>
            <kd-button text="丢弃"></kd-button>
            <kd-button @click="toggleBatch" text="批量使用"></kd-button>
            <kd-button text="放入仓库"></kd-button>
        </div>
        <div class="exit" @click="$emit('backpack-exit')"></div>
        <div v-if="activeItem && showBatch" class="batchMake">
            <div class="input-gropu">
                <label for="name">道具名称：</label>
                <input disabled v-model="activeItem.name" id="name" type="text">
            </div>
            <div class="input-gropu">
                <label for="num">使用数量</label>
                <input autocomplete="off" @blur="checkMaxNum" v-model="inputNum" min="1" :max="activeItem.number" id="num" type="number">
            </div>
            <kd-button @click="batchMake" text="使用"></kd-button>
        </div>
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
                showBatch: false,
                activeItem: null,
                timeId: null,
                clickTime: 0,
                inputNum: 0
            }
        },
        watch: {
          backpacks: function (newValue, oldValue) {
              if (this.activeItem != null) {
                  this.activeItem = newValue.filter(v => {
                      console.log(v)
                      return v.id === this.activeItem.id
                  })[0]
                  if (this.activeItem != null) {
                      this.checkMaxNum()
                  }
              }
          }
        },
        methods: {
            make: function () {
                let that = this
                this.clickTime++
                if (this.timeId != null) {
                    clearTimeout(this.timeId)
                }
                this.timeId = setTimeout(() => {
                    let num = that.clickTime
                    that.clickTime = 0
                    that.useProp(num)
                }, 500)
            },
            batchMake: function () {
                this.useProp(this.inputNum)
            },
            toggleBatch: function () {
                this.showBatch = !this.showBatch
            },
            active: function (item) {
                this.activeItem = item
                this.inputNum = item.number
            },
            checkMaxNum: function () {
                if (this.inputNum > this.activeItem.number) {
                    this.inputNum = this.activeItem.number
                }
            },
            useProp: function (num) {
                let that = this
                this.axios.post('/prop/useGiftPack',{
                    pid: that.activeItem.pid,
                    bid: that.activeItem.bid,
                    num: num
                }).then(res => {
                    if (res.data.status === 200) {
                        that.$emit('console', res.data.data, 'backpack')
                    } else {
                        that.$emit('console', res.data.msg, 'backpack')
                    }
                })
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

    .batchMake {
        position: absolute;
        bottom: 44px;
        left: 168px;
        background-color: #eee0ab;
        padding: 10px;
        border: 1px solid #e2b741;
        color: #B06A01;
        width: 90px;
        border-radius: 5px;
        button {
            margin-top: 5px;
            padding: 1px 6px;
            width: 78px;
        }
        input {
            padding-left: 2px;
            width: 90px;
            border-radius: 2px;
        }
    }
</style>