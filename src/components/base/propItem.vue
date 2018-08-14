<template>
    <table :width="width" width="290" style="text-align: center">
        <!--<ul class="backpack-list" v-if="!fullIcon" :style="{'width': width, 'border': border}" @click="active('prop' + index)" v-for="(prop,index) in props" :class="{active: activeItem === 'prop' + index}">-->
            <!--<li style="width: 40px" v-if="prop.icon"><img :src="getImg(prop.icon)" alt=""></li>-->
            <!--<li style="width: 80px">{{prop.name}}</li>-->
            <!--<li style="width: 80px" v-if="prop.price">{{prop.price}}</li>-->
            <!--<li style="width: 80px" v-if="prop.salePrive">{{prop.salePrive}}</li>-->
            <!--<li style="width: 50px" v-if="prop.type">{{prop.type}}</li>-->
            <!--<li style="width: 50px" v-if="prop.number">{{prop.number}}</li>-->
        <!--</ul>-->
        <tr class="backpack-list" v-if="!fullIcon" :style="{'border': border}" @click="active(prop)" v-for="(prop,index) in props" :key="prop.id" :class="{active: activeItem.id === prop.id}">
            <td v-if="prop.icon"><img :src="getImg(prop.icon)" alt=""></td>
            <td>{{prop.name}}</td>
            <td v-if="prop.price">{{prop.price}}</td>
            <td v-if="prop.salePrive">{{prop.salePrive}}</td>
            <td v-if="prop.type">{{prop.type}}</td>
            <td v-if="prop.number">{{prop.number}}</td>
        </tr>
        <ul v-if="fullIcon" :style="{'width': width, 'border': border}" @click="active('prop' + index)" v-for="(prop,index) in props" :class="{active: activeItem === 'prop' + index}">
            <li><img v-if="fullIcon" :src="getFullIcon(fullIcon)" alt="">{{prop.name}}</li>
            <li v-if="prop.rank">LV:{{prop.rank}}</li>
            <li v-if="prop.fiveLine">{{prop.fiveLine}}</li>
        </ul>
    </table>
</template>

<script>
    export default {
        name: "propItem",
        props: ['props', 'width', 'border', 'fullIcon'],
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
            }
        }
    }
</script>

<style scoped lang="scss">

    table {
        border-collapse:collapse;
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