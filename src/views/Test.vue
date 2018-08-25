<template>
    <div>
        <button @click="login">登录</button>
        <div>消息: <input id="name" v-model="name" type="text"> <button @click="sendName">发送</button></div>
        <table id="greetings">
            <tr v-if="list != null" v-for="(v, i) in list">
                <td>{{v}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import SockJS from 'sockjs-client'
    import Stomp from '@stomp/stompjs'

    export default {
        name: "Test",
        data: function () {
            return {
                stompClient: null,
                list: null,
                name: '',
            }
        },
        watch: {
            list: function (newValue, oldValue) {
                if (newValue.length >= 10) {
                    this.list = []
                }
            }
        },
        created: function () {
            // this.connect();
        },
        methods: {
            connect: function () {
                let that = this
                let socket = new SockJS('http://127.0.0.1/test');
                this.stompClient = Stomp.over(socket);
                console.log(1)
                console.log(this.stompClient)
                this.stompClient.connect({}, function (frame) {
                    that.stompClient.subscribe('/topic/greetings', function (greeting) {
                        console.log(greeting)
                        that.showGreeting(JSON.parse(greeting.body).content);
                    });
                });
            },
            showGreeting(message) {
                if (this.list == null) {
                    this.list = []
                }
                this.list.push(message);
            },
            sendName: function () {
                this.stompClient.send("/app/hello", {}, JSON.stringify({'name': this.name}));
            },
            login: function () {
                this.axios.get('/greetings')
                    .then(res => {
                        if (this.stompClient !== null) {
                            this.stompClient.disconnect();
                        }
                        console.log(1)
                        this.connect()
                    })
            }
        }
    }
</script>

<style scoped>

</style>