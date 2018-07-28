<template>
    <div class="all">
        <div class="logo"></div>
        <div class="main-content">
            <div class="head">
                <div class="title">
                    <div class="my-pet item"></div>
                    <div class="trusteeship item"></div>
                </div>
            </div>
            <div class="context">
                <div class="content-l">
                    <img class="title" src="../../../../public/images/pasture/muchang_09.jpg" alt="">
                    <div class="block"></div>
                    <div class="btn-group">
                        <div>
                            牧场宠物数量: 10/30
                            <kd-button text="主战"></kd-button>
                            <kd-button text="寄养"></kd-button>
                            <kd-button text="携带"></kd-button>
                            <kd-button text="丢弃"></kd-button>
                        </div>
                    </div>
                </div>
                <div class="content-r">
                    <img class="title" src="../../../../public/images/pasture/muchang_11.jpg" alt="">
                    <div class="block"></div>
                    <div class="btn-group">
                        <div>
                            <kd-button text="我要加密牧场"></kd-button>
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
        name: "Pasture",
        components: {
            'kd-button': button
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../../public/shop";
    .logo {
        background: url("../../../../public/images/pasture/muchang_03.jpg");
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
            background: url("../../../../public/images/pasture/mcchoose.jpg");
            width: 179px;
            height: 29px;
            .my-pet {
                background: url("../../../../public/images/pasture/mcchoosed1.jpg") 0 29px;
            }
            .trusteeship {
                width: 90px;
                background: url("../../../../public/images/pasture/mcchoosed2.jpg") -88px 29px;
            }
        }
    }
    .context {
        .btn-group {
            > div > * {
                margin-left: 5px;
            }
            button {
                padding: 0 6px;
            }
        }
    }
</style>