<template>
    <div class="task-info">
        <div class="title">{{title}}</div>
        <div class="info-text" v-html="text"></div>
    </div>
</template>

<script>
    export default {
        name: "taskInfo",
        props: ['title', 'text']
    }
</script>

<style scoped>
    .task-info {
        margin: 0 10px;
    }

    .title {
        color: #92774b;
        font-weight: bold;
        font-size: 14px;
        margin: 10px 0;
    }

    .info-text {
        color: #a2834c;
        line-height: 1.5;
    }
</style>