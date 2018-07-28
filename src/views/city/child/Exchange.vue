<template>
    <div class="all">
        <div class="logo"></div>
        <div class="main-content">
            <div class="head">
                <div class="title">
                    <div @click="goldShow" class="gold item"><div v-show="gold"></div></div>
                    <div @click="crystalShow" class="crystal item"><div v-show="crystal"></div></div>
                    <div @click="saleShow" class="sale item"><div v-show="sale"></div></div>
                </div>
                <div class="gold-text">
                    <img src="../../../../public/images/exchange/icon.jpg" alt="">
                    金币:6000000000
                </div>
                <div class="crystal-text">
                    <img src="../../../../public/images/exchange/icon06.jpg" alt="">
                    水晶:6000000
                </div>
            </div>
            <div class="context">
                <div class="content-l">
                    <img class="title" src="../../../../public/images/exchange/icon07.jpg" alt="">
                    <div class="block">
                        <ul>
                            <li>图标</li>
                            <li>物品名称</li>
                            <li>价格</li>
                            <li>数量</li>
                        </ul>
                        <div class="ex-item">
                            <prop-item @active="active" border="none" :props="exchangeProp"></prop-item>
                        </div>
                    </div>
                    <div class="btn-group">
                        <div v-show="!sale" class="one-item">
                            数量:<input type="number">
                            <kd-button text="购买"></kd-button>
                            <kd-button text="拍卖"></kd-button>
                        </div>
                        <div v-show="sale" class="three-item">
                            <span>拍卖所资金:99999999999</span>
                            <kd-button text="取物"></kd-button>
                            <kd-button text="取钱"></kd-button>
                        </div>
                    </div>
                </div>
                <div class="content-r">
                    <img class="title" src="../../../../public/images/exchange/shop04.jpg" alt="">
                    <div class="block">
                        <ul>
                            <li>图标</li>
                            <li>物品名称</li>
                            <li>价格</li>
                            <li>数量</li>
                        </ul>
                        <div class="ex-item">
                            <prop-item @active="active" border="none" :props="goldProp"></prop-item>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import button from '../../../components/button'
    import propItem from '../../../components/base/propItem'
    export default {
        name: "Exchange",
        created: function () {
            this.exchangeProp = this.goldProp
        },
        data() {
          return {
              activeItem: '',
              crystal: false,
              sale: false,
              gold: true,
              goldProp:[
                  {
                      icon: '1.gif',
                      name: '治疗药水',
                      price: 8888,
                      number: '100'
                  },{
                      icon: '2.gif',
                      name: '治疗药水',
                      price: 88888,
                      number: '100'
                  },{
                      icon: '3.gif',
                      name: '治疗药水',
                      price: 88988,
                      number: '100'
                  },{
                      icon: '4.gif',
                      name: '治疗药水',
                      price: 18888,
                      number: '100'
                  },
              ],
              exchangeProp: '',
              crystalProp:[
                  {
                      icon: '1.gif',
                      name: '水晶道具',
                      price: 8888,
                      number: '100'
                  },{
                      icon: '2.gif',
                      name: '水晶道具',
                      price: 88888,
                      number: '100'
                  },{
                      icon: '3.gif',
                      name: '水晶道具',
                      price: 88988,
                      number: '100'
                  },{
                      icon: '4.gif',
                      name: '水晶道具',
                      price: 18888,
                      number: '100'
                  },
              ],
              saleProp:[
                  {
                      icon: '1.gif',
                      name: '水晶道具',
                      price: 8888,
                      number: '100'
                  },{
                      icon: '2.gif',
                      name: '水晶道具',
                      price: 88888,
                      number: '100'
                  },{
                      icon: '3.gif',
                      name: '金币道具',
                      price: 88988,
                      number: '100'
                  },{
                      icon: '4.gif',
                      name: '金币道具',
                      price: 18888,
                      number: '100'
                  },
              ],
          }
        },
        methods: {
            active: function (item) {
                this.activeItem = item
            },
            goldShow: function () {
                this.gold = true
                this.crystal = false
                this.sale = false
                this.exchangeProp = this.goldProp
            },
            crystalShow: function () {
                this.gold = false
                this.crystal = true
                this.sale = false
                this.exchangeProp = this.crystalProp
            },
            saleShow: function () {
                this.gold = false
                this.crystal = false
                this.sale = true
                this.exchangeProp = this.saleProp
            }
        },
        components: {
            'kd-button': button,
            'prop-item': propItem,
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../../public/shop";
    .logo {
        background: url("../../../../public/images/exchange/pms01.jpg");
        width: 138px;
        height: 319px;
    }
    .main-content {
        background: url("../../../../public/images/exchange/right.jpg");
        width: 650px;
        height: 319px;
    }
    .head {
        .title {
            background: url("../../../../public/images/exchange/pms02.jpg");
            width: 268px;
            height: 29px;
            .gold > div{
                background: url("../../../../public/images/exchange/pms02.jpg") 0 29px;
            }
            .crystal > div{
                background: url("../../../../public/images/exchange/pms02.jpg") -89px 29px;
            }
            .sale > div{
                background: url("../../../../public/images/exchange/pms02.jpg") 90px 29px;
            }
        }
    }
</style>