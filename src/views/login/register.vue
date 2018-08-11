<template>
    <div class="all">
        <form id="form">
            <div class="title">口袋精灵注册界面</div>
            <div class="input-group">
                <label :style="{color: isuError}" for="username">用户名：{{usernameError}}</label>
                <input :style="{borderColor: isuError}" @blur="checkUsername" v-model.trim="username" id="username"
                       type="text" placeholder="请输入用户名" autocomplete="off">
            </div>
            <div class="input-group">
                <label for="password">密码：</label>
                <input v-model="password" id="password" type="password" placeholder="请输入密码">
            </div>
            <div class="btn-group">
                <button :disabled="!disabledBtn" :class="disabledBtn ? 'register' : 'disabled'" @click="register" type="button">注册</button>
                <button type="button" @click="toLogin" class="login">已注册？点此登录</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "register",
        data() {
            return {
                username: '',
                password: '',
                usernameError: '',
                isuError: '',
            }
        },
        computed: {
            disabledBtn: function () {
                return this.isuError === 'green' && (this.password != null && this.password !== '')
            }
        },
        methods: {
            toLogin: function () {
                this.$router.push({path: '/'})
            },
            register: function () {
                let that = this
                this.axios.post("/user/register", {
                    username: that.username,
                    password: that.password
                }).then(res => {
                    if (res !== undefined) {
                        alert(res.data.msg)
                        if (res.data.status !== 500) {
                            that.$router.push({
                                path: "/"
                            })
                        }
                    }
                })
            },
            checkUsername: function () {
                let that = this
                if (this.username !== '') {
                    this.axios.get("/user/check?username=" + that.username)
                        .then(res => {
                            that.usernameError = res.data.msg
                            if (res.data.status === 200) {
                                that.isuError = 'green'
                            } else {
                                that.isuError = 'red'
                            }
                        })
                }
            },
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
            padding: 10px 10px 10px 20px;
            border-radius: 20px;
            height: 20px;
            &:hover, &:focus {
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