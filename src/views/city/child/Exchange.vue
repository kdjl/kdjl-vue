<template>
    <div class="all">
        <div class="logo"></div>
        <div class="main-content">
            <div class="head">
                <div class="title">
                    <div class="gold item"></div>
                    <div class="crystal item"></div>
                    <div class="sale item"></div>
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
                    <div class="block"></div>
                    <div class="btn-group">
                        <div class="one-item">
                            数量:<input type="number">
                            <kd-button text="购买"></kd-button>
                            <kd-button text="拍卖"></kd-button>
                        </div>
                        <div class="three-item hidden">
                            <span>拍卖所资金:99999999999</span>
                            <kd-button color="#eacc88" text="取物"></kd-button>
                            <kd-button color="#eacc88" text="取钱"></kd-button>
                        </div>
                    </div>
                </div>
                <div class="content-r">
                    <img class="title" src="../../../../public/images/exchange/shop04.jpg" alt="">
                    <div class="block"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import button from '../../../components/button'
    export default {
        name: "Exchange",
        components: {
            'kd-button': button,
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
            .gold {
                background: url("../../../../public/images/exchange/pms02.jpg") 0 29px;
            }
            .crystal {
                background: url("../../../../public/images/exchange/pms02.jpg") -89px 29px;
            }
            .sale {
                background: url("../../../../public/images/exchange/pms02.jpg") 90px 29px;
            }
        }
    }
</style>