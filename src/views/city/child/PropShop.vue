<template>
    <div class="all">
        <div class="logo"></div>
        <div class="main-content">
            <div class="head">
                <div class="title">
                    <div class="prop-shop item"></div>
                    <div class="prestige item"></div>
                </div>
                <div class="gold-text">
                    <img src="../../../../public/images/exchange/icon.jpg" alt="">
                    金币:6000000000
                </div>
            </div>
            <div class="context">
                <div class="content-l">
                    <img class="title" src="../../../../public/images/prop/shop03.jpg" alt="">
                    <div class="block"></div>
                    <div class="btn-group">
                        <div>
                            数量:<input type="number">
                            <kd-button text="购买"></kd-button>
                            <kd-button text="卖出"></kd-button>
                        </div>
                    </div>
                </div>
                <div class="content-r">
                    <img class="title" src="../../../../public/images/prop/shop04.jpg" alt="">
                    <div class="block"></div>
                    <div class="btn-group">
                        <div>
                            背包空间:33/120
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import button from '../../../components/button'

    export default {
        name: "PropShop",
        components: {
            'kd-button': button
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../../public/shop";

    .logo {
        background: url("../../../../public/images/prop/left.jpg");
        width: 138px;
        height: 319px;
    }

    .main-content {
        background: url("../../../../public/images/prop/right.jpg");
        width: 650px;
        height: 319px;
    }

    .head {
        .title {
            background: url("../../../../public/images/prop/choosebox.jpg");
            width: 179px;
            height: 29px;
            .prop-shop {
                background: url("../../../../public/images/prop/1.png");
            }
            .prestige {
                background: url("../../../../public/images/prop/2.png") 3px;
            }
        }
    }

    .head .gold-text {
        margin-left: 60px;
    }
</style>