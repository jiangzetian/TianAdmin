<template>
    <el-row class="layout" type="flex" justify="center" align="middle">
        <div class="loginCard">
            <div class="loginImg">
                <img src="@/assets/天小天白衣LOGO.jpg" alt="">
                <p>TianAdmin博客管理后台</p>
            </div>
            <div class="loginInput">
                <div class="formBox">
                    <avue-login :option="option" @submit="submit"></avue-login>
                </div>
            </div>
        </div>
    </el-row>
</template>

<script>
    import {loginOption} from './option.js'
    import LoginAPI from "@/request/api/login";
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
            //提交登录
            async submit(e){
                if(!e){return false}
                let res = await LoginAPI.signUp(e);
                if (res.data.token){
                    this.$store.dispatch('setUserInfo',{info:res.data});
                    this.$router.replace({path:"/"})
                }
            }
        },
        created() {
            this.$store.dispatch('clearUserInfo');
        },
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
    .layout{
        width: 100%;
        height: 100%;
        background: #F5F5FA;
        .loginCard{
            background: #fff;
            width: 100%;
            height: 100%;
            max-width: 1000px;
            max-height: 550px;
            display: flex;
            justify-content: space-between;
        }
        .loginImg{
            background: #1890FF;
            width: 40%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img{
                max-width: 120px;
                border-radius: 100%;
            }
            p{
                margin: 20px 0;
                font-size: 22px;
                color: #fff;
            }
        }
        .loginInput{
            width: 60%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .formBox{
            width: 100%;
            max-width: 380px;
        }
    }
</style>
