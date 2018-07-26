<template>
    <div class="map">
        <div class="title-logo"></div>
        <div class="next">
            <router-link to="/"></router-link>
        </div>
        <div @click="pet" class="pet"></div>
        <div @click="pet" class="family"></div>
        <div @click="pet" class="card"></div>
        <div @click="pet" class="lover"></div>
    </div>
</template>

<script>
    export default {
        name: "TwoCity",
        methods: {
            pet: function () {
                alert('暂未开放，敬请期待！')
            }
        },
    }
</script>

<style scoped lang="scss">
    a {
        display: inline-block;
    }

    .map {
        background: url("../../../public/images/cities/map2.png");
        width: 790px;
        height: 319px;
        > *:not(.title-logo) {
            position: absolute;
            cursor: pointer;
        }
        .title-logo {
            background: url("../../../public/images/cities/map_logo2_new.png");
            width: 790px;
            height: 319px;
        }
        .pet {
            bottom: 38px;
            left: 0;
            width: 149px;
            height: 133px;
            &:hover {
                background: url("../../../public/images/cities/9.png");
            }
        }

        .family {
            width: 226px;
            height: 194px;
            bottom: 0;
            left: 334px;
            &:hover {
                background: url("../../../public/images/cities/10.png");
            }
        }

        .card {
            width: 122px;
            height: 123px;
            bottom: 8px;
            left: 605px;
            &:hover {
                background: url("../../../public/images/cities/11.png");
            }
        }

        .lover {
            width: 197px;
            height: 154px;
            top: 0;
            right: 58px;
            &:hover {
                background: url("../../../public/images/cities/12.png");
            }
        }

        .next {
            background: url('../../../public/images/cities/next.png');
            left: 0;
            top: 105px;
            transform: rotate(180deg);
            animation: next 400ms linear infinite alternate;
            > a {
                height: 41px;
                width: 59px;
            }
        }

        @keyframes next {
            from {left: 0;}
            to {left: 20px;}
        }
    }
</style>