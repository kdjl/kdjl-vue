<template>
    <div>
        <ul v-if="!fullIcon" :style="{'width': width, 'border': border}" @click="active('prop' + index)" v-for="(prop,index) in props" :class="{active: activeItem === 'prop' + index}">
            <li v-if="prop.icon"><img :src="getImg(prop.icon)" alt=""></li>
            <li>{{prop.name}}</li>
            <li v-if="prop.price">{{prop.price}}</li>
            <li v-if="prop.salePrive">{{prop.salePrive}}</li>
            <li v-if="prop.type">{{prop.type}}</li>
            <li v-if="prop.number">{{prop.number}}</li>
        </ul>
        <ul v-if="fullIcon" :style="{'width': width, 'border': border}" @click="active('prop' + index)" v-for="(prop,index) in props" :class="{active: activeItem === 'prop' + index}">
            <li><img v-if="fullIcon" :src="getFullIcon(fullIcon)" alt="">{{prop.name}}</li>
            <li v-if="prop.rank">LV:{{prop.rank}}</li>
            <li v-if="prop.fiveLine">{{prop.fiveLine}}</li>
        </ul>
    </div>
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
    ul {
        /*width: 299px;*/
        align-items: center;
        border-bottom: 1px dashed #c49b50;
        color: #855817;
        display: flex;
        justify-content: space-around;
        padding: 2px 0;
        &:hover {
            background-color: #f0e3b6;
            font-weight: bold;
            border-radius: 10px;
        }
        img {
            width: 15px;
        }
    }

    .active {
        background-color: #f0e3b6;
        border-radius: 10px;
    }
</style>