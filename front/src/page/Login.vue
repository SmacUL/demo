<template>
  <div id="loginDiv">
    <div>
      <div>
        <span>用户名：</span>
        <el-input v-model="username" placeholder="请输入用户名"></el-input>
      </div>
      <div>
        <span>密码：</span>
        <el-input v-model="password" placeholder="请输入密码"></el-input>
      </div>

      <div>
        <el-button type="primary" @click="login()">Login</el-button>
      </div>
      <span class="clickFont">没有账号？</span><span>注册</span>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                username:'NONE',
                password:'NONE',
            }
        },
        methods: {
            login() {
                // 需要修改需修改

                // this.$axios.post('/api/login/verify',{
                //     username:this.username,
                //     passwork:this.password,
                // }).then((response) => {
                // if (response.data == true){
                //     this.$Message.success('登录成功!');
                //     this.$router.push('index');
                // }else{
                //     this.$Message.error("用户名或密码错误");
                // }
                // });
                
                this.$router.push('index');
            },
        }

    }
</script>

<style>
  #loginDiv{
    width: 250px;
    height: 300px;
    margin: 0 auto;
    text-align: center;
  }
</style>