<template>
    <div class="propAll">
        <div class="name">{{prop.prop.name}}</div>
        <div class="transaction">{{prop.prop.deal ? '可交易' : '不可交易'}}</div>
        <div class="type">{{prop.prop.type}}</div>
        <template v-if="prop.equips != null && prop.equips.length !== 0">
            <div>{{getType(prop.equips[0].type)}}</div>
            <div :class="{mainAttr: equip.main}" v-for="equip in prop.equips">+{{equip.attr + ' ' + getAttrType(equip.attrType)}}</div>
        </template>
        <div class="info">{{prop.prop.info}}</div>
    </div>
</template>

<script>
    export default {
        name: "showPropInfo",
        props: ["prop"],
        methods: {
            getType: function (v) {
                let typeMap = {
                    1: '武器装备',
                    2: '身体装备',
                    3: '头部装备',
                    4: '项链装备',
                    5: '手镯装备',
                    6: '戒指装备',
                    7: '道具装备',
                    8: '宝石装备',
                    9: '翅膀装备',
                    10: '脚部装备'
                }
                return typeMap[v]
            },
            getAttrType: function (v) {
                let attrType = {
                    1: '攻击',
                    2: '防御',
                    3: '生命',
                    4: '魔法',
                    5: '命中',
                    6: '闪避',
                    7: '速度'
                }
                return attrType[v]
            }
        }
    }
</script>

<style scoped lang="scss">
    .propAll {
        width: 150px;
        background: rgba(0, 0, 0, 0.8);
        padding: 10px;
        border: 1px solid #fff;
        border-radius: 10px;
        > div {
            line-height: 13px;
            color: #fff;
            margin-bottom: 2px;
        }
        > .name {
            color: greenyellow;
        }

        > .transaction {
            color: #ccc;
        }

        > .type {
            color: red;
        }

        > .info {
            color: #fff;
        }

        > .mainAttr {
            color: #007cff;
        }
    }
</style>