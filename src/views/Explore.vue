<template>
    <div class="map">
        <div id="btn1" class="map-btn">
            <img src="../../public/images/explore/1.png" alt="">
        </div>
        <div id="btn2" class="map-btn">
            <img src="../../public/images/explore/2.png" alt="">
        </div>
        <div id="btn3" class="map-btn">
            <img src="../../public/images/explore/3.png" alt="">
        </div>
        <div id="btn4" class="map-btn">
            <img src="../../public/images/explore/4.png" alt="">
        </div>
        <div id="btn5" class="map-btn">
            <img src="../../public/images/explore/5.png" alt="">
        </div>
        <div id="btn6" class="map-btn">
            <img src="../../public/images/explore/6.png" alt="">
        </div>
        <div id="btn7" class="map-btn">
            <img src="../../public/images/explore/7.png" alt="">
        </div>
        <div id="btn8" class="map-btn">
            <img src="../../public/images/explore/8.png" alt="">
        </div>
        <div id="btn9" class="map-btn">
            <img src="../../public/images/explore/9.png" alt="">
        </div>
        <div id="btn10" class="map-btn">
            <img src="../../public/images/explore/10.png" alt="">
        </div>
        <div id="btn11" class="map-btn">
            <img src="../../public/images/explore/11.png" alt="">
        </div>
        <div id="fb-30" class="map-btn"></div>
        <div id="fb-50" class="map-btn"></div>
        <div id="fb-70" class="map-btn"></div>
        <div id="fb-85" class="map-btn"></div>
        <div id="battlefield" class="map-btn"></div>
        <div id="christmas" class="map-btn"></div>
        <div id="fortress" class="map-btn"></div>
        <div id="palace" class="map-btn"></div>
    </div>
</template>

<script>
    export default {
        name: "Explore"
    }
</script>

<style scoped>
    .map {
        background: url('../../public/images/explore/map6.jpg');
        width: 787px;
        height: 317px;
        position: relative;
    }

    .map-btn {
        width: 83px;
        height: 24px;
        cursor: pointer;
        position: absolute;
    }

    #btn1 {
        bottom: 44px;
        left: 324px;
    }

    #btn2 {
        bottom: 107px;
        left: 231px;
    }

    #btn3 {
        bottom: 143px;
        left: 329px;
    }

    #btn4 {
        left: 33px;
        top: 32px;
    }

    #btn5 {
        bottom: 16px;
        right: 64px;
    }

    #btn6 {
        bottom: 150px;
        left: 23px;
    }

    #btn7 {
        left: 228px;
        top: 66px;
    }

    #btn8 {
        left: 160px;
        top: 130px;
    }

    #btn9 {
        left: 120px;
        bottom: 27px;
    }

    #btn10 {
        right: 21px;
        top: 76px;
    }

    #btn11 {
        right: 234px;
        top: 129px;
    }

    #fb-30 {
        right: 14px;
        bottom: 80px;
    }

    #fb-50 {
        top: 20px;
        left: 149px;
    }

    #fb-70 {
        bottom: 72px;
        left: 18px;
    }

    #fb-85 {
        top: 26px;
        right: 186px;
    }

    #battlefield {
        bottom: 11px;
        right: 206px;
    }

    #christmas {
        top: 87px;
        right: 342px;
    }

    #fortress {
        top: 169px;
        right: 49px;
    }

    #palace {
        top: 169px;
        right: 174px;
    }
</style>