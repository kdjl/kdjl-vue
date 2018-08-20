<template>
    <div>
        <table :width="width" width="290" style="text-align: center">
            <tr @mouseover="mouseover(prop)" @mouseout="mouseout" class="backpack-list" v-if="!fullIcon" :style="{'border': border}" @click="active(prop)" v-for="(prop,index) in props" :key="prop.id" :class="{active: activeItem.id === prop.id}">
                <td width="50" v-if="prop.prop.img"><img :src="getImg(prop.prop.img)" alt=""></td>
                <td>{{prop.prop.name}}</td>
                <td v-if="prop.price">{{prop.price}}</td>
                <td v-if="prop.salePrive">{{prop.salePrive}}</td>
                <td v-if="prop.prop.type">{{prop.prop.type}}</td>
                <td v-if="prop.num">{{prop.num}}</td>
                <show-prop-info :sid-mapper="sidMapper" :prop="prop" v-show="mouse.id === prop.id"></show-prop-info>
            </tr>
        </table>
        <table width="290" style="text-align: center" v-if="fullIcon" :style="{'width': width, 'border': border}">
            <tr @click="active(pet)" v-for="(pet,index) in props" :class="{active: activeItem.id === pet.id}" class="pasturePets">
                <td width="100"><img v-if="fullIcon" :src="getFullIcon(fullIcon)" alt="">{{pet.pet.name}}</td>
                <td width="85">{{pet.pet.fiveEle}}</td>
                <td>LV:{{pet.grade}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import showPropInfo from './showPropInfo'

    export default {
        name: "propItem",
        props: ['props', 'width', 'border', 'fullIcon', 'sidMapper'],
        computed: {
            inputListeners: function () {
                return Object.assign({},
                    this.$listeners,
                )
            }
        },
        data() {
            return {
                activeItem: '',
                mouse: '',
            }
        },
        methods: {
            active: function (item) {
                this.activeItem = item
                this.$emit('active', item)
            },
            getImg: function (icon) {
                return require('../../../public/images/backpack/' + icon)
            },
            getFullIcon: function (fullIcon) {
                return require('../../../public/images/' + fullIcon)
            },
            mouseover: function (prop) {
                this.mouse = prop
            },
            mouseout: function () {
                this.mouse = ''
            }
        },
        components: {
            'showPropInfo': showPropInfo
        }
    }
</script>

<style scoped lang="scss">

    table {
        border-collapse:collapse;
    }

    .pasturePets {
        padding: 2px 0;
        border: none;
    }

    tr {
        /*width: 299px;*/
        align-items: center;
        border-bottom: 1px dashed #c49b50;
        color: #855817;
        padding: 2px 0;
        &:hover {
            background-color: #f0e3b6;
            color: red;
        }
        img {
            width: 15px;
        }
        > li {
            text-align: center;
        }
        > div {
            position: absolute;
            left: -150px;
            text-align: left;
            z-index: 300;
        }
    }

    .active {
        background-color: #f0e3b6;
    }

    ul {
        display: flex;
        justify-content: space-around;
        padding: 2px 0;
        color: #855817;
        align-items: center;
        &:hover {
            background-color: #f0e3b6;
            font-weight: 700;
        }
    }
</style>