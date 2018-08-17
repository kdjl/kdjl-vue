<template>
    <div class="all">
        <div class="name">{{prop.name}}</div>
        <div class="transaction">{{prop.deal}}</div>
        <div class="type">{{prop.type}}</div>
        <div class="info">{{prop.info}}</div>
    </div>
</template>

<script>
    export default {
        name: "showPropInfo",
        props: ["prop"]
    }
</script>

<style scoped>
    .all {
        width: 150px;
        background: rgba(0, 0, 0, 0.4);
        padding: 10px;
        border: 1px solid #fff;
        border-radius: 10px;
    }

    .name {
        color: greenyellow;
    }
    
    .transaction {
        color: #ccc;
    }
    
    .type {
        color: #80390d;
    }
    
    .info {
        color: #fff;
    }
</style>