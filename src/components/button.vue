<template>
    <button v-on="inputListeners" class="btn" :class="disabled ? 'disabled' : ''">{{text}}</button>
</template>

<script>
    export default {
        name: "kd-button",
        props: ['text', 'disabled'],
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
        width: 52px;
        text-align: center;
        border: 1px solid #e2b741;
        border-radius: 20px;
        cursor: pointer;
    }
    .disabled {
        background-color: #fff;
        color: #999;
        cursor: not-allowed;
    }
</style>