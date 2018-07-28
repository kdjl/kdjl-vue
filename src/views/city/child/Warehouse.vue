<template>
    <div class="all">
        <div class="logo"></div>
        <div class="main-content">
            <div class="head">
                <div class="title"></div>
            </div>
            <div class="context">
                <div class="content-l">
                    <img class="title" src="../../../../public/images/warehouse/icon03.jpg" alt="">
                    <div class="block"></div>
                    <div class="btn-group">
                        <div>
                            <span class="space">仓库空间:15/60</span>
                            <span>数量:<input type="number"></span>
                            <kd-button text="取出"></kd-button>
                            <kd-button text="存放"></kd-button>
                        </div>
                    </div>
                </div>
                <div class="content-r">
                    <img class="title" src="../../../../public/images/warehouse/shop04.jpg" alt="">
                    <div class="block"></div>
                    <div class="btn-group">
                        <div>
                            <span class="space">背包空间:15/60</span>
                            <kd-button text="我要加密仓库"></kd-button>
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
        name: "Warehouse",
        components: {
            'kd-button': button
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../../public/shop";

    .logo {
        background: url("../../../../public/images/warehouse/cangku01.jpg");
        width: 138px;
        height: 319px;
    }

    .main-content {
        background: url("../../../../public/images/warehouse/right.jpg");
        width: 650px;
        height: 319px;
    }

    .head {
        .title {
            background: url("../../../../public/images/warehouse/cangku03.jpg");
            width: 90px;
            height: 29px;
        }
    }

    .content-l > .btn-group{
        > div > .space {
            margin-left: 0;
        }
        input {
            width: 40px;
        }
    }
</style>