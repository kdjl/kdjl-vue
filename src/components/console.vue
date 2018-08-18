<template>
    <div class="console">
        <div class="content" v-html="content">
        </div>
    </div>
</template>

<script>
    export default {
        name: "console",
        props: ['content']
    }
</script>

<style scoped lang="scss">
    .console {
        background: rgba(0, 0, 0, 0.7);
        border-radius: 5px;
        height: 158px;
        width: 224px;
    }

    .content {
        opacity: 1;
        color: #fff;
        padding-top: 5px;
        padding-left: 5px;
    }
</style>