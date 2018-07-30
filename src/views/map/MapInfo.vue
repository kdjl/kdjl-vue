<template>
    <div class="all">
        <div class="introduce">
            <div class="mapInfo">
                <div class="map-name">探险—妖精森林 成长限制：无限制</div>
                <div class="grade">怪物的等级：21 到 26 级</div>
                <div class="pets">
                    出现怪物：金波姆,波光姆,绿波姆,波碧姆,水波姆,波波姆,火波姆,波纳姆,土波姆,波岩姆,§凶残的黄金鸟§
                </div>
            </div>
            <div class="user-pets">
                <img class="main-pet" src="../../../public/images/pethome/k166.gif" alt="">
                <img src="../../../public/images/pethome/k166.gif" alt="">
                <img src="../../../public/images/pethome/k166.gif" alt="">
            </div>
        </div>
        <div class="team">
            <div class="btn-group">
                <button @click="startBattle">战斗</button>
                <button @click="toExplore" class="exit">离开</button>
            </div>
        </div>
        <div class="online"></div>
    </div>
</template>

<script>
    export default {
        name: "MapInfo",
        created: function () {
            console.log(this.$route.params.mapId === 1)
        },
        methods: {
          startBattle: function () {
              this.$router.push({ path: `/battle` })
          },
          toExplore: function () {
              this.$router.push({ path: `/explore` })
          }
        },
        beforeRouteUpdate(to, from, next) {
            if (to.params.mapId === '1') {
                document.title = '测试数据'
            } else {
                document.title = '测试地图'
            }
            next()
        }
    }
</script>

<style scoped lang="scss">
    .all {
        display: flex;
    }

    .introduce {
        background: url("../../../public/images/explore/zdzd_bj1.jpg");
        width: 300px;
        height: 319px;
        > .mapInfo {
            width: 240px;
            padding-left: 32px;
            padding-top: 67px;
            line-height: 18px;
        }
        > .user-pets {
            display: flex;
            margin-top: 53px;
            margin-left: 20px;
            justify-content: space-evenly;
            > img {
                opacity: .5;
                cursor: pointer;
            }
            > .main-pet {
                opacity: 1;
            }
        }
    }

    .team {
        background: url("../../../public/images/explore/zdzd_bj2.jpg");
        width: 283px;
        height: 319px;
    }

    .online {
        background: url("../../../public/images/explore/zdzd_bj3.jpg");
        width: 204px;
        height: 319px;
    }

    .team {
        position: relative;
        > .btn-group {
            position: absolute;
            bottom: 20px;
            left: 12px;
            > button {
                background: linear-gradient(#fbe5ac, #fbaf27);
                font-size: 20px;
                padding: 5px 20px;
                border-radius: 10px;
                color: #80390d;
                border: 1px solid #e7b73e;
                margin-left: 30px;
                cursor: pointer;
            }
            > .exit {
                background: linear-gradient(#c9eea3, #61ad0c);
                color: #396a04;
                border-color: #6eb02b;
            }
        }
    }
</style>