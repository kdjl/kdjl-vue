<template>
    <div class="all">
        <form id="form">
            <div class="title">口袋精灵登录界面</div>
            <div class="input-group">
                <label for="username">用户名：</label>
                <input v-model.trim="username" id="username" type="text" placeholder="请输入用户名" autocomplete="off">
            </div>
            <div class="input-group">
                <label for="password">密码：</label>
                <input v-model="password" id="password" type="password" placeholder="请输入密码">
            </div>
            <div class="btn-group">
                <button @click="login" :disabled="!disabledBtn" :class="disabledBtn ? 'login' : 'disabled'" type="button">登录</button>
                <button type="button" @click="toRegister" class="register">未注册？点此注册</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                username: '',
                password: '',
            }
        },
        computed: {
            disabledBtn: function () {
                return (this.username != null && this.username !== '') && (this.password != null && this.password !== '')
            }
        },
        methods: {
            toRegister: function () {
                this.$router.push({path: '/register'})
            },
            login: function () {
                let that = this
                this.axios.post("/user/login", {
                    username: that.username,
                    password: that.password
                }).then(res => {
                    if (res !== undefined) {
                        alert(res.data.msg)
                        if (res.data.status !== 500) {
                            that.$router.push({
                                path: "/choose"
                            })
                        }
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">

    .all {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        min-height: 600px;
    }

    #form {
        width: 300px;
        border: 1px solid #ccc;
        padding: 30px 20px;
        display: flex;
        flex-direction: column;
        border-radius: 20px;
        .input-group {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
        }
        input {
            border: 1px solid #ccc;
            border-radius: 20px;
            height: 20px;
            padding: 10px 10px 10px 20px;
            &:hover,&:focus {
                border-color: #07b5fb;
            }
        }
        label {
            margin: 10px 5px;
            font-size: 15px;
            color: #07b5fb;
        }
        .title {
            text-align: center;
            font-size: 20px;
            margin: 10px 0;
            color: #07b5fb;
        }
        .btn-group {
            display: flex;
            flex-direction: column;
            margin: 10px 0;
            > button {
                height: 40px;
                margin-bottom: 15px;
                font-size: 20px;
                color: #fff;
                border-radius: 30px;
                cursor: pointer;
                border: 1px solid;
            }
            > .disabled {
                cursor: not-allowed;
                color: #888;
                background-color: #eee;
            }
            > .login {
                color: #67c23a;
                background: #f0f9eb;
                border-color: #c2e7b0;
                &:hover {
                    color: #fff;
                    background: #85ce61;
                    border-color: #85ce61;
                }
            }
            > .register {
                color: #f56c6c;
                background: #fef0f0;
                border-color: #fbc4c4;
                &:hover {
                    color: #fff;
                    background: #f78989;
                    border-color: #f78989;
                }
            }
        }
    }

</style>