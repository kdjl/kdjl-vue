<template>
    <div class="all">
        <div class="logo"></div>
        <div class="main-content">
            <div class="head">
                <div class="title">
                    <div class="my-pet item">神秘商店</div>
                    <div class="trusteeship item">水晶商店</div>
                    <div class="my-pet item">VIP商店</div>
                    <div class="trusteeship item">限时抢购</div>
                </div>
            </div>
            <div class="context">
                <div class="content-l">
                    <div class="title-group">
                        <img class="title" src="../../../../public/images/mystery/smshop_01.jpg" alt="">
                        <img class="title" src="../../../../public/images/mystery/smshop_02.jpg" alt="">
                        <img class="title" src="../../../../public/images/mystery/smshop_03.jpg" alt="">
                        <img class="title" src="../../../../public/images/mystery/smshop_04.jpg" alt="">
                    </div>
                    <div class="block"></div>
                    <div class="btn-group">
                        <div>
                            <kd-button class="refresh" text="刷新"></kd-button>
                            数量: <input type="number">
                            <kd-button text="购买"></kd-button>
                        </div>
                    </div>
                </div>
                <div class="content-r">
                    <img class="title" src="../../../../public/images/mystery/shop04.jpg" alt="">
                    <div class="block"></div>
                    <div class="btn-group">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import button from '../../../components/button'
    export default {
        name: "MysteryShop",
        components: {
            'kd-button': button
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../../public/shop";

    .logo {
        background: url("../../../../public/images/mystery/smshop01.jpg");
        width: 138px;
        height: 319px;
    }

    .main-content {
        background: url("../../../../public/images/pasture/right.jpg");
        width: 650px;
        height: 319px;
    }

    .head {
        .title {
            background: url("../../../../public/images/mystery/family02.jpg");
            width: 357px;
            height: 29px;
            > .item {
                text-align: center;
                line-height: 29px;
                font-size: 13px;
                font-weight: bold;
                color: rgb(190, 151, 73);
                background: url("../../../../public/images/mystery/family02.jpg") 0 29px;
            }
        }
    }

    .title-group {
        height: 22px;
        margin-top: 13px;
    }

    .refresh {
        margin-right: 60px;
    }
</style>