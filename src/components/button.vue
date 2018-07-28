<template>
    <button v-on="inputListeners" :style="{'background-color': color}" class="btn" :class="disabled ? 'disabled' : ''">{{text}}</button>
</template>

<script>
    export default {
        name: "kd-button",
        props: ['text', 'disabled', 'color'],
        computed: {
            inputListeners: function () {
                return Object.assign({},
                    this.$listeners,
                )
            }
        }
    }
</script>

<style scoped lang="scss">
    .btn {
        background-color: #eee0ab;
        /*width: 52px;*/
        padding: 1px 10px;
        text-align: center;
        border: 1px solid #e2b741;
        border-radius: 20px;
        cursor: pointer;
        color: #B06A01;
        &:hover {
            background-color: #fff;
        }
    }
    .disabled {
        background-color: #fff;
        color: #999;
        cursor: not-allowed;
    }
</style>