<template>
    <div id="login">
        <el-row class="row" type="flex" justify="space-around" align="middle">
            <el-col :md="8" :sm="12" :xs="22">
                <el-card class="card">
                    <template slot="header">
                        <div class="logo">
                            <img src="../../assets/天小天白衣LOGO.jpg" alt="LOGO">
                        </div>
                        <h2 class="title">TianAdmin</h2>
                        <span>天小天个人网-后台</span>
                    </template>
                    <avue-login :option="option" @submit="submit"></avue-login>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {loginOption} from './option.js'
    import LoginAPI from "@/request/api/login";
    import {getBYBG} from "@/request/api/common";
    export default {
        name: "Login",
        data(){
            return{
                tel:"",
                pwd:"",
                codesrc: '',
                option:loginOption
            }
        },
        methods:{
            //获取壁纸
            async bgImg(){
                let res = await getBYBG({});
                console.log(res)
            },
            //提交登录
            async submit(e){
                if(!e){return false}
                let res = await LoginAPI.signUp(e);
                if (res.data.token){
                    sessionStorage.setItem("token",res.data.token);
                    this.$router.push({path:"/"})
                }
            }
        },
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
#login{
    width: 100%;
    height: 100%;
    background: url("https://bing.biturl.top/?resolution=1920&format=image&index=0&mkt=zh-CN");
    .row{
        width: 100%;
        height: 100%;
    }
    .card{
        position: relative;
    }
    /deep/.el-card{
        overflow: visible;
    }
    .logo{
        position: absolute;
        top: 0;
        right: 20px;
        width: 100px;
        height: 100px;
        border-radius: 100%;
        transform: translateY(-50%);
        overflow: hidden;
        box-shadow:0 -5px 5px rgba(0,0,0,0.2);
        img{
            width: 100%;
        }
    }
    .title{
        display: inline-block;
        margin: 0 5px;
    }
    @media screen and (max-width: 767px) {
        .logo{
            position: static;
            transform:none;
            margin: 0 auto;
            box-shadow:0 0 5px rgba(0,0,0,0.2);
        }
    }
}
</style>
